import { makeDomainFunction } from 'domain-functions';
import { z, ZodSchema, ZodError } from 'zod';
import { IApiResponse, PrivateShopinvaderFetchOptions } from './shopinvader-boundary';

// methods
export const zodParse = async <K>(
  schema: ZodSchema,
  fetchResult: any
): Promise<IApiResponse<K>> => {
  const parsedResult = schema.safeParse(fetchResult?.data);
  if (!parsedResult.success) {
    return {
      success: false,
      error: parsedResult.error,
      message: parsedResult.error.message,
      error_type: 'zod',
    };
  }
  return { success: true, data: parsedResult.data }; // how to return the type passed on schema?
};

const get_fetch_options = ({
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


export const fetch_endpoint = async (email: string, endpoint: string, fetch_options: typeof get_fetch_options) => {
  const result = makeDomainFunction(z.string().email())(
    // toda la logica de error en el fetch aqui!
    async (email) => {
      const res = await fetch(
        endpoint,
        fetch_options
      );
      if (!res.ok) {
        throw new Error('Some error')
      }
      return res
    })

  return result(email)
}
