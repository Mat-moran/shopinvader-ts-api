import { z, ZodError, ZodSchema } from 'zod';
// Shopinvader interfaces and types definitions to implments on shopinvader-provider
//
//

const StringOrFalse = z.string().or(z.literal(false));

//////////////////////
/// Product model  ///
//////////////////////
// Zod objects to parse the incoming data from the API
const ZProductPrice = z.object({
  default: z.object({
    value: z.number(),
    tax_included: z.boolean(),
    original_value: z.number(),
    discount: z.number(),
  }),
});

const ZImageObject = z.object({
  alt: z.string(),
  src: z.string(),
  tag: z.string(),
});

const ZImages = z.array(z.record(ZImageObject));

const ZCategory = z.object({
  id: z.number(),
  name: z.string(),
  url_key: z.string(),
  level: z.number(),
  description: z.string(),
});

const ZVariant = z.object({
  name: z.string(),
  sku: z.string(),
  available: z.boolean(),
  selected: z.boolean(),
});

const ZVariantSelector = z.object({
  name: z.string(),
  values: z.array(ZVariant),
});

const ZStructuredAttribute = z.object({
  group_name: z.string(),
  fields: z.array(
    z.object({
      name: z.string(),
      key: z.string(),
      value: z.string(),
      type: z.string(),
    })
  ),
});

const ZProduct = z.object({
  id: z.number(),
  objectID: z.number(),
  name: z.string(),
  model: z.object({ name: z.string() }),
  url_key: z.string(),
  redirect_url_key: z.array(z.string()),
  main: z.boolean(),
  short_description: z.string().nullable(),
  description: z.string().nullable(),
  short_name: z.string().nullable(),
  seo_title: z.string().nullable(),
  meta_keywords: z.string().nullable(),
  meta_description: z.string().nullable(),
  variant_count: z.number(),
  categories: z.array(ZCategory),
  sku: z.string(),
  variant_attributes: z.record(z.string()),
  hierarchicalCategories: z.object({
    lvl0: z.string().optional(),
  }),
  attributes: z.object({
    descripciones: z.string().optional(),
    guia_de_tallas: z.string().optional(),
    material1: z.number().optional(),
  }),
  structured_attributes: z.array(ZStructuredAttribute),
  attribute_set: z
    .object({
      name: z.string(),
    })
    .nullable(),
  images: ZImages,
  stock: z.object({
    global: z.object({
      qty: z.number(),
    }),
  }),
  brand: z.object({ name: z.string() }).nullable(),
  new_product: z.boolean(),
  variant_selector: z.array(ZVariantSelector),
  price: ZProductPrice,
  website_category_id: z.string(),
  only_quotation: z.boolean(),
});

//////////////////////
/// Address model  ///
//////////////////////
// Zod objects to parse the incoming data from the API
const ZAddressType = z.enum(['invoice', 'delivery', 'contact']);

const ZDefaultAddress = z.object({
  id: z.number(),
  display_name: z.string(),
});

const ZLocation = z.object({
  id: z.number(),
  name: z.string(),
  code: z.string(),
});

export const ZAddress = z.object({
  id: z.number(),
  parent_id: z.boolean().or(z.number()),
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
});

//////////////////////
/// Partner model  ///
//////////////////////
// Depends on Address model
// Zod objects to parse the incoming data from the API

const ZCommercial = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.union([z.string(), z.boolean()]),
  mobile: z.union([z.string(), z.boolean()]),
  photo: z.string(),
});

export const ZCustomer = z.object({
  id: z.number(),
  parent_id: z.union([z.number(), z.boolean()]),
  commercial: ZCommercial,
  type: ZAddressType,
  display_name: z.string(),
  name: z.string().nullable(),
  ref: z.string().nullable(),
  street: z.string().nullable(),
  street2: z.string().nullable(),
  zip: z.string().nullable(),
  city: z.string().nullable(),
  phone: z.string().nullable(),
  email: z.string(),
  userEmail: z.string().optional(),
  vat: z.string().nullable(),
  state: ZLocation.nullable(),
  country: ZLocation.nullable(),
  address_type: z.string().optional(),
  is_company: z.boolean().optional(),
  lang: z.string(),
  title: z.string().nullable(),
  enabled: z.boolean(),
  partner_invoice_id: ZDefaultAddress.nullable(),
  partner_delivery_id: ZDefaultAddress.nullable(),
  logo: z.string(),
});

export const ZPicking = z.object({
  picking: z.object({
    id: z.number(),
    name: z.string(),
  }),
  product: z.object({ id: z.number(), name: z.string() }),
  package: z.union([
    z.object({ id: z.number(), name: z.string() }),
    z.boolean(),
  ]),
  date: z.string(),
  description: z.union([z.string(), z.boolean()]),
  order: z.object({
    id: z.number(),
    name: z.string(),
    client_ref: z.union([z.string(), z.boolean()]),
  }),
  qty_reserved: z.number(),
  qty_done: z.number(),
  dm_picking_status: z.object({ code: z.string(), name: z.string() }),
});

export const ZLinesItem = z.object({
  id: z.number(),
  name: z.string(),
  product: z.object({ id: z.number(), name: z.string() }),
  amount: z.object({
    price: z.number(),
    untaxed: z.number(),
    tax: z.number(),
    total: z.number(),
    total_without_discount: z.number(),
  }),
  qty: z.number(),
  discount: z.object({
    rate: z.number(),
    value: z.number(),
  }),
  product_packaging: z.object({
    id: z.number(),
    name: z.string(),
    qty: z.number(),
    uom_id: z.number(),
  }),
});

