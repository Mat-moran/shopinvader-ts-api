"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZCart = exports.ZCartItem = exports.ZInvoice = exports.ZSale = exports.ZLines = exports.ZLinesItem = exports.ZPicking = exports.ZCustomer = exports.ZAddress = void 0;
var zod_1 = require("zod");
// Shopinvader interfaces and types definitions to implments on shopinvader-provider
//
//
var StringOrFalse = zod_1.z.string().or(zod_1.z.literal(false));
//////////////////////
/// Product model  ///
//////////////////////
// Zod objects to parse the incoming data from the API
var ZProductPrice = zod_1.z.object({
    default: zod_1.z.object({
        value: zod_1.z.number(),
        tax_included: zod_1.z.boolean(),
        original_value: zod_1.z.number(),
        discount: zod_1.z.number(),
    }),
});
var ZImageObject = zod_1.z.object({
    alt: zod_1.z.string(),
    src: zod_1.z.string(),
    tag: zod_1.z.string(),
});
var ZImages = zod_1.z.array(zod_1.z.record(ZImageObject));
var ZCategory = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    url_key: zod_1.z.string(),
    level: zod_1.z.number(),
    description: zod_1.z.string(),
});
var ZVariant = zod_1.z.object({
    name: zod_1.z.string(),
    sku: zod_1.z.string(),
    available: zod_1.z.boolean(),
    selected: zod_1.z.boolean(),
});
var ZVariantSelector = zod_1.z.object({
    name: zod_1.z.string(),
    values: zod_1.z.array(ZVariant),
});
var ZStructuredAttribute = zod_1.z.object({
    group_name: zod_1.z.string(),
    fields: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        key: zod_1.z.string(),
        value: zod_1.z.string(),
        type: zod_1.z.string(),
    })),
});
var ZProduct = zod_1.z.object({
    id: zod_1.z.number(),
    objectID: zod_1.z.number(),
    name: zod_1.z.string(),
    model: zod_1.z.object({ name: zod_1.z.string() }),
    url_key: zod_1.z.string(),
    redirect_url_key: zod_1.z.array(zod_1.z.string()),
    main: zod_1.z.boolean(),
    short_description: zod_1.z.string().nullable(),
    description: zod_1.z.string().nullable(),
    short_name: zod_1.z.string().nullable(),
    seo_title: zod_1.z.string().nullable(),
    meta_keywords: zod_1.z.string().nullable(),
    meta_description: zod_1.z.string().nullable(),
    variant_count: zod_1.z.number(),
    categories: zod_1.z.array(ZCategory),
    sku: zod_1.z.string(),
    variant_attributes: zod_1.z.record(zod_1.z.string()),
    hierarchicalCategories: zod_1.z.object({
        lvl0: zod_1.z.string().optional(),
    }),
    attributes: zod_1.z.object({
        descripciones: zod_1.z.string().optional(),
        guia_de_tallas: zod_1.z.string().optional(),
        material1: zod_1.z.number().optional(),
    }),
    structured_attributes: zod_1.z.array(ZStructuredAttribute),
    attribute_set: zod_1.z
        .object({
        name: zod_1.z.string(),
    })
        .nullable(),
    images: ZImages,
    stock: zod_1.z.object({
        global: zod_1.z.object({
            qty: zod_1.z.number(),
        }),
    }),
    brand: zod_1.z.object({ name: zod_1.z.string() }).nullable(),
    new_product: zod_1.z.boolean(),
    variant_selector: zod_1.z.array(ZVariantSelector),
    price: ZProductPrice,
    website_category_id: zod_1.z.string(),
    only_quotation: zod_1.z.boolean(),
});
//////////////////////
/// Address model  ///
//////////////////////
// Zod objects to parse the incoming data from the API
var ZAddressType = zod_1.z.enum(['invoice', 'delivery', 'contact']);
var ZDefaultAddress = zod_1.z.object({
    id: zod_1.z.number(),
    display_name: zod_1.z.string(),
});
var ZLocation = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    code: zod_1.z.string(),
});
exports.ZAddress = zod_1.z.object({
    id: zod_1.z.number(),
    parent_id: zod_1.z.boolean().or(zod_1.z.number()),
    type: ZAddressType,
    display_name: zod_1.z.string(),
    name: zod_1.z.string(),
    ref: zod_1.z.string().nullable(),
    street: zod_1.z.string(),
    street2: zod_1.z.string().nullable(),
    zip: zod_1.z.string(),
    city: zod_1.z.string(),
    phone: zod_1.z.string(),
    email: zod_1.z.string().email().optional(),
    userEmail: zod_1.z.string().email().optional(),
    state: ZLocation,
    country: ZLocation,
    address_type: zod_1.z.string().optional(),
    is_company: zod_1.z.boolean().optional(),
    lang: zod_1.z.string().optional(),
    title: zod_1.z.string().nullable(),
    enabled: zod_1.z.boolean().optional(),
    partner_invoice_id: ZDefaultAddress.nullable(),
    partner_delivery_id: ZDefaultAddress.nullable(),
});
//////////////////////
/// Partner model  ///
//////////////////////
// Depends on Address model
// Zod objects to parse the incoming data from the API
var ZCommercial = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    phone: zod_1.z.union([zod_1.z.string(), zod_1.z.boolean()]),
    mobile: zod_1.z.union([zod_1.z.string(), zod_1.z.boolean()]),
    photo: zod_1.z.string(),
});
exports.ZCustomer = zod_1.z.object({
    id: zod_1.z.number(),
    parent_id: zod_1.z.union([zod_1.z.number(), zod_1.z.boolean()]),
    commercial: ZCommercial,
    type: ZAddressType,
    display_name: zod_1.z.string(),
    name: zod_1.z.string().nullable(),
    ref: zod_1.z.string().nullable(),
    street: zod_1.z.string().nullable(),
    street2: zod_1.z.string().nullable(),
    zip: zod_1.z.string().nullable(),
    city: zod_1.z.string().nullable(),
    phone: zod_1.z.string().nullable(),
    email: zod_1.z.string(),
    userEmail: zod_1.z.string().optional(),
    vat: zod_1.z.string().nullable(),
    state: ZLocation.nullable(),
    country: ZLocation.nullable(),
    address_type: zod_1.z.string().optional(),
    is_company: zod_1.z.boolean().optional(),
    lang: zod_1.z.string(),
    title: zod_1.z.string().nullable(),
    enabled: zod_1.z.boolean(),
    partner_invoice_id: ZDefaultAddress.nullable(),
    partner_delivery_id: ZDefaultAddress.nullable(),
    logo: zod_1.z.string(),
});
exports.ZPicking = zod_1.z.object({
    picking: zod_1.z.object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
    }),
    product: zod_1.z.object({ id: zod_1.z.number(), name: zod_1.z.string() }),
    package: zod_1.z.union([
        zod_1.z.object({ id: zod_1.z.number(), name: zod_1.z.string() }),
        zod_1.z.boolean(),
    ]),
    date: zod_1.z.string(),
    description: zod_1.z.union([zod_1.z.string(), zod_1.z.boolean()]),
    order: zod_1.z.object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
        client_ref: zod_1.z.union([zod_1.z.string(), zod_1.z.boolean()]),
    }),
    qty_reserved: zod_1.z.number(),
    qty_done: zod_1.z.number(),
    dm_picking_status: zod_1.z.object({ code: zod_1.z.string(), name: zod_1.z.string() }),
});
exports.ZLinesItem = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    product: zod_1.z.object({ id: zod_1.z.number(), name: zod_1.z.string() }),
    amount: zod_1.z.object({
        price: zod_1.z.number(),
        untaxed: zod_1.z.number(),
        tax: zod_1.z.number(),
        total: zod_1.z.number(),
        total_without_discount: zod_1.z.number(),
    }),
    qty: zod_1.z.number(),
    discount: zod_1.z.object({
        rate: zod_1.z.number(),
        value: zod_1.z.number(),
    }),
    product_packaging: zod_1.z.object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
        qty: zod_1.z.number(),
        uom_id: zod_1.z.number(),
    }),
});
exports.ZLines = zod_1.z.object({
    items: zod_1.z.array(exports.ZLinesItem),
    count: zod_1.z.number(),
    amount: zod_1.z.object({
        tax: zod_1.z.number(),
        untaxed: zod_1.z.number(),
        total: zod_1.z.number(),
    }),
});
exports.ZSale = zod_1.z.object({
    id: zod_1.z.number(),
    date: zod_1.z.string(),
    amount: zod_1.z.object({
        tax: zod_1.z.number(),
        untaxed: zod_1.z.number(),
        total: zod_1.z.number(),
        discount_total: zod_1.z.number(),
        total_without_discount: zod_1.z.number(),
    }),
    name: zod_1.z.string(),
    state_label: zod_1.z.string(),
    client_order_ref: zod_1.z.union([zod_1.z.string(), zod_1.z.boolean()]),
    invoice_status: zod_1.z.string(),
    picking_status: zod_1.z.string(),
});
exports.ZInvoice = zod_1.z.object({
    invoice_id: zod_1.z.number(),
    number: zod_1.z.string(),
    payment_reference: zod_1.z.string(),
    date_invoice: zod_1.z.string(),
    date_due: zod_1.z.string(),
    amount_total: zod_1.z.number(),
    amount_total_signed: zod_1.z.number(),
    amount_tax: zod_1.z.number(),
    amount_untaxed: zod_1.z.number(),
    amount_untaxed_signed: zod_1.z.number(),
    state: zod_1.z.string(),
    payment_state: zod_1.z.string(),
    type: zod_1.z.string(),
    amount_due: zod_1.z.number(),
    type_label: zod_1.z.string(),
    state_label: zod_1.z.string(),
    payment_state_label: zod_1.z.string(),
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
exports.ZCartItem = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    product: ZProduct,
    amount: zod_1.z.object({
        tax: zod_1.z.number(),
        untaxed: zod_1.z.number(),
        total: zod_1.z.number(),
    }),
    qty: zod_1.z.number(),
    discount: zod_1.z.object({ rate: zod_1.z.number(), value: zod_1.z.number() }),
    is_reward_line: zod_1.z.boolean(),
    product_packaging: zod_1.z.object({ id: zod_1.z.string(), name: zod_1.z.string() }), // TODO id here should be number --> needs modification in odoo
});
exports.ZCart = zod_1.z.object({
    id: zod_1.z.number(),
    state: zod_1.z.string(),
    state_label: zod_1.z.string(),
    name: zod_1.z.string(),
    date: zod_1.z.string(),
    date_delivery: StringOrFalse,
    client_order_ref: StringOrFalse,
    expiration_date: zod_1.z.string(),
    step: zod_1.z.object({ current: zod_1.z.boolean(), done: zod_1.z.array(zod_1.z.string()) }),
    lines: zod_1.z.object({
        items: zod_1.z.array(exports.ZCartItem),
        count: zod_1.z.number(),
        amount: zod_1.z.object({
            tax: zod_1.z.number(),
            untaxed: zod_1.z.number(),
            total: zod_1.z.number(),
        }),
    }),
    shipping: zod_1.z.object({
        address: exports.ZAddress,
    }),
    invoicing: zod_1.z.object({
        address: exports.ZAddress,
    }),
    amount: zod_1.z.object({
        untaxed: zod_1.z.number(),
        tax: zod_1.z.number(),
        total: zod_1.z.number(),
        total_without_discount: zod_1.z.number(),
    }),
    discount: zod_1.z
        .object({
        rate: zod_1.z.number(),
        value: zod_1.z.number(),
    })
        .optional(),
    product_packaging: zod_1.z
        .object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
        price_unit: zod_1.z.number(),
    })
        .optional(),
});
