import { makeDomainFunction, inputFromForm } from 'domain-functions'
import { z, ZodSchema, ZodError } from 'zod';
import { fetch_endpoint, zodParse } from './utils';
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
    getCart: async (email: string, schema: ZodSchema) => {
      const url = erp_url_base_url + '/cart' + '/'
      const fetch_options = fetchOptions({
        website_unique_id: website_unique_id,
        api_key: api_key,
        email: email,
      })
      const parse_cart_data = makeDomainFunction(schema)((data) => {
        return data
      })
      const parse_empty_cart = makeDomainFunction(z.object({}))((data) => {
        return data
      })

      const result = await fetch_endpoint(email, url, fetch_options)
      if (!result.success) {
        return result;
      }
      const data = await result.data.json()
      if (!data?.data) {
        return parse_empty_cart(data)
      }
      // console.log('data ---> ', data)
      return parse_cart_data(data);
    },
    getAddresses: async (email: string, schema: ZodSchema) => {
      const url = erp_url_base_url + '/addresses' + '/'
      const fetch_options = fetchOptions({
        website_unique_id: website_unique_id,
        api_key: api_key,
        email: email,
      })
      const parse_cart_data = makeDomainFunction(schema)((data) => {
        return data
      })
      const parse_empty_cart = makeDomainFunction(z.object({}))((data) => {
        return data
      })

      const result = await fetch_endpoint(email, url, fetch_options)
      if (!result.success) {
        return result;
      }
      const data = await result.data.json()
      if (!data?.data) {
        return parse_empty_cart(data)
      }
      // console.log('data ---> ', data)
      return parse_cart_data(data);

    },
    getCustomer: async (email: string, schema: ZodSchema) => {
      const url = erp_url_base_url + '/customer' + '/'
      const fetch_options = fetchOptions({
        website_unique_id: website_unique_id,
        api_key: api_key,
        email: email,
      })

      const parse_cart_data = makeDomainFunction(schema)((data) => {
        return data
      })
      const parse_empty_cart = makeDomainFunction(z.object({}))((data) => {
        return data
      })
      // const result = await fetch_cart(email)
      const result = await fetch_endpoint(email, url, fetch_options)
      if (!result.success) {
        return result;
      }
      const data = await result.data.json()
      if (!data?.data) {
        return parse_empty_cart(data)
      }
      // console.log('data ---> ', data)
      return parse_cart_data(data);

    },
    getPickings: async (email: string) => {
      const url = erp_url_base_url + '/stock_move' + '/'
      const fetch_options = fetchOptions({
        website_unique_id: website_unique_id,
        api_key: api_key,
        email: email,
      })

      const parse_cart_data = makeDomainFunction(schema)((data) => {
        return data
      })
      const parse_empty_cart = makeDomainFunction(z.object({}))((data) => {
        return data
      })
      // const result = await fetch_cart(email)
      const result = await fetch_endpoint(email, url, fetch_options)
      if (!result.success) {
        return result;
      }
      const data = await result.data.json()
      if (!data?.data) {
        return parse_empty_cart(data)
      }
      // console.log('data ---> ', data)
      return parse_cart_data(data);
    },
    getSales: async (email: string, schema: ZodSchema) => {
      const url = erp_url_base_url + '/sales' + '/'
      const fetch_options = fetchOptions({
        website_unique_id: website_unique_id,
        api_key: api_key,
        email: email,
      })
      const parse_cart_data = makeDomainFunction(schema)((data) => {
        return data
      })
      const parse_empty_cart = makeDomainFunction(z.object({}))((data) => {
        return data
      })

      const result = await fetch_endpoint(email, url, fetch_options)
      if (!result.success) {
        return result;
      }
      const data = await result.data.json()
      if (!data?.data) {
        return parse_empty_cart(data)
      }
      // console.log('data ---> ', data)
      return parse_cart_data(data);
    },
    getInvoices: async (email: string, schema: ZodSchema) => {
      const url = erp_url_base_url + '/invoices' + '/'
      const fetch_options = fetchOptions({
        website_unique_id: website_unique_id,
        api_key: api_key,
        email: email,
      })
      const parse_cart_data = makeDomainFunction(schema)((data) => {
        return data
      })
      const parse_empty_cart = makeDomainFunction(z.object({}))((data) => {
        return data
      })

      const result = await fetch_endpoint(email, url, fetch_options)
      if (!result.success) {
        return result;
      }
      const data = await result.data.json()
      if (!data?.data) {
        return parse_empty_cart(data)
      }
      // console.log('data ---> ', data)
      return parse_cart_data(data);
    },
  };
}
