import { z, ZodError } from "zod"
// Shopinvader interfaces and types definitions to implments on shopinvader-provider
//
//////////////////////
/// Product model  ///
//////////////////////
// Zod objects to parse the incoming data from the API
const ZProductPrice = z.object({
  default: z.object({
    value: z.number(),
    tax_included: z.boolean(),
    original_value: z.number(),
    discount: z.number()
  })
})

const ZImageObject = z.object({
  alt: z.string(),
  src: z.string(),
  tag: z.string(),
})

const ZImages = z.array(z.record(ZImageObject))

const ZCategory = z.object({
  id: z.number(),
  name: z.string(),
  url_key: z.string(),
  level: z.number(),
  description: z.string(),
})

const ZVariant = z.object({
  name: z.string(),
  sku: z.string(),
  available: z.boolean(),
  selected: z.boolean(),
})

const ZVariantSelector = z.object({
  name: z.string(),
  values: z.array(ZVariant)
})

const ZStructuredAttribute = z.object({
  group_name: z.string(),
  fields: z.array(z.object({
    name: z.string(),
    key: z.string(),
    value: z.string(),
    type: z.string(),
  }))
})

const ZProduct = z.object({
  id: z.number(),
  model: z.object({ name: z.string() }),
  url_key: z.string(),
  redirect_url_key: z.array(z.string()),
  main: z.boolean(),
  short_description: z.string(),
  description: z.string(),
  name: z.string(),
  short_name: z.string(),
  seo_title: z.string(),
  meta_keywords: z.string(),
  meta_description: z.string(),
  variant_count: z.number(),
  categories: z.array(ZCategory),
  sku: z.string(),
  variant_attributes: z.record(z.string()),
  hierarchicalCategories: z.object({
    lvl0: z.string(),
  }),
  attributes: z.object({
    descripciones: z.string(),
    guia_de_tallas: z.string(),
    material1: z.number(),
  }),
  structured_attributes: z.array(ZStructuredAttribute),
  attribute_set: z.object({
    name: z.string(),
  }),
  images: ZImages,
  stock: z.object({
    global: z.object({
      qty: z.number(),
    }),
  }),
  brand: z.object({ name: z.string() }).optional(),
  new_product: z.boolean(),
  variant_selector: z.array(ZVariantSelector),
  price: ZProductPrice,
  website_category_id: z.string(),
  only_quotation: z.boolean(),
  objectID: z.number(),

})



//////////////////////
/// Address model  ///
//////////////////////
// Zod objects to parse the incoming data from the API
const ZAddressType = z.enum(["invoice", "delivery", "contact"]);

const ZDefaultAddress = z.object({
  id: z.number(),
  display_name: z.string()
})

const ZLocation = z.object({
  id: z.number(),
  name: z.string(),
  code: z.string(),
})

export const ZAddress = z.object({
  id: z.number(),
  parent_id: z.union([z.boolean(), z.number()]),
  type: ZAddressType,
  display_name: z.string(),
  name: z.string(),
  ref: z.string().nullable(),
  street: z.string(),
  street2: z.string().nullable(),
  zip: z.string(),
  city: z.string(),
  phone: z.string(),
  email: z.string().email().optional(),
  userEmail: z.string().email().optional(),
  state: ZLocation,
  country: ZLocation,
  address_type: z.string().optional(),
  is_company: z.boolean().optional(),
  lang: z.string().optional(),
  title: z.string().nullable(),
  enabled: z.boolean().optional(),
  partner_invoice_id: ZDefaultAddress.nullable(),
  partner_delivery_id: ZDefaultAddress.nullable(),
})


//////////////////////
/// Partner model  ///
//////////////////////
// Depends on Address model
// Zod objects to parse the incoming data from the API

const ZCommercial = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  phone: z.string().optional(),
  mobile: z.string().optional(),
})

const ZCustomer = z.object({
  id: z.number(),
  parent_id: z.number().optional(),
  commercial: ZCommercial,
  type: ZAddressType,
  display_name: z.string(),
  name: z.string(),
  ref: z.string(),
  street: z.string(),
  street2: z.string().optional(),
  zip: z.string(),
  city: z.string(),
  phone: z.string().optional(),
  email: z.string(),
  userEmail: z.string(),
  vat: z.string(),
  state: ZLocation,
  country: ZLocation,
  address_type: z.string().optional(),
  is_company: z.boolean().optional(),
  lang: z.string(),
  title: z.string(),
  enabled: z.boolean(),
  partner_invoice_id: ZDefaultAddress.optional(),
  partner_delivery_id: ZDefaultAddress.optional(),
})


// Typescript types and interfaces

///////////////////
/// Cart model  ///
///////////////////
// depends on Product, Address
// Zod objects to parse the incoming data from the API

export const ZCart = z.object({
  id: z.number(),
  name: z.string(),
})


// export const ZCart = z.object({
//   id: z.number(),
//   name: z.string(),
//   product: ZProduct,
//   state: z.string(),
//   state_label: z.string(),
//   date: z.string(),
//   expiration_date: z.string(),
//   client_order_ref: z.boolean(),
//   step: z.object({ current: z.boolean(), done: z.array(z.string()) }),
//   shipping: z.object({
//     address: ZAddress
//   }),
//   invoicing: z.object({
//     address: ZAddress
//   }),
//   amount: z.object({
//     price: z.number(),
//     untaxed: z.number(),
//     tax: z.number(),
//     total: z.number(),
//     total_without_discount: z.number(),
//   }),
//   qty: z.number(),
//   discount: z.object({
//     rate: z.number(),
//     value: z.number(),
//   }),
//   product_packaging: z.object({
//     id: z.number(),
//     name: z.string(),
//     price_unit: z.number(),
//   })
// })


// typescript infered types
export type IAddressType = z.infer<typeof ZAddressType>
export type IProductPrice = z.infer<typeof ZProductPrice>
export type IImageObject = z.infer<typeof ZImageObject>
export type IImages = z.infer<typeof ZImages>
export type ICart = z.infer<typeof ZCart>
export type IAddress = z.infer<typeof ZAddress>



export interface ICarouselItem {
  id: number;
  name: string;
  url_key: string;
  image_src: string | null;
  image_alt: string | null;
}


export interface ILinesItem {
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
    price_unit: number;
  }
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

export interface ICoupon {
  items: {
    id: number;
    code: string;
    expiration_date: string;
  }[];
  count: number;
}





export interface EcommerceProvider {
  getCart(
    email: string,
  ): Promise<IApiResponse<ICart>>,
  getAddresses(
    email: string,
  ): Promise<IApiResponse<IAddress[]>>,

}




export interface ShopinvaderProviderBaseOptions {
  website_unique_id: string;
  api_key: string;
}
export interface PublicShopinvaderFetchOptions {
  erp_url_base_url: string;
}

export interface PrivateShopinvaderFetchOptions extends ShopinvaderProviderBaseOptions {
  email: string;
}


// Discriminated global Generic responses
export type IApiResponse<DataType> = IApiErrorResponse | IApiSuccessResponse<DataType>
export interface IApiSuccessResponse<DataType> {
  success: true;
  data: DataType
}
export interface IApiErrorResponse {
  error_type: "zod" | "erp api"
  success: false;
  error: ZodError | number;
  message: string;
}