export const ZLines = z.object({
  items: z.array(ZLinesItem),
  count: z.number(),
  amount: z.object({
    tax: z.number(),
    untaxed: z.number(),
    total: z.number(),
  }),
});

export const ZSale = z.object({
  id: z.number(),
  date: z.string(),
  amount: z.object({
    tax: z.number(),
    untaxed: z.number(),
    total: z.number(),
    discount_total: z.number(),
    total_without_discount: z.number(),
  }),
  name: z.string(),
  state_label: z.string(),
  client_order_ref: z.union([z.string(), z.boolean()]),
  invoice_status: z.string(),
  picking_status: z.string(),
});

export const ZInvoice = z.object({
  invoice_id: z.number(),
  number: z.string(),
  payment_reference: z.string(),
  date_invoice: z.string(),
  date_due: z.string(),
  amount_total: z.number(),
  amount_total_signed: z.number(),
  amount_tax: z.number(),
  amount_untaxed: z.number(),
  amount_untaxed_signed: z.number(),
  state: z.string(),
  payment_state: z.string(),
  type: z.string(),
  amount_due: z.number(),
  type_label: z.string(),
  state_label: z.string(),
  payment_state_label: z.string(),
});

// Typescript types and interfaces

///////////////////
/// Cart model  ///
///////////////////
// depends on Product, Address
// Zod objects to parse the incoming data from the API

// export const ZCart = z.object({
//   id: z.number(),
//   name: z.string(),
// })
export const ZCartItem = z.object({
  id: z.number(),
  name: z.string(),
  product: ZProduct,
  amount: z.object({
    tax: z.number(),
    untaxed: z.number(),
    total: z.number(),
  }),
  qty: z.number(),
  discount: z.object({ rate: z.number(), value: z.number() }),
  is_reward_line: z.boolean(),
  product_packaging: z.object({ id: z.string(), name: z.string() }), // TODO id here should be number --> needs modification in odoo
});

export const ZCart = z.object({
  id: z.number(),
  state: z.string(),
  state_label: z.string(),
  name: z.string(),
  date: z.string(),
  date_delivery: StringOrFalse,
  client_order_ref: StringOrFalse,
  expiration_date: z.string(),
  step: z.object({ current: z.boolean(), done: z.array(z.string()) }),
  lines: z.object({
    items: z.array(ZCartItem),
    count: z.number(),
    amount: z.object({
      tax: z.number(),
      untaxed: z.number(),
      total: z.number(),
    }),
  }),
  shipping: z.object({
    address: ZAddress,
  }),
  invoicing: z.object({
    address: ZAddress,
  }),
  amount: z.object({
    untaxed: z.number(),
    tax: z.number(),
    total: z.number(),
    total_without_discount: z.number(),
  }),
  discount: z
    .object({
      rate: z.number(),
      value: z.number(),
    })
    .optional(),
  product_packaging: z
    .object({
      id: z.number(),
      name: z.string(),
      price_unit: z.number(),
    })
    .optional(),
});

// typescript infered types
export type IAddressType = z.infer<typeof ZAddressType>;
export type IProductPrice = z.infer<typeof ZProductPrice>;
export type IImageObject = z.infer<typeof ZImageObject>;
export type IImages = z.infer<typeof ZImages>;
export type ICart = z.infer<typeof ZCart>;
export type IAddress = z.infer<typeof ZAddress>;
export type ICustomer = z.infer<typeof ZCustomer>;
export type IPicking = z.infer<typeof ZPicking>;
export type ISale = z.infer<typeof ZSale>;
export type IInvoice = z.infer<typeof ZInvoice>;

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

export interface ICoupon {
  items: {
    id: number;
    code: string;
    expiration_date: string;
  }[];
  count: number;
}

export interface EcommerceProvider {
  getCart<T>(email: string, schema: T): Promise<IApiResponse<T>>;
  getAddresses(email: string, schema: ZodSchema): Promise<IApiResponse<IAddress[]>>;
  getCustomer(email: string, schema: ZodSchema): Promise<IApiResponse<ICustomer>>;
  getPickings(email: string, schema: ZodSchema): Promise<IApiResponse<IPicking[]>>;
  getSales(email: string, schema: ZodSchema): Promise<IApiResponse<ISale[]>>;
  getInvoices(email: string, schema: ZodSchema): Promise<IApiResponse<IInvoice[]>>;
}

export interface ShopinvaderProviderBaseOptions {
  website_unique_id: string;
  api_key: string;
}
export interface PublicShopinvaderFetchOptions {
  erp_url_base_url: string;
}

export interface PrivateShopinvaderFetchOptions
  extends ShopinvaderProviderBaseOptions {
  email: string;
}

// Discriminated global Generic responses
export type IApiResponse<DataType> =
  | IApiErrorResponse
  | IApiSuccessResponse<DataType>;
export interface IApiSuccessResponse<DataType> {
  success: true;
  data: DataType;
}
export interface IApiErrorResponse {
  error_type: 'zod' | 'erp api';
  success: false;
  error: ZodError | number;
  message: string;
}
