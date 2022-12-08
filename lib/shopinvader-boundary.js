"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZCart = void 0;
var zod_1 = require("zod");
// Shopinvader interfaces and types definitions to implments on shopinvader-provider
//
//////////////////////
/// Product model  ///
//////////////////////
// Zod objects to parse the incoming data from the API
var ZProductPrice = zod_1.z.object({
    default: zod_1.z.object({
        value: zod_1.z.number(),
        tax_included: zod_1.z.boolean(),
        original_value: zod_1.z.number(),
        discount: zod_1.z.number()
    })
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
    values: zod_1.z.array(ZVariant)
});
var ZStructuredAttribute = zod_1.z.object({
    group_name: zod_1.z.string(),
    fields: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        key: zod_1.z.string(),
        value: zod_1.z.string(),
        type: zod_1.z.string(),
    }))
});
var ZProduct = zod_1.z.object({
    id: zod_1.z.number(),
    model: zod_1.z.object({ name: zod_1.z.string() }),
    url_key: zod_1.z.string(),
    redirect_url_key: zod_1.z.array(zod_1.z.string()),
    main: zod_1.z.boolean(),
    short_description: zod_1.z.string(),
    description: zod_1.z.string(),
    name: zod_1.z.string(),
    short_name: zod_1.z.string(),
    seo_title: zod_1.z.string(),
    meta_keywords: zod_1.z.string(),
    meta_description: zod_1.z.string(),
    variant_count: zod_1.z.number(),
    categories: zod_1.z.array(ZCategory),
    sku: zod_1.z.string(),
    variant_attributes: zod_1.z.record(zod_1.z.string()),
    hierarchicalCategories: zod_1.z.object({
        lvl0: zod_1.z.string(),
    }),
    attributes: zod_1.z.object({
        descripciones: zod_1.z.string(),
        guia_de_tallas: zod_1.z.string(),
        material1: zod_1.z.number(),
    }),
    structured_attributes: zod_1.z.array(ZStructuredAttribute),
    attribute_set: zod_1.z.object({
        name: zod_1.z.string(),
    }),
    images: ZImages,
    stock: zod_1.z.object({
        global: zod_1.z.object({
            qty: zod_1.z.number(),
        }),
    }),
    brand: zod_1.z.object({ name: zod_1.z.string() }).optional(),
    new_product: zod_1.z.boolean(),
    variant_selector: zod_1.z.array(ZVariantSelector),
    price: ZProductPrice,
    website_category_id: zod_1.z.string(),
    only_quotation: zod_1.z.boolean(),
    objectID: zod_1.z.number(),
});
//////////////////////
/// Address model  ///
//////////////////////
// Zod objects to parse the incoming data from the API
var ZAddressType = zod_1.z.enum(["invoice", "delivery", "contact"]);
var ZDefaultAddress = zod_1.z.object({
    id: zod_1.z.number(),
    display_name: zod_1.z.string()
});
var ZLocation = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    code: zod_1.z.string(),
});
var ZAddress = zod_1.z.object({
    id: zod_1.z.number(),
    parent_id: zod_1.z.number(),
    type: ZAddressType,
    display_name: zod_1.z.string(),
    name: zod_1.z.string(),
    ref: zod_1.z.string(),
    street: zod_1.z.string(),
    street2: zod_1.z.string().optional(),
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
    title: zod_1.z.string().optional(),
    enabled: zod_1.z.boolean().optional(),
    partner_invoice_id: ZDefaultAddress.optional(),
    partner_delivery_id: ZDefaultAddress.optional(),
});
//////////////////////
/// Partner model  ///
//////////////////////
// Depends on Address model
// Zod objects to parse the incoming data from the API
var ZCommercial = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    phone: zod_1.z.string().optional(),
    mobile: zod_1.z.string().optional(),
});
var ZCustomer = zod_1.z.object({
    id: zod_1.z.number(),
    parent_id: zod_1.z.number().optional(),
    commercial: ZCommercial,
    type: ZAddressType,
    display_name: zod_1.z.string(),
    name: zod_1.z.string(),
    ref: zod_1.z.string(),
    street: zod_1.z.string(),
    street2: zod_1.z.string().optional(),
    zip: zod_1.z.string(),
    city: zod_1.z.string(),
    phone: zod_1.z.string().optional(),
    email: zod_1.z.string(),
    userEmail: zod_1.z.string(),
    vat: zod_1.z.string(),
    state: ZLocation,
    country: ZLocation,
    address_type: zod_1.z.string().optional(),
    is_company: zod_1.z.boolean().optional(),
    lang: zod_1.z.string(),
    title: zod_1.z.string(),
    enabled: zod_1.z.boolean(),
    partner_invoice_id: ZDefaultAddress.optional(),
    partner_delivery_id: ZDefaultAddress.optional(),
});
// Typescript types and interfaces
///////////////////
/// Cart model  ///
///////////////////
// depends on Product, Address
// Zod objects to parse the incoming data from the API
exports.ZCart = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
});
