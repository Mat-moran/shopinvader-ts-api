import { boolean, ZodError, ZodSchema } from "zod";
import { Cart, EcommerceProvider } from "./ecommerce-provider";

function zodParse<T>(schema: ZodSchema<T>, fetchResult: any): {
  success: false,
  error: ZodError,
  message: string
} | {
  success: true,
  data: T,
} {
  const parsedResult = schema.safeParse(await fetchResult.json())
  if (!parsedResult.success) {
    return { success: false, error: parsedResult.error, message: parsedResult.error.message }
  }
  return { success: true, data: parsedResult.data } // how to return the type passed on schema?
}


export interface ShopinvaderProviderOptions {
  erp_url_base_url: string;
  website_unique_id: string;
  api_key: string;
}

export function createShopinvaderProvider({
  erp_url_base_url,
  website_unique_id,
  api_key
}: ShopinvaderProviderOptions): EcommerceProvider {
  return {
    async getCart(email) {
      const result = await fetch(`${erp_url_base_url}/cart`)
      return zodParse(Cart, result)
    }
  }

  const commerce = createShopinvaderProvider({
    erp_url_base_url: "amadeo",
    website_unique_id: "alskfj",
    api_key: "asldfj"
  })
  const result = await commerce.getCart("am@mail.com")
  if (!result.success) {
    return { message: result. }
  }
  const { data: cart } = result.data


  const getCart = ({ id, email }: { id: number, email: string }) => {
    return {
      id: 2,
      state: "",
      state_label: "",
      name: "",
      date: "",
      client_order_ref: 23,
      step: {},
      lines: [{ "name": "asjff" }],
      applied_coupon_ids: [23, 3],
      amount: {
        tax: 2,
        untaxed: 23.43,
        total: 2344.4,
        discount_total: 23,
        total_without_discount: 234234.1,
      },
      shipping: {
        address: {},
      },
      invoicing: {
        address: {},
      },
      expiration_date: "j",
      payment: {
        available_methods: {
          count: 23,
          items: [
            {
              id: 234,
              name: "alfsl",
              provider: "aslkf",
              code: "sflf",
              description: "slfsf",
            }
          ],
        },
        amount: 234,
      },
      available_for_quotation: true,
      reward_amount: 9234.0,
      reward_amount_tax_incl: 23.0,
    }
  }
