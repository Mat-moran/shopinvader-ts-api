import { makeDomainFunction } from 'domain-functions'
import { z, ZodSchema } from 'zod';
import { fetch_endpoint } from './utils';
import {
  EcommerceProvider,
  PrivateShopinvaderFetchOptions,
  PublicShopinvaderFetchOptions,
  ShopinvaderProviderBaseOptions,
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
      const url = erp_url_base_url + '/addresses?per_page=500'
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
    getPickings: async (email: string, schema: ZodSchema) => {
      const url = erp_url_base_url + '/stock_move?per_page=500'
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
      const url = erp_url_base_url + '/sales?per_page=500'
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
      const url = erp_url_base_url + '/invoices?per_page=500'
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
