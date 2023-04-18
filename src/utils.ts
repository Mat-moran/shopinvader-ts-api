import { makeDomainFunction } from 'domain-functions';
import { z } from 'zod';
import { PrivateShopinvaderFetchOptions } from './shopinvader-boundary';


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


export const fetch_endpoint = async (email: string, endpoint: string, fetch_options: ReturnType<typeof get_fetch_options>) => {
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
