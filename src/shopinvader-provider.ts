import { makeDomainFunction, inputFromForm } from 'domain-functions'
import { z, ZodSchema, ZodError } from 'zod';
import { zodParse } from './utils';
import {
  ICart,
  EcommerceProvider,
  PrivateShopinvaderFetchOptions,
  PublicShopinvaderFetchOptions,
  ShopinvaderProviderBaseOptions,
  ZCart,
  ZAddress,
  IAddress,
  ZCustomer,
  ICustomer,
  IPicking,
  ZPicking,
  ISale,
  ZSale,
  IInvoice,
  ZInvoice,
} from './shopinvader-boundary';

// Types and interfaces

export interface IPickingLoader {
  picking: {
    id: number;
    name: string;
  };
  product: {
    id: number;
    name: string;
  };
  package?: {
    id: number;
    name: string;
  };
  order?: {
    id: number;
    name: string;
    client_ref: string;
  };
  date: Date;
  description: string;
  origin: string;
  qty_reserved: number;
  qty_done: number;
  dm_picking_status: {
    code: string;
    name: string;
  };
}

export interface ILinesItem {
  id: number;
  name: string;
  product: IProductItem;
  amount: {
    price: number;
    untaxed: number;
    tax: number;
    total: number;
    total_without_discount: number;
  };
  qty: number;
  discount: {
    rate: number;
    value: number;
  };
  product_packaging: {
    id: number;
    name: string;
    qty: number;
    uom_id: string;
  };
}

export interface ILines {
  items: ILinesItem[];
  count: number;
  amount: {
    tax: number;
    untaxed: number;
    total: number;
  };
}

export interface ISaleLoader {
  id: number;
  date: Date;
  amount: {
    tax: number;
    untaxed: number;
    total: number;
    discount_total: number;
    total_without_discount: number;
  };
  shipping: {
    address: IAddress;
  };
  invoicing: {
    address: IAddress;
  };
  name: string;
  state_label: string;
  client_order_ref: string;
  qty: number;
  lines: ILines;
  invoice_status: string;
  picking_status: string;
  invoices: { id: number; name: string; date: string }[];
}

