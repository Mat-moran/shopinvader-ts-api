type IAddressType = "invoice" | "delivery" | "contact";
export interface IProductPrice {
    default: {
        value: number;
        tax_included: boolean;
        original_value: number;
        discount: number;
    };
}
export interface IImageDim {
    alt: string;
    src: string;
    tag: string;
}
export interface IImage {
    large: IImageDim;
    medium: IImageDim;
    s: IImageDim;
    xlarge: IImageDim;
    xxl: IImageDim;
}
export interface IKeyValue {
    [key: string]: string;
}
export interface ICartStep {
    current: boolean;
    done: [];
}
export interface ICategory {
    id: number;
    name: string;
    url_key: string;
    level: number;
    description: string;
    meta_description: string;
    meta_title: string;
    seo_title: string;
}
export interface IVariant {
    name: string;
    sku: string;
    available: boolean;
    selected: boolean;
}
export interface IVariantSelector {
    name: string;
    values: IVariant[];
}
export interface IDefaultAddress {
    id: number;
    display_name: string;
}
export interface ICommercial {
    name: string;
    email: string;
    phone: string | boolean;
    mobile: string | boolean;
}
export interface ICustomer {
    id: number;
    parent_id: number;
    commercial: ICommercial;
    type: IAddressType;
    display_name: string;
    name: string;
    ref: string;
    street: string;
    street2?: string | boolean;
    zip: string;
    city: string;
    phone: string;
    email: string;
    userEmail: string;
    function: null;
    opt_in?: boolean;
    opt_out?: boolean;
    vat: string;
    state: {
        id: number;
        name: string;
        code: string;
    };
    country: {
        id: number;
        name: string;
        code: string;
    };
    address_type?: string;
    is_company?: boolean;
    lang?: string;
    title?: null;
    enabled?: boolean;
    industry_id?: number;
    partner_invoice_id?: IDefaultAddress | null;
    partner_delivery_id?: IDefaultAddress | null;
    access?: {
        read: boolean;
        update: boolean;
        delete: boolean;
    };
}
export interface IAddress {
    id: number | string;
    parent_id: number | string;
    type: IAddressType;
    display_name: string;
    name: string;
    ref: string;
    street: string;
    street2?: string | boolean;
    zip: string;
    city: string;
    phone: string;
    email: string;
    userEmail: string;
    function: null;
    opt_in?: boolean;
    opt_out?: boolean;
    vat: string;
    state: {
        id: number;
        name: string;
        code: string;
    };
    country: {
        id: number;
        name: string;
        code: string;
    };
    address_type?: string;
    is_company?: boolean;
    lang?: string;
    title?: null;
    enabled?: boolean;
    industry_id?: number;
    partner_invoice_id?: IDefaultAddress | null;
    partner_delivery_id?: IDefaultAddress | null;
    access?: {
        read: boolean;
        update: boolean;
        delete: boolean;
    };
}
export interface ICarouselItem {
    id: number;
    name: string;
    url_key: string;
    image_src: string | null;
    image_alt: string | null;
}
export interface IProductItem {
    id: number;
    model: {
        name: string;
    };
    url_key: string;
    redirect_url_key: [];
    main: boolean;
    short_description: string;
    description: string;
    name: string;
    short_name: string;
    seo_title: string;
    meta_keywords: string;
    meta_description: string;
    variant_count: number;
    categories: ICategory[];
    sku: string;
    variant_attributes: IKeyValue;
    hierarchicalCategories: {
        lvl0: string;
    };
    attributes: {
        descripciones: string;
        guia_de_tallas: string;
        material1: number;
    };
    structured_attributes: [
        {
            group_name: string;
            fields: [
                {
                    name: string;
                    key: string;
                    value: string;
                    type: string;
                },
                {
                    name: string;
                    key: string;
                    value: string;
                    type: string;
                }
            ];
        },
        {
            group_name: string;
            fields: [
                {
                    name: string;
                    key: string;
                    value: string;
                    type: string;
                }
            ];
        }
    ];
    attribute_set: {
        name: string;
    };
    images: IImage[];
    stock: {
        global: {
            qty: number;
        };
    };
    brand: null;
    new_product: true;
    variant_selector: IVariantSelector[];
    price: IProductPrice;
    website_category_id: string;
    only_quotation: boolean;
    objectID: number;
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
export interface ICart {
    id: number;
    state: string;
    state_label: string;
    name: string;
    date: string;
    client_order_ref: boolean;
    step: ICartStep;
    lines: ILines;
    applied_coupon_ids: ICoupon;
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
    expiration_date: string;
    payment: {
        available_methods: {
            count: number;
            items: [
                {
                    id: number;
                    name: string;
                    provider: string;
                    code: boolean;
                    description: string;
                }
            ];
        };
        amount: number;
    };
    available_for_quotation: boolean;
    reward_amount: number;
    reward_amount_tax_incl: number;
}
export interface EcommerceProvider {
    getCart(id: number, email: string): Promise<ICart | null>;
}
export {};
//# sourceMappingURL=ecommerce-provider.d.ts.map