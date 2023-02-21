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
} from './shopinvader-boundary';

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
    getCart: async (email: string) => {
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
        erp_url_base_url + '/cart/',
        fetchOptions({
          website_unique_id: website_unique_id,
          api_key: api_key,
          email: parsedEmail.data,
        })
      );
      // logica de errores al fechear la API, 200, 304, 400, 500
      if (res.ok) {
        return zodParse<ICart>(ZCart, await res.json());
      } else {
        return {
          message: 'Error al tratar de conectar con el ERP',
          success: res.ok,
          error: res.status,
          error_type: 'erp api',
        };
      }
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
        erp_url_base_url + '/addresses/',
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
        erp_url_base_url + '/customer/',
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
        erp_url_base_url + '/stock_move',
        fetchOptions({
          website_unique_id: website_unique_id,
          api_key: api_key,
          email: parsedEmail.data,
        })
      );

      console.log('ERROR---->', res);
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
  };
}