// the implementation of the types of general purpose ecommerce-provider
export function createShopinvaderProvider({
  erp_url_base_url,
  website_unique_id,
  api_key,
}: ShopinvaderProviderBaseOptions &
  PublicShopinvaderFetchOptions): EcommerceProvider {
  const fetchOptions = ({
    website_unique_id,
    api_key,
    email,
  }: PrivateShopinvaderFetchOptions) => {
    return {
      method: 'GET',
      headers: {
        'API-KEY': api_key as string,
        'WEBSITE-UNIQUE-KEY': website_unique_id as string,
        'PARTNER-EMAIL': email,
      },
    };
  };

  return {
    getCart: async (email: string, schema: any) => {
      const fetch_cart = makeDomainFunction(z.string().email())(
        (email) => {
          const res = fetch(
            erp_url_base_url + '/cart' + '/',
            fetchOptions({
              website_unique_id: website_unique_id,
              api_key: api_key,
              email: email,
            })
          );
          return res
        })
      const parse_cart_data = makeDomainFunction(schema)((data) => {
        return data
      })
      const parse_empty_cart = makeDomainFunction(z.object({}))((data) => {
        return data
      })


      const result = await fetch_cart(email)
      console.log('result ---> ', result)
      if (!result.success) {
        return result;
      }
      if (result.data.status === 404) {
        return {
          success: false,
          inputErrors: [],
          environmentErrors: [{ 'message': "Unable to reach the endpoint /cart/" }],
          errors: [],
        }
      }
      const data = await result.data.json()
      if (!data?.data) {
        return parse_empty_cart(data)
      }
      // console.log('data ---> ', data)
      return parse_cart_data(data);
    },
    getAddresses: async (email: string) => {
      const parsedEmail = z.string().email().safeParse(email);
      if (parsedEmail.success === false) {
        return {
          message: 'Error',
          success: false,
          error: parsedEmail.error,
          error_type: 'zod',
        };
      }
      const res = await fetch(
        erp_url_base_url + '/addresses' + '/',
        fetchOptions({
          website_unique_id: website_unique_id,
          api_key: api_key,
          email: parsedEmail.data,
        })
      );
      // logica de errores al fechear la API, 200, 304, 400, 500
      if (res.ok) {
        return zodParse<IAddress[]>(z.array(ZAddress), await res.json());
      } else {
        return {
          message: 'Error al tratar de conectar con el ERP',
          success: res.ok,
          error: res.status,
          error_type: 'erp api',
        };
      }
    },
    getCustomer: async (email: string) => {
      const parsedEmail = z.string().email().safeParse(email);
      if (parsedEmail.success === false) {
        return {
          message: 'Error',
          success: false,
          error: parsedEmail.error,
          error_type: 'zod',
        };
      }
      const res = await fetch(
        erp_url_base_url + '/customer' + '/',
        fetchOptions({
          website_unique_id: website_unique_id,
          api_key: api_key,
          email: parsedEmail.data,
        })
      );
      // logica de errores al fechear la API, 200, 304, 400, 500
      if (res.ok) {
        return zodParse<ICustomer>(ZCustomer, await res.json());
      } else {
        return {
          message: 'Error al tratar de conectar con el ERP',
          success: res.ok,
          error: res.status,
          error_type: 'erp api',
        };
      }
    },
    getPickings: async (email: string) => {
      const parsedEmail = z.string().email().safeParse(email);
      if (parsedEmail.success === false) {
        return {
          message: 'Error',
          success: false,
          error: parsedEmail.error,
          error_type: 'zod',
        };
      }

      const res = await fetch(
        erp_url_base_url + '/stock_move' + '?per_page=500',
        fetchOptions({
          website_unique_id: website_unique_id,
          api_key: api_key,
          email: parsedEmail.data,
        })
      );

      // logica de errores al fechear la API, 200, 304, 400, 500
      if (res.ok) {
        return zodParse<IPicking[]>(z.array(ZPicking), await res.json());
      } else {
        return {
          message: 'Error al tratar de conectar con el ERP',
          success: res.ok,
          error: res.status,
          error_type: 'erp api',
        };
      }
    },
    getSales: async (email: string) => {
      const parsedEmail = z.string().email().safeParse(email);
      if (parsedEmail.success === false) {
        return {
          message: 'Error',
          success: false,
          error: parsedEmail.error,
          error_type: 'zod',
        };
      }
      const res = await fetch(
        erp_url_base_url + '/sales?per_page=500',
        fetchOptions({
          website_unique_id: website_unique_id,
          api_key: api_key,
          email: parsedEmail.data,
        })
      );
      // logica de errores al fechear la API, 200, 304, 400, 500
      if (res.ok) {
        return zodParse<ISale[]>(z.array(ZSale), await res.json());
      } else {
        return {
          message: 'Error al tratar de conectar con el ERP',
          success: res.ok,
          error: res.status,
          error_type: 'erp api',
        };
      }
    },
    getInvoices: async (email: string) => {
      const parsedEmail = z.string().email().safeParse(email);
      if (parsedEmail.success === false) {
        return {
          message: 'Error',
          success: false,
          error: parsedEmail.error,
          error_type: 'zod',
        };
      }
      const res = await fetch(
        erp_url_base_url + '/invoices?per_page=500',
        fetchOptions({
          website_unique_id: website_unique_id,
          api_key: api_key,
          email: parsedEmail.data,
        })
      );
      // logica de errores al fechear la API, 200, 304, 400, 500
      if (res.ok) {
        return zodParse<IInvoice[]>(z.array(ZInvoice), await res.json());
      } else {
        return {
          message: 'Error al tratar de conectar con el ERP',
          success: res.ok,
          error: res.status,
          error_type: 'erp api',
        };
      }
    },
  };
}
