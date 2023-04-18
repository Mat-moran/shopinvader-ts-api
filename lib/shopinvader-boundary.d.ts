import { ErrorResult, SuccessResult } from 'domain-functions';
import { z, ZodError, ZodSchema } from 'zod';
declare const ZProductPrice: z.ZodObject<{
    default: z.ZodObject<{
        value: z.ZodNumber;
        tax_included: z.ZodBoolean;
        original_value: z.ZodNumber;
        discount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        value: number;
        tax_included: boolean;
        original_value: number;
        discount: number;
    }, {
        value: number;
        tax_included: boolean;
        original_value: number;
        discount: number;
    }>;
}, "strip", z.ZodTypeAny, {
    default: {
        value: number;
        tax_included: boolean;
        original_value: number;
        discount: number;
    };
}, {
    default: {
        value: number;
        tax_included: boolean;
        original_value: number;
        discount: number;
    };
}>;
declare const ZImageObject: z.ZodObject<{
    alt: z.ZodString;
    src: z.ZodString;
    tag: z.ZodString;
}, "strip", z.ZodTypeAny, {
    alt: string;
    src: string;
    tag: string;
}, {
    alt: string;
    src: string;
    tag: string;
}>;
declare const ZImages: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodObject<{
    alt: z.ZodString;
    src: z.ZodString;
    tag: z.ZodString;
}, "strip", z.ZodTypeAny, {
    alt: string;
    src: string;
    tag: string;
}, {
    alt: string;
    src: string;
    tag: string;
}>>, "many">;
declare const ZAddressType: z.ZodEnum<["invoice", "delivery", "contact"]>;
export declare const ZAddress: z.ZodObject<{
    id: z.ZodNumber;
    parent_id: z.ZodUnion<[z.ZodBoolean, z.ZodNumber]>;
    type: z.ZodEnum<["invoice", "delivery", "contact"]>;
    display_name: z.ZodString;
    name: z.ZodString;
    ref: z.ZodNullable<z.ZodString>;
    street: z.ZodString;
    street2: z.ZodNullable<z.ZodString>;
    zip: z.ZodString;
    city: z.ZodString;
    phone: z.ZodString;
    email: z.ZodOptional<z.ZodString>;
    userEmail: z.ZodOptional<z.ZodString>;
    state: z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id: number;
        name: string;
    }, {
        code: string;
        id: number;
        name: string;
    }>;
    country: z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id: number;
        name: string;
    }, {
        code: string;
        id: number;
        name: string;
    }>;
    address_type: z.ZodOptional<z.ZodString>;
    is_company: z.ZodOptional<z.ZodBoolean>;
    lang: z.ZodOptional<z.ZodString>;
    title: z.ZodNullable<z.ZodString>;
    enabled: z.ZodOptional<z.ZodBoolean>;
    partner_invoice_id: z.ZodNullable<z.ZodObject<{
        id: z.ZodNumber;
        display_name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        display_name: string;
    }, {
        id: number;
        display_name: string;
    }>>;
    partner_delivery_id: z.ZodNullable<z.ZodObject<{
        id: z.ZodNumber;
        display_name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        display_name: string;
    }, {
        id: number;
        display_name: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    email?: string | undefined;
    userEmail?: string | undefined;
    address_type?: string | undefined;
    is_company?: boolean | undefined;
    lang?: string | undefined;
    enabled?: boolean | undefined;
    type: "invoice" | "delivery" | "contact";
    id: number;
    name: string;
    display_name: string;
    parent_id: number | boolean;
    ref: string | null;
    street: string;
    street2: string | null;
    zip: string;
    city: string;
    phone: string;
    state: {
        code: string;
        id: number;
        name: string;
    };
    country: {
        code: string;
        id: number;
        name: string;
    };
    title: string | null;
    partner_invoice_id: {
        id: number;
        display_name: string;
    } | null;
    partner_delivery_id: {
        id: number;
        display_name: string;
    } | null;
}, {
    email?: string | undefined;
    userEmail?: string | undefined;
    address_type?: string | undefined;
    is_company?: boolean | undefined;
    lang?: string | undefined;
    enabled?: boolean | undefined;
    type: "invoice" | "delivery" | "contact";
    id: number;
    name: string;
    display_name: string;
    parent_id: number | boolean;
    ref: string | null;
    street: string;
    street2: string | null;
    zip: string;
    city: string;
    phone: string;
    state: {
        code: string;
        id: number;
        name: string;
    };
    country: {
        code: string;
        id: number;
        name: string;
    };
    title: string | null;
    partner_invoice_id: {
        id: number;
        display_name: string;
    } | null;
    partner_delivery_id: {
        id: number;
        display_name: string;
    } | null;
}>;
export declare const ZCustomer: z.ZodObject<{
    id: z.ZodNumber;
    parent_id: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
    commercial: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodString;
        phone: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
        mobile: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
        photo: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        phone: string | boolean;
        email: string;
        mobile: string | boolean;
        photo: string;
    }, {
        name: string;
        phone: string | boolean;
        email: string;
        mobile: string | boolean;
        photo: string;
    }>;
    type: z.ZodEnum<["invoice", "delivery", "contact"]>;
    display_name: z.ZodString;
    name: z.ZodNullable<z.ZodString>;
    ref: z.ZodNullable<z.ZodString>;
    street: z.ZodNullable<z.ZodString>;
    street2: z.ZodNullable<z.ZodString>;
    zip: z.ZodNullable<z.ZodString>;
    city: z.ZodNullable<z.ZodString>;
    phone: z.ZodNullable<z.ZodString>;
    email: z.ZodString;
    userEmail: z.ZodOptional<z.ZodString>;
    vat: z.ZodNullable<z.ZodString>;
    state: z.ZodNullable<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id: number;
        name: string;
    }, {
        code: string;
        id: number;
        name: string;
    }>>;
    country: z.ZodNullable<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id: number;
        name: string;
    }, {
        code: string;
        id: number;
        name: string;
    }>>;
    address_type: z.ZodOptional<z.ZodString>;
    is_company: z.ZodOptional<z.ZodBoolean>;
    lang: z.ZodString;
    title: z.ZodNullable<z.ZodString>;
    enabled: z.ZodBoolean;
    partner_invoice_id: z.ZodNullable<z.ZodObject<{
        id: z.ZodNumber;
        display_name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        display_name: string;
    }, {
        id: number;
        display_name: string;
    }>>;
    partner_delivery_id: z.ZodNullable<z.ZodObject<{
        id: z.ZodNumber;
        display_name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        display_name: string;
    }, {
        id: number;
        display_name: string;
    }>>;
    logo: z.ZodString;
}, "strip", z.ZodTypeAny, {
    userEmail?: string | undefined;
    address_type?: string | undefined;
    is_company?: boolean | undefined;
    type: "invoice" | "delivery" | "contact";
    id: number;
    name: string | null;
    display_name: string;
    parent_id: number | boolean;
    ref: string | null;
    street: string | null;
    street2: string | null;
    zip: string | null;
    city: string | null;
    phone: string | null;
    email: string;
    state: {
        code: string;
        id: number;
        name: string;
    } | null;
    country: {
        code: string;
        id: number;
        name: string;
    } | null;
    lang: string;
    title: string | null;
    enabled: boolean;
    partner_invoice_id: {
        id: number;
        display_name: string;
    } | null;
    partner_delivery_id: {
        id: number;
        display_name: string;
    } | null;
    commercial: {
        name: string;
        phone: string | boolean;
        email: string;
        mobile: string | boolean;
        photo: string;
    };
    vat: string | null;
    logo: string;
}, {
    userEmail?: string | undefined;
    address_type?: string | undefined;
    is_company?: boolean | undefined;
    type: "invoice" | "delivery" | "contact";
    id: number;
    name: string | null;
    display_name: string;
    parent_id: number | boolean;
    ref: string | null;
    street: string | null;
    street2: string | null;
    zip: string | null;
    city: string | null;
    phone: string | null;
    email: string;
    state: {
        code: string;
        id: number;
        name: string;
    } | null;
    country: {
        code: string;
        id: number;
        name: string;
    } | null;
    lang: string;
    title: string | null;
    enabled: boolean;
    partner_invoice_id: {
        id: number;
        display_name: string;
    } | null;
    partner_delivery_id: {
        id: number;
        display_name: string;
    } | null;
    commercial: {
        name: string;
        phone: string | boolean;
        email: string;
        mobile: string | boolean;
        photo: string;
    };
    vat: string | null;
    logo: string;
}>;
export declare const ZPicking: z.ZodObject<{
    picking: z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
    }, {
        id: number;
        name: string;
    }>;
    product: z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
    }, {
        id: number;
        name: string;
    }>;
    package: z.ZodUnion<[z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
    }, {
        id: number;
        name: string;
    }>, z.ZodBoolean]>;
    date: z.ZodString;
    description: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    order: z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        client_ref: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        client_ref: string | boolean;
    }, {
        id: number;
        name: string;
        client_ref: string | boolean;
    }>;
    qty_reserved: z.ZodNumber;
    qty_done: z.ZodNumber;
    dm_picking_status: z.ZodObject<{
        code: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        name: string;
    }, {
        code: string;
        name: string;
    }>;
}, "strip", z.ZodTypeAny, {
    date: string;
    description: string | boolean;
    picking: {
        id: number;
        name: string;
    };
    product: {
        id: number;
        name: string;
    };
    package: boolean | {
        id: number;
        name: string;
    };
    order: {
        id: number;
        name: string;
        client_ref: string | boolean;
    };
    qty_reserved: number;
    qty_done: number;
    dm_picking_status: {
        code: string;
        name: string;
    };
}, {
    date: string;
    description: string | boolean;
    picking: {
        id: number;
        name: string;
    };
    product: {
        id: number;
        name: string;
    };
    package: boolean | {
        id: number;
        name: string;
    };
    order: {
        id: number;
        name: string;
        client_ref: string | boolean;
    };
    qty_reserved: number;
    qty_done: number;
    dm_picking_status: {
        code: string;
        name: string;
    };
}>;
export declare const ZLinesItem: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    product: z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
    }, {
        id: number;
        name: string;
    }>;
    amount: z.ZodObject<{
        price: z.ZodNumber;
        untaxed: z.ZodNumber;
        tax: z.ZodNumber;
        total: z.ZodNumber;
        total_without_discount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        price: number;
        untaxed: number;
        tax: number;
        total: number;
        total_without_discount: number;
    }, {
        price: number;
        untaxed: number;
        tax: number;
        total: number;
        total_without_discount: number;
    }>;
    qty: z.ZodNumber;
    discount: z.ZodObject<{
        rate: z.ZodNumber;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        value: number;
        rate: number;
    }, {
        value: number;
        rate: number;
    }>;
    product_packaging: z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        qty: z.ZodNumber;
        uom_id: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        qty: number;
        uom_id: number;
    }, {
        id: number;
        name: string;
        qty: number;
        uom_id: number;
    }>;
}, "strip", z.ZodTypeAny, {
    discount: {
        value: number;
        rate: number;
    };
    id: number;
    name: string;
    qty: number;
    product: {
        id: number;
        name: string;
    };
    amount: {
        price: number;
        untaxed: number;
        tax: number;
        total: number;
        total_without_discount: number;
    };
    product_packaging: {
        id: number;
        name: string;
        qty: number;
        uom_id: number;
    };
}, {
    discount: {
        value: number;
        rate: number;
    };
    id: number;
    name: string;
    qty: number;
    product: {
        id: number;
        name: string;
    };
    amount: {
        price: number;
        untaxed: number;
        tax: number;
        total: number;
        total_without_discount: number;
    };
    product_packaging: {
        id: number;
        name: string;
        qty: number;
        uom_id: number;
    };
}>;
export declare const ZLines: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        product: z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
        }, {
            id: number;
            name: string;
        }>;
        amount: z.ZodObject<{
            price: z.ZodNumber;
            untaxed: z.ZodNumber;
            tax: z.ZodNumber;
            total: z.ZodNumber;
            total_without_discount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            price: number;
            untaxed: number;
            tax: number;
            total: number;
            total_without_discount: number;
        }, {
            price: number;
            untaxed: number;
            tax: number;
            total: number;
            total_without_discount: number;
        }>;
        qty: z.ZodNumber;
        discount: z.ZodObject<{
            rate: z.ZodNumber;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            value: number;
            rate: number;
        }, {
            value: number;
            rate: number;
        }>;
        product_packaging: z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
            qty: z.ZodNumber;
            uom_id: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            qty: number;
            uom_id: number;
        }, {
            id: number;
            name: string;
            qty: number;
            uom_id: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        discount: {
            value: number;
            rate: number;
        };
        id: number;
        name: string;
        qty: number;
        product: {
            id: number;
            name: string;
        };
        amount: {
            price: number;
            untaxed: number;
            tax: number;
            total: number;
            total_without_discount: number;
        };
        product_packaging: {
            id: number;
            name: string;
            qty: number;
            uom_id: number;
        };
    }, {
        discount: {
            value: number;
            rate: number;
        };
        id: number;
        name: string;
        qty: number;
        product: {
            id: number;
            name: string;
        };
        amount: {
            price: number;
            untaxed: number;
            tax: number;
            total: number;
            total_without_discount: number;
        };
        product_packaging: {
            id: number;
            name: string;
            qty: number;
            uom_id: number;
        };
    }>, "many">;
    count: z.ZodNumber;
    amount: z.ZodObject<{
        tax: z.ZodNumber;
        untaxed: z.ZodNumber;
        total: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        untaxed: number;
        tax: number;
        total: number;
    }, {
        untaxed: number;
        tax: number;
        total: number;
    }>;
}, "strip", z.ZodTypeAny, {
    amount: {
        untaxed: number;
        tax: number;
        total: number;
    };
    items: {
        discount: {
            value: number;
            rate: number;
        };
        id: number;
        name: string;
        qty: number;
        product: {
            id: number;
            name: string;
        };
        amount: {
            price: number;
            untaxed: number;
            tax: number;
            total: number;
            total_without_discount: number;
        };
        product_packaging: {
            id: number;
            name: string;
            qty: number;
            uom_id: number;
        };
    }[];
    count: number;
}, {
    amount: {
        untaxed: number;
        tax: number;
        total: number;
    };
    items: {
        discount: {
            value: number;
            rate: number;
        };
        id: number;
        name: string;
        qty: number;
        product: {
            id: number;
            name: string;
        };
        amount: {
            price: number;
            untaxed: number;
            tax: number;
            total: number;
            total_without_discount: number;
        };
        product_packaging: {
            id: number;
            name: string;
            qty: number;
            uom_id: number;
        };
    }[];
    count: number;
}>;
export declare const ZSale: z.ZodObject<{
    id: z.ZodNumber;
    date: z.ZodString;
    amount: z.ZodObject<{
        tax: z.ZodNumber;
        untaxed: z.ZodNumber;
        total: z.ZodNumber;
        discount_total: z.ZodNumber;
        total_without_discount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        untaxed: number;
        tax: number;
        total: number;
        total_without_discount: number;
        discount_total: number;
    }, {
        untaxed: number;
        tax: number;
        total: number;
        total_without_discount: number;
        discount_total: number;
    }>;
    name: z.ZodString;
    state_label: z.ZodString;
    client_order_ref: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    invoice_status: z.ZodString;
    picking_status: z.ZodString;
}, "strip", z.ZodTypeAny, {
    date: string;
    id: number;
    name: string;
    amount: {
        untaxed: number;
        tax: number;
        total: number;
        total_without_discount: number;
        discount_total: number;
    };
    state_label: string;
    client_order_ref: string | boolean;
    invoice_status: string;
    picking_status: string;
}, {
    date: string;
    id: number;
    name: string;
    amount: {
        untaxed: number;
        tax: number;
        total: number;
        total_without_discount: number;
        discount_total: number;
    };
    state_label: string;
    client_order_ref: string | boolean;
    invoice_status: string;
    picking_status: string;
}>;
export declare const ZInvoice: z.ZodObject<{
    invoice_id: z.ZodNumber;
    number: z.ZodString;
    payment_reference: z.ZodString;
    date_invoice: z.ZodString;
    date_due: z.ZodString;
    amount_total: z.ZodNumber;
    amount_total_signed: z.ZodNumber;
    amount_tax: z.ZodNumber;
    amount_untaxed: z.ZodNumber;
    amount_untaxed_signed: z.ZodNumber;
    state: z.ZodString;
    payment_state: z.ZodString;
    type: z.ZodString;
    amount_due: z.ZodNumber;
    type_label: z.ZodString;
    state_label: z.ZodString;
    payment_state_label: z.ZodString;
}, "strip", z.ZodTypeAny, {
    number: string;
    type: string;
    state: string;
    state_label: string;
    invoice_id: number;
    payment_reference: string;
    date_invoice: string;
    date_due: string;
    amount_total: number;
    amount_total_signed: number;
    amount_tax: number;
    amount_untaxed: number;
    amount_untaxed_signed: number;
    payment_state: string;
    amount_due: number;
    type_label: string;
    payment_state_label: string;
}, {
    number: string;
    type: string;
    state: string;
    state_label: string;
    invoice_id: number;
    payment_reference: string;
    date_invoice: string;
    date_due: string;
    amount_total: number;
    amount_total_signed: number;
    amount_tax: number;
    amount_untaxed: number;
    amount_untaxed_signed: number;
    payment_state: string;
    amount_due: number;
    type_label: string;
    payment_state_label: string;
}>;
export declare const ZCartItem: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    product: z.ZodObject<{
        id: z.ZodNumber;
        objectID: z.ZodNumber;
        name: z.ZodString;
        model: z.ZodObject<{
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
        }, {
            name: string;
        }>;
        url_key: z.ZodString;
        redirect_url_key: z.ZodArray<z.ZodString, "many">;
        main: z.ZodBoolean;
        short_description: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        short_name: z.ZodNullable<z.ZodString>;
        seo_title: z.ZodNullable<z.ZodString>;
        meta_keywords: z.ZodNullable<z.ZodString>;
        meta_description: z.ZodNullable<z.ZodString>;
        variant_count: z.ZodNumber;
        categories: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
            url_key: z.ZodString;
            level: z.ZodNumber;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: number;
            name: string;
            url_key: string;
            level: number;
            description: string;
        }, {
            id: number;
            name: string;
            url_key: string;
            level: number;
            description: string;
        }>, "many">;
        sku: z.ZodString;
        variant_attributes: z.ZodRecord<z.ZodString, z.ZodString>;
        hierarchicalCategories: z.ZodObject<{
            lvl0: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            lvl0?: string | undefined;
        }, {
            lvl0?: string | undefined;
        }>;
        attributes: z.ZodObject<{
            descripciones: z.ZodOptional<z.ZodString>;
            guia_de_tallas: z.ZodOptional<z.ZodString>;
            material1: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            descripciones?: string | undefined;
            guia_de_tallas?: string | undefined;
            material1?: number | undefined;
        }, {
            descripciones?: string | undefined;
            guia_de_tallas?: string | undefined;
            material1?: number | undefined;
        }>;
        structured_attributes: z.ZodArray<z.ZodObject<{
            group_name: z.ZodString;
            fields: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                key: z.ZodString;
                value: z.ZodString;
                type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                type: string;
                name: string;
                key: string;
            }, {
                value: string;
                type: string;
                name: string;
                key: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            group_name: string;
            fields: {
                value: string;
                type: string;
                name: string;
                key: string;
            }[];
        }, {
            group_name: string;
            fields: {
                value: string;
                type: string;
                name: string;
                key: string;
            }[];
        }>, "many">;
        attribute_set: z.ZodNullable<z.ZodObject<{
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
        }, {
            name: string;
        }>>;
        images: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodObject<{
            alt: z.ZodString;
            src: z.ZodString;
            tag: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            alt: string;
            src: string;
            tag: string;
        }, {
            alt: string;
            src: string;
            tag: string;
        }>>, "many">;
        stock: z.ZodObject<{
            global: z.ZodObject<{
                qty: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                qty: number;
            }, {
                qty: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            global: {
                qty: number;
            };
        }, {
            global: {
                qty: number;
            };
        }>;
        brand: z.ZodNullable<z.ZodObject<{
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
        }, {
            name: string;
        }>>;
        new_product: z.ZodBoolean;
        variant_selector: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            values: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                sku: z.ZodString;
                available: z.ZodBoolean;
                selected: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                name: string;
                sku: string;
                available: boolean;
                selected: boolean;
            }, {
                name: string;
                sku: string;
                available: boolean;
                selected: boolean;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            values: {
                name: string;
                sku: string;
                available: boolean;
                selected: boolean;
            }[];
            name: string;
        }, {
            values: {
                name: string;
                sku: string;
                available: boolean;
                selected: boolean;
            }[];
            name: string;
        }>, "many">;
        price: z.ZodObject<{
            default: z.ZodObject<{
                value: z.ZodNumber;
                tax_included: z.ZodBoolean;
                original_value: z.ZodNumber;
                discount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                value: number;
                tax_included: boolean;
                original_value: number;
                discount: number;
            }, {
                value: number;
                tax_included: boolean;
                original_value: number;
                discount: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            default: {
                value: number;
                tax_included: boolean;
                original_value: number;
                discount: number;
            };
        }, {
            default: {
                value: number;
                tax_included: boolean;
                original_value: number;
                discount: number;
            };
        }>;
        website_category_id: z.ZodString;
        only_quotation: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        url_key: string;
        description: string | null;
        sku: string;
        objectID: number;
        model: {
            name: string;
        };
        redirect_url_key: string[];
        main: boolean;
        short_description: string | null;
        short_name: string | null;
        seo_title: string | null;
        meta_keywords: string | null;
        meta_description: string | null;
        variant_count: number;
        categories: {
            id: number;
            name: string;
            url_key: string;
            level: number;
            description: string;
        }[];
        variant_attributes: Record<string, string>;
        hierarchicalCategories: {
            lvl0?: string | undefined;
        };
        attributes: {
            descripciones?: string | undefined;
            guia_de_tallas?: string | undefined;
            material1?: number | undefined;
        };
        structured_attributes: {
            group_name: string;
            fields: {
                value: string;
                type: string;
                name: string;
                key: string;
            }[];
        }[];
        attribute_set: {
            name: string;
        } | null;
        images: Record<string, {
            alt: string;
            src: string;
            tag: string;
        }>[];
        stock: {
            global: {
                qty: number;
            };
        };
        brand: {
            name: string;
        } | null;
        new_product: boolean;
        variant_selector: {
            values: {
                name: string;
                sku: string;
                available: boolean;
                selected: boolean;
            }[];
            name: string;
        }[];
        price: {
            default: {
                value: number;
                tax_included: boolean;
                original_value: number;
                discount: number;
            };
        };
        website_category_id: string;
        only_quotation: boolean;
    }, {
        id: number;
        name: string;
        url_key: string;
        description: string | null;
        sku: string;
        objectID: number;
        model: {
            name: string;
        };
        redirect_url_key: string[];
        main: boolean;
        short_description: string | null;
        short_name: string | null;
        seo_title: string | null;
        meta_keywords: string | null;
        meta_description: string | null;
        variant_count: number;
        categories: {
            id: number;
            name: string;
            url_key: string;
            level: number;
            description: string;
        }[];
        variant_attributes: Record<string, string>;
        hierarchicalCategories: {
            lvl0?: string | undefined;
        };
        attributes: {
            descripciones?: string | undefined;
            guia_de_tallas?: string | undefined;
            material1?: number | undefined;
        };
        structured_attributes: {
            group_name: string;
            fields: {
                value: string;
                type: string;
                name: string;
                key: string;
            }[];
        }[];
        attribute_set: {
            name: string;
        } | null;
        images: Record<string, {
            alt: string;
            src: string;
            tag: string;
        }>[];
        stock: {
            global: {
                qty: number;
            };
        };
        brand: {
            name: string;
        } | null;
        new_product: boolean;
        variant_selector: {
            values: {
                name: string;
                sku: string;
                available: boolean;
                selected: boolean;
            }[];
            name: string;
        }[];
        price: {
            default: {
                value: number;
                tax_included: boolean;
                original_value: number;
                discount: number;
            };
        };
        website_category_id: string;
        only_quotation: boolean;
    }>;
    amount: z.ZodObject<{
        tax: z.ZodNumber;
        untaxed: z.ZodNumber;
        total: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        untaxed: number;
        tax: number;
        total: number;
    }, {
        untaxed: number;
        tax: number;
        total: number;
    }>;
    qty: z.ZodNumber;
    discount: z.ZodObject<{
        rate: z.ZodNumber;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        value: number;
        rate: number;
    }, {
        value: number;
        rate: number;
    }>;
    is_reward_line: z.ZodBoolean;
    product_packaging: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>;
}, "strip", z.ZodTypeAny, {
    discount: {
        value: number;
        rate: number;
    };
    id: number;
    name: string;
    qty: number;
    product: {
        id: number;
        name: string;
        url_key: string;
        description: string | null;
        sku: string;
        objectID: number;
        model: {
            name: string;
        };
        redirect_url_key: string[];
        main: boolean;
        short_description: string | null;
        short_name: string | null;
        seo_title: string | null;
        meta_keywords: string | null;
        meta_description: string | null;
        variant_count: number;
        categories: {
            id: number;
            name: string;
            url_key: string;
            level: number;
            description: string;
        }[];
        variant_attributes: Record<string, string>;
        hierarchicalCategories: {
            lvl0?: string | undefined;
        };
        attributes: {
            descripciones?: string | undefined;
            guia_de_tallas?: string | undefined;
            material1?: number | undefined;
        };
        structured_attributes: {
            group_name: string;
            fields: {
                value: string;
                type: string;
                name: string;
                key: string;
            }[];
        }[];
        attribute_set: {
            name: string;
        } | null;
        images: Record<string, {
            alt: string;
            src: string;
            tag: string;
        }>[];
        stock: {
            global: {
                qty: number;
            };
        };
        brand: {
            name: string;
        } | null;
        new_product: boolean;
        variant_selector: {
            values: {
                name: string;
                sku: string;
                available: boolean;
                selected: boolean;
            }[];
            name: string;
        }[];
        price: {
            default: {
                value: number;
                tax_included: boolean;
                original_value: number;
                discount: number;
            };
        };
        website_category_id: string;
        only_quotation: boolean;
    };
    amount: {
        untaxed: number;
        tax: number;
        total: number;
    };
    product_packaging: {
        id: string;
        name: string;
    };
    is_reward_line: boolean;
}, {
    discount: {
        value: number;
        rate: number;
    };
    id: number;
    name: string;
    qty: number;
    product: {
        id: number;
        name: string;
        url_key: string;
        description: string | null;
        sku: string;
        objectID: number;
        model: {
            name: string;
        };
        redirect_url_key: string[];
        main: boolean;
        short_description: string | null;
        short_name: string | null;
        seo_title: string | null;
        meta_keywords: string | null;
        meta_description: string | null;
        variant_count: number;
        categories: {
            id: number;
            name: string;
            url_key: string;
            level: number;
            description: string;
        }[];
        variant_attributes: Record<string, string>;
        hierarchicalCategories: {
            lvl0?: string | undefined;
        };
        attributes: {
            descripciones?: string | undefined;
            guia_de_tallas?: string | undefined;
            material1?: number | undefined;
        };
        structured_attributes: {
            group_name: string;
            fields: {
                value: string;
                type: string;
                name: string;
                key: string;
            }[];
        }[];
        attribute_set: {
            name: string;
        } | null;
        images: Record<string, {
            alt: string;
            src: string;
            tag: string;
        }>[];
        stock: {
            global: {
                qty: number;
            };
        };
        brand: {
            name: string;
        } | null;
        new_product: boolean;
        variant_selector: {
            values: {
                name: string;
                sku: string;
                available: boolean;
                selected: boolean;
            }[];
            name: string;
        }[];
        price: {
            default: {
                value: number;
                tax_included: boolean;
                original_value: number;
                discount: number;
            };
        };
        website_category_id: string;
        only_quotation: boolean;
    };
    amount: {
        untaxed: number;
        tax: number;
        total: number;
    };
    product_packaging: {
        id: string;
        name: string;
    };
    is_reward_line: boolean;
}>;
export declare const ZCart: z.ZodObject<{
    id: z.ZodNumber;
    state: z.ZodString;
    state_label: z.ZodString;
    name: z.ZodString;
    date: z.ZodString;
    date_delivery: z.ZodUnion<[z.ZodString, z.ZodLiteral<false>]>;
    client_order_ref: z.ZodUnion<[z.ZodString, z.ZodLiteral<false>]>;
    expiration_date: z.ZodString;
    step: z.ZodObject<{
        current: z.ZodBoolean;
        done: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        current: boolean;
        done: string[];
    }, {
        current: boolean;
        done: string[];
    }>;
    lines: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
            product: z.ZodObject<{
                id: z.ZodNumber;
                objectID: z.ZodNumber;
                name: z.ZodString;
                model: z.ZodObject<{
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                }, {
                    name: string;
                }>;
                url_key: z.ZodString;
                redirect_url_key: z.ZodArray<z.ZodString, "many">;
                main: z.ZodBoolean;
                short_description: z.ZodNullable<z.ZodString>;
                description: z.ZodNullable<z.ZodString>;
                short_name: z.ZodNullable<z.ZodString>;
                seo_title: z.ZodNullable<z.ZodString>;
                meta_keywords: z.ZodNullable<z.ZodString>;
                meta_description: z.ZodNullable<z.ZodString>;
                variant_count: z.ZodNumber;
                categories: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                    url_key: z.ZodString;
                    level: z.ZodNumber;
                    description: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    name: string;
                    url_key: string;
                    level: number;
                    description: string;
                }, {
                    id: number;
                    name: string;
                    url_key: string;
                    level: number;
                    description: string;
                }>, "many">;
                sku: z.ZodString;
                variant_attributes: z.ZodRecord<z.ZodString, z.ZodString>;
                hierarchicalCategories: z.ZodObject<{
                    lvl0: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    lvl0?: string | undefined;
                }, {
                    lvl0?: string | undefined;
                }>;
                attributes: z.ZodObject<{
                    descripciones: z.ZodOptional<z.ZodString>;
                    guia_de_tallas: z.ZodOptional<z.ZodString>;
                    material1: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    descripciones?: string | undefined;
                    guia_de_tallas?: string | undefined;
                    material1?: number | undefined;
                }, {
                    descripciones?: string | undefined;
                    guia_de_tallas?: string | undefined;
                    material1?: number | undefined;
                }>;
                structured_attributes: z.ZodArray<z.ZodObject<{
                    group_name: z.ZodString;
                    fields: z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        key: z.ZodString;
                        value: z.ZodString;
                        type: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        type: string;
                        name: string;
                        key: string;
                    }, {
                        value: string;
                        type: string;
                        name: string;
                        key: string;
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    group_name: string;
                    fields: {
                        value: string;
                        type: string;
                        name: string;
                        key: string;
                    }[];
                }, {
                    group_name: string;
                    fields: {
                        value: string;
                        type: string;
                        name: string;
                        key: string;
                    }[];
                }>, "many">;
                attribute_set: z.ZodNullable<z.ZodObject<{
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                }, {
                    name: string;
                }>>;
                images: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodObject<{
                    alt: z.ZodString;
                    src: z.ZodString;
                    tag: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    alt: string;
                    src: string;
                    tag: string;
                }, {
                    alt: string;
                    src: string;
                    tag: string;
                }>>, "many">;
                stock: z.ZodObject<{
                    global: z.ZodObject<{
                        qty: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        qty: number;
                    }, {
                        qty: number;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    global: {
                        qty: number;
                    };
                }, {
                    global: {
                        qty: number;
                    };
                }>;
                brand: z.ZodNullable<z.ZodObject<{
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                }, {
                    name: string;
                }>>;
                new_product: z.ZodBoolean;
                variant_selector: z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    values: z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        sku: z.ZodString;
                        available: z.ZodBoolean;
                        selected: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        sku: string;
                        available: boolean;
                        selected: boolean;
                    }, {
                        name: string;
                        sku: string;
                        available: boolean;
                        selected: boolean;
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    values: {
                        name: string;
                        sku: string;
                        available: boolean;
                        selected: boolean;
                    }[];
                    name: string;
                }, {
                    values: {
                        name: string;
                        sku: string;
                        available: boolean;
                        selected: boolean;
                    }[];
                    name: string;
                }>, "many">;
                price: z.ZodObject<{
                    default: z.ZodObject<{
                        value: z.ZodNumber;
                        tax_included: z.ZodBoolean;
                        original_value: z.ZodNumber;
                        discount: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        value: number;
                        tax_included: boolean;
                        original_value: number;
                        discount: number;
                    }, {
                        value: number;
                        tax_included: boolean;
                        original_value: number;
                        discount: number;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    default: {
                        value: number;
                        tax_included: boolean;
                        original_value: number;
                        discount: number;
                    };
                }, {
                    default: {
                        value: number;
                        tax_included: boolean;
                        original_value: number;
                        discount: number;
                    };
                }>;
                website_category_id: z.ZodString;
                only_quotation: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                id: number;
                name: string;
                url_key: string;
                description: string | null;
                sku: string;
                objectID: number;
                model: {
                    name: string;
                };
                redirect_url_key: string[];
                main: boolean;
                short_description: string | null;
                short_name: string | null;
                seo_title: string | null;
                meta_keywords: string | null;
                meta_description: string | null;
                variant_count: number;
                categories: {
                    id: number;
                    name: string;
                    url_key: string;
                    level: number;
                    description: string;
                }[];
                variant_attributes: Record<string, string>;
                hierarchicalCategories: {
                    lvl0?: string | undefined;
                };
                attributes: {
                    descripciones?: string | undefined;
                    guia_de_tallas?: string | undefined;
                    material1?: number | undefined;
                };
                structured_attributes: {
                    group_name: string;
                    fields: {
                        value: string;
                        type: string;
                        name: string;
                        key: string;
                    }[];
                }[];
                attribute_set: {
                    name: string;
                } | null;
                images: Record<string, {
                    alt: string;
                    src: string;
                    tag: string;
                }>[];
                stock: {
                    global: {
                        qty: number;
                    };
                };
                brand: {
                    name: string;
                } | null;
                new_product: boolean;
                variant_selector: {
                    values: {
                        name: string;
                        sku: string;
                        available: boolean;
                        selected: boolean;
                    }[];
                    name: string;
                }[];
                price: {
                    default: {
                        value: number;
                        tax_included: boolean;
                        original_value: number;
                        discount: number;
                    };
                };
                website_category_id: string;
                only_quotation: boolean;
            }, {
                id: number;
                name: string;
                url_key: string;
                description: string | null;
                sku: string;
                objectID: number;
                model: {
                    name: string;
                };
                redirect_url_key: string[];
                main: boolean;
                short_description: string | null;
                short_name: string | null;
                seo_title: string | null;
                meta_keywords: string | null;
                meta_description: string | null;
                variant_count: number;
                categories: {
                    id: number;
                    name: string;
                    url_key: string;
                    level: number;
                    description: string;
                }[];
                variant_attributes: Record<string, string>;
                hierarchicalCategories: {
                    lvl0?: string | undefined;
                };
                attributes: {
                    descripciones?: string | undefined;
                    guia_de_tallas?: string | undefined;
                    material1?: number | undefined;
                };
                structured_attributes: {
                    group_name: string;
                    fields: {
                        value: string;
                        type: string;
                        name: string;
                        key: string;
                    }[];
                }[];
                attribute_set: {
                    name: string;
                } | null;
                images: Record<string, {
                    alt: string;
                    src: string;
                    tag: string;
                }>[];
                stock: {
                    global: {
                        qty: number;
                    };
                };
                brand: {
                    name: string;
                } | null;
                new_product: boolean;
                variant_selector: {
                    values: {
                        name: string;
                        sku: string;
                        available: boolean;
                        selected: boolean;
                    }[];
                    name: string;
                }[];
                price: {
                    default: {
                        value: number;
                        tax_included: boolean;
                        original_value: number;
                        discount: number;
                    };
                };
                website_category_id: string;
                only_quotation: boolean;
            }>;
            amount: z.ZodObject<{
                tax: z.ZodNumber;
                untaxed: z.ZodNumber;
                total: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                untaxed: number;
                tax: number;
                total: number;
            }, {
                untaxed: number;
                tax: number;
                total: number;
            }>;
            qty: z.ZodNumber;
            discount: z.ZodObject<{
                rate: z.ZodNumber;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                value: number;
                rate: number;
            }, {
                value: number;
                rate: number;
            }>;
            is_reward_line: z.ZodBoolean;
            product_packaging: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name: string;
            }, {
                id: string;
                name: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            discount: {
                value: number;
                rate: number;
            };
            id: number;
            name: string;
            qty: number;
            product: {
                id: number;
                name: string;
                url_key: string;
                description: string | null;
                sku: string;
                objectID: number;
                model: {
                    name: string;
                };
                redirect_url_key: string[];
                main: boolean;
                short_description: string | null;
                short_name: string | null;
                seo_title: string | null;
                meta_keywords: string | null;
                meta_description: string | null;
                variant_count: number;
                categories: {
                    id: number;
                    name: string;
                    url_key: string;
                    level: number;
                    description: string;
                }[];
                variant_attributes: Record<string, string>;
                hierarchicalCategories: {
                    lvl0?: string | undefined;
                };
                attributes: {
                    descripciones?: string | undefined;
                    guia_de_tallas?: string | undefined;
                    material1?: number | undefined;
                };
                structured_attributes: {
                    group_name: string;
                    fields: {
                        value: string;
                        type: string;
                        name: string;
                        key: string;
                    }[];
                }[];
                attribute_set: {
                    name: string;
                } | null;
                images: Record<string, {
                    alt: string;
                    src: string;
                    tag: string;
                }>[];
                stock: {
                    global: {
                        qty: number;
                    };
                };
                brand: {
                    name: string;
                } | null;
                new_product: boolean;
                variant_selector: {
                    values: {
                        name: string;
                        sku: string;
                        available: boolean;
                        selected: boolean;
                    }[];
                    name: string;
                }[];
                price: {
                    default: {
                        value: number;
                        tax_included: boolean;
                        original_value: number;
                        discount: number;
                    };
                };
                website_category_id: string;
                only_quotation: boolean;
            };
            amount: {
                untaxed: number;
                tax: number;
                total: number;
            };
            product_packaging: {
                id: string;
                name: string;
            };
            is_reward_line: boolean;
        }, {
            discount: {
                value: number;
                rate: number;
            };
            id: number;
            name: string;
            qty: number;
            product: {
                id: number;
                name: string;
                url_key: string;
                description: string | null;
                sku: string;
                objectID: number;
                model: {
                    name: string;
                };
                redirect_url_key: string[];
                main: boolean;
                short_description: string | null;
                short_name: string | null;
                seo_title: string | null;
                meta_keywords: string | null;
                meta_description: string | null;
                variant_count: number;
                categories: {
                    id: number;
                    name: string;
                    url_key: string;
                    level: number;
                    description: string;
                }[];
                variant_attributes: Record<string, string>;
                hierarchicalCategories: {
                    lvl0?: string | undefined;
                };
                attributes: {
                    descripciones?: string | undefined;
                    guia_de_tallas?: string | undefined;
                    material1?: number | undefined;
                };
                structured_attributes: {
                    group_name: string;
                    fields: {
                        value: string;
                        type: string;
                        name: string;
                        key: string;
                    }[];
                }[];
                attribute_set: {
                    name: string;
                } | null;
                images: Record<string, {
                    alt: string;
                    src: string;
                    tag: string;
                }>[];
                stock: {
                    global: {
                        qty: number;
                    };
                };
                brand: {
                    name: string;
                } | null;
                new_product: boolean;
                variant_selector: {
                    values: {
                        name: string;
                        sku: string;
                        available: boolean;
                        selected: boolean;
                    }[];
                    name: string;
                }[];
                price: {
                    default: {
                        value: number;
                        tax_included: boolean;
                        original_value: number;
                        discount: number;
                    };
                };
                website_category_id: string;
                only_quotation: boolean;
            };
            amount: {
                untaxed: number;
                tax: number;
                total: number;
            };
            product_packaging: {
                id: string;
                name: string;
            };
            is_reward_line: boolean;
        }>, "many">;
        count: z.ZodNumber;
        amount: z.ZodObject<{
            tax: z.ZodNumber;
            untaxed: z.ZodNumber;
            total: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            untaxed: number;
            tax: number;
            total: number;
        }, {
            untaxed: number;
            tax: number;
            total: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        amount: {
            untaxed: number;
            tax: number;
            total: number;
        };
        items: {
            discount: {
                value: number;
                rate: number;
            };
            id: number;
            name: string;
            qty: number;
            product: {
                id: number;
                name: string;
                url_key: string;
                description: string | null;
                sku: string;
                objectID: number;
                model: {
                    name: string;
                };
                redirect_url_key: string[];
                main: boolean;
                short_description: string | null;
                short_name: string | null;
                seo_title: string | null;
                meta_keywords: string | null;
                meta_description: string | null;
                variant_count: number;
                categories: {
                    id: number;
                    name: string;
                    url_key: string;
                    level: number;
                    description: string;
                }[];
                variant_attributes: Record<string, string>;
                hierarchicalCategories: {
                    lvl0?: string | undefined;
                };
                attributes: {
                    descripciones?: string | undefined;
                    guia_de_tallas?: string | undefined;
                    material1?: number | undefined;
                };
                structured_attributes: {
                    group_name: string;
                    fields: {
                        value: string;
                        type: string;
                        name: string;
                        key: string;
                    }[];
                }[];
                attribute_set: {
                    name: string;
                } | null;
                images: Record<string, {
                    alt: string;
                    src: string;
                    tag: string;
                }>[];
                stock: {
                    global: {
                        qty: number;
                    };
                };
                brand: {
                    name: string;
                } | null;
                new_product: boolean;
                variant_selector: {
                    values: {
                        name: string;
                        sku: string;
                        available: boolean;
                        selected: boolean;
                    }[];
                    name: string;
                }[];
                price: {
                    default: {
                        value: number;
                        tax_included: boolean;
                        original_value: number;
                        discount: number;
                    };
                };
                website_category_id: string;
                only_quotation: boolean;
            };
            amount: {
                untaxed: number;
                tax: number;
                total: number;
            };
            product_packaging: {
                id: string;
                name: string;
            };
            is_reward_line: boolean;
        }[];
        count: number;
    }, {
        amount: {
            untaxed: number;
            tax: number;
            total: number;
        };
        items: {
            discount: {
                value: number;
                rate: number;
            };
            id: number;
            name: string;
            qty: number;
            product: {
                id: number;
                name: string;
                url_key: string;
                description: string | null;
                sku: string;
                objectID: number;
                model: {
                    name: string;
                };
                redirect_url_key: string[];
                main: boolean;
                short_description: string | null;
                short_name: string | null;
                seo_title: string | null;
                meta_keywords: string | null;
                meta_description: string | null;
                variant_count: number;
                categories: {
                    id: number;
                    name: string;
                    url_key: string;
                    level: number;
                    description: string;
                }[];
                variant_attributes: Record<string, string>;
                hierarchicalCategories: {
                    lvl0?: string | undefined;
                };
                attributes: {
                    descripciones?: string | undefined;
                    guia_de_tallas?: string | undefined;
                    material1?: number | undefined;
                };
                structured_attributes: {
                    group_name: string;
                    fields: {
                        value: string;
                        type: string;
                        name: string;
                        key: string;
                    }[];
                }[];
                attribute_set: {
                    name: string;
                } | null;
                images: Record<string, {
                    alt: string;
                    src: string;
                    tag: string;
                }>[];
                stock: {
                    global: {
                        qty: number;
                    };
                };
                brand: {
                    name: string;
                } | null;
                new_product: boolean;
                variant_selector: {
                    values: {
                        name: string;
                        sku: string;
                        available: boolean;
                        selected: boolean;
                    }[];
                    name: string;
                }[];
                price: {
                    default: {
                        value: number;
                        tax_included: boolean;
                        original_value: number;
                        discount: number;
                    };
                };
                website_category_id: string;
                only_quotation: boolean;
            };
            amount: {
                untaxed: number;
                tax: number;
                total: number;
            };
            product_packaging: {
                id: string;
                name: string;
            };
            is_reward_line: boolean;
        }[];
        count: number;
    }>;
    shipping: z.ZodObject<{
        address: z.ZodObject<{
            id: z.ZodNumber;
            parent_id: z.ZodUnion<[z.ZodBoolean, z.ZodNumber]>;
            type: z.ZodEnum<["invoice", "delivery", "contact"]>;
            display_name: z.ZodString;
            name: z.ZodString;
            ref: z.ZodNullable<z.ZodString>;
            street: z.ZodString;
            street2: z.ZodNullable<z.ZodString>;
            zip: z.ZodString;
            city: z.ZodString;
            phone: z.ZodString;
            email: z.ZodOptional<z.ZodString>;
            userEmail: z.ZodOptional<z.ZodString>;
            state: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                code: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                id: number;
                name: string;
            }, {
                code: string;
                id: number;
                name: string;
            }>;
            country: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                code: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                id: number;
                name: string;
            }, {
                code: string;
                id: number;
                name: string;
            }>;
            address_type: z.ZodOptional<z.ZodString>;
            is_company: z.ZodOptional<z.ZodBoolean>;
            lang: z.ZodOptional<z.ZodString>;
            title: z.ZodNullable<z.ZodString>;
            enabled: z.ZodOptional<z.ZodBoolean>;
            partner_invoice_id: z.ZodNullable<z.ZodObject<{
                id: z.ZodNumber;
                display_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                display_name: string;
            }, {
                id: number;
                display_name: string;
            }>>;
            partner_delivery_id: z.ZodNullable<z.ZodObject<{
                id: z.ZodNumber;
                display_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                display_name: string;
            }, {
                id: number;
                display_name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            email?: string | undefined;
            userEmail?: string | undefined;
            address_type?: string | undefined;
            is_company?: boolean | undefined;
            lang?: string | undefined;
            enabled?: boolean | undefined;
            type: "invoice" | "delivery" | "contact";
            id: number;
            name: string;
            display_name: string;
            parent_id: number | boolean;
            ref: string | null;
            street: string;
            street2: string | null;
            zip: string;
            city: string;
            phone: string;
            state: {
                code: string;
                id: number;
                name: string;
            };
            country: {
                code: string;
                id: number;
                name: string;
            };
            title: string | null;
            partner_invoice_id: {
                id: number;
                display_name: string;
            } | null;
            partner_delivery_id: {
                id: number;
                display_name: string;
            } | null;
        }, {
            email?: string | undefined;
            userEmail?: string | undefined;
            address_type?: string | undefined;
            is_company?: boolean | undefined;
            lang?: string | undefined;
            enabled?: boolean | undefined;
            type: "invoice" | "delivery" | "contact";
            id: number;
            name: string;
            display_name: string;
            parent_id: number | boolean;
            ref: string | null;
            street: string;
            street2: string | null;
            zip: string;
            city: string;
            phone: string;
            state: {
                code: string;
                id: number;
                name: string;
            };
            country: {
                code: string;
                id: number;
                name: string;
            };
            title: string | null;
            partner_invoice_id: {
                id: number;
                display_name: string;
            } | null;
            partner_delivery_id: {
                id: number;
                display_name: string;
            } | null;
        }>;
    }, "strip", z.ZodTypeAny, {
        address: {
            email?: string | undefined;
            userEmail?: string | undefined;
            address_type?: string | undefined;
            is_company?: boolean | undefined;
            lang?: string | undefined;
            enabled?: boolean | undefined;
            type: "invoice" | "delivery" | "contact";
            id: number;
            name: string;
            display_name: string;
            parent_id: number | boolean;
            ref: string | null;
            street: string;
            street2: string | null;
            zip: string;
            city: string;
            phone: string;
            state: {
                code: string;
                id: number;
                name: string;
            };
            country: {
                code: string;
                id: number;
                name: string;
            };
            title: string | null;
            partner_invoice_id: {
                id: number;
                display_name: string;
            } | null;
            partner_delivery_id: {
                id: number;
                display_name: string;
            } | null;
        };
    }, {
        address: {
            email?: string | undefined;
            userEmail?: string | undefined;
            address_type?: string | undefined;
            is_company?: boolean | undefined;
            lang?: string | undefined;
            enabled?: boolean | undefined;
            type: "invoice" | "delivery" | "contact";
            id: number;
            name: string;
            display_name: string;
            parent_id: number | boolean;
            ref: string | null;
            street: string;
            street2: string | null;
            zip: string;
            city: string;
            phone: string;
            state: {
                code: string;
                id: number;
                name: string;
            };
            country: {
                code: string;
                id: number;
                name: string;
            };
            title: string | null;
            partner_invoice_id: {
                id: number;
                display_name: string;
            } | null;
            partner_delivery_id: {
                id: number;
                display_name: string;
            } | null;
        };
    }>;
    invoicing: z.ZodObject<{
        address: z.ZodObject<{
            id: z.ZodNumber;
            parent_id: z.ZodUnion<[z.ZodBoolean, z.ZodNumber]>;
            type: z.ZodEnum<["invoice", "delivery", "contact"]>;
            display_name: z.ZodString;
            name: z.ZodString;
            ref: z.ZodNullable<z.ZodString>;
            street: z.ZodString;
            street2: z.ZodNullable<z.ZodString>;
            zip: z.ZodString;
            city: z.ZodString;
            phone: z.ZodString;
            email: z.ZodOptional<z.ZodString>;
            userEmail: z.ZodOptional<z.ZodString>;
            state: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                code: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                id: number;
                name: string;
            }, {
                code: string;
                id: number;
                name: string;
            }>;
            country: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                code: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                id: number;
                name: string;
            }, {
                code: string;
                id: number;
                name: string;
            }>;
            address_type: z.ZodOptional<z.ZodString>;
            is_company: z.ZodOptional<z.ZodBoolean>;
            lang: z.ZodOptional<z.ZodString>;
            title: z.ZodNullable<z.ZodString>;
            enabled: z.ZodOptional<z.ZodBoolean>;
            partner_invoice_id: z.ZodNullable<z.ZodObject<{
                id: z.ZodNumber;
                display_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                display_name: string;
            }, {
                id: number;
                display_name: string;
            }>>;
            partner_delivery_id: z.ZodNullable<z.ZodObject<{
                id: z.ZodNumber;
                display_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                display_name: string;
            }, {
                id: number;
                display_name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            email?: string | undefined;
            userEmail?: string | undefined;
            address_type?: string | undefined;
            is_company?: boolean | undefined;
            lang?: string | undefined;
            enabled?: boolean | undefined;
            type: "invoice" | "delivery" | "contact";
            id: number;
            name: string;
            display_name: string;
            parent_id: number | boolean;
            ref: string | null;
            street: string;
            street2: string | null;
            zip: string;
            city: string;
            phone: string;
            state: {
                code: string;
                id: number;
                name: string;
            };
            country: {
                code: string;
                id: number;
                name: string;
            };
            title: string | null;
            partner_invoice_id: {
                id: number;
                display_name: string;
            } | null;
            partner_delivery_id: {
                id: number;
                display_name: string;
            } | null;
        }, {
            email?: string | undefined;
            userEmail?: string | undefined;
            address_type?: string | undefined;
            is_company?: boolean | undefined;
            lang?: string | undefined;
            enabled?: boolean | undefined;
            type: "invoice" | "delivery" | "contact";
            id: number;
            name: string;
            display_name: string;
            parent_id: number | boolean;
            ref: string | null;
            street: string;
            street2: string | null;
            zip: string;
            city: string;
            phone: string;
            state: {
                code: string;
                id: number;
                name: string;
            };
            country: {
                code: string;
                id: number;
                name: string;
            };
            title: string | null;
            partner_invoice_id: {
                id: number;
                display_name: string;
            } | null;
            partner_delivery_id: {
                id: number;
                display_name: string;
            } | null;
        }>;
    }, "strip", z.ZodTypeAny, {
        address: {
            email?: string | undefined;
            userEmail?: string | undefined;
            address_type?: string | undefined;
            is_company?: boolean | undefined;
            lang?: string | undefined;
            enabled?: boolean | undefined;
            type: "invoice" | "delivery" | "contact";
            id: number;
            name: string;
            display_name: string;
            parent_id: number | boolean;
            ref: string | null;
            street: string;
            street2: string | null;
            zip: string;
            city: string;
            phone: string;
            state: {
                code: string;
                id: number;
                name: string;
            };
            country: {
                code: string;
                id: number;
                name: string;
            };
            title: string | null;
            partner_invoice_id: {
                id: number;
                display_name: string;
            } | null;
            partner_delivery_id: {
                id: number;
                display_name: string;
            } | null;
        };
    }, {
        address: {
            email?: string | undefined;
            userEmail?: string | undefined;
            address_type?: string | undefined;
            is_company?: boolean | undefined;
            lang?: string | undefined;
            enabled?: boolean | undefined;
            type: "invoice" | "delivery" | "contact";
            id: number;
            name: string;
            display_name: string;
            parent_id: number | boolean;
            ref: string | null;
            street: string;
            street2: string | null;
            zip: string;
            city: string;
            phone: string;
            state: {
                code: string;
                id: number;
                name: string;
            };
            country: {
                code: string;
                id: number;
                name: string;
            };
            title: string | null;
            partner_invoice_id: {
                id: number;
                display_name: string;
            } | null;
            partner_delivery_id: {
                id: number;
                display_name: string;
            } | null;
        };
    }>;
    amount: z.ZodObject<{
        untaxed: z.ZodNumber;
        tax: z.ZodNumber;
        total: z.ZodNumber;
        total_without_discount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        untaxed: number;
        tax: number;
        total: number;
        total_without_discount: number;
    }, {
        untaxed: number;
        tax: number;
        total: number;
        total_without_discount: number;
    }>;
    discount: z.ZodOptional<z.ZodObject<{
        rate: z.ZodNumber;
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        value: number;
        rate: number;
    }, {
        value: number;
        rate: number;
    }>>;
    product_packaging: z.ZodOptional<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        price_unit: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        price_unit: number;
    }, {
        id: number;
        name: string;
        price_unit: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    discount?: {
        value: number;
        rate: number;
    } | undefined;
    product_packaging?: {
        id: number;
        name: string;
        price_unit: number;
    } | undefined;
    date: string;
    id: number;
    name: string;
    state: string;
    amount: {
        untaxed: number;
        tax: number;
        total: number;
        total_without_discount: number;
    };
    state_label: string;
    client_order_ref: string | false;
    date_delivery: string | false;
    expiration_date: string;
    step: {
        current: boolean;
        done: string[];
    };
    lines: {
        amount: {
            untaxed: number;
            tax: number;
            total: number;
        };
        items: {
            discount: {
                value: number;
                rate: number;
            };
            id: number;
            name: string;
            qty: number;
            product: {
                id: number;
                name: string;
                url_key: string;
                description: string | null;
                sku: string;
                objectID: number;
                model: {
                    name: string;
                };
                redirect_url_key: string[];
                main: boolean;
                short_description: string | null;
                short_name: string | null;
                seo_title: string | null;
                meta_keywords: string | null;
                meta_description: string | null;
                variant_count: number;
                categories: {
                    id: number;
                    name: string;
                    url_key: string;
                    level: number;
                    description: string;
                }[];
                variant_attributes: Record<string, string>;
                hierarchicalCategories: {
                    lvl0?: string | undefined;
                };
                attributes: {
                    descripciones?: string | undefined;
                    guia_de_tallas?: string | undefined;
                    material1?: number | undefined;
                };
                structured_attributes: {
                    group_name: string;
                    fields: {
                        value: string;
                        type: string;
                        name: string;
                        key: string;
                    }[];
                }[];
                attribute_set: {
                    name: string;
                } | null;
                images: Record<string, {
                    alt: string;
                    src: string;
                    tag: string;
                }>[];
                stock: {
                    global: {
                        qty: number;
                    };
                };
                brand: {
                    name: string;
                } | null;
                new_product: boolean;
                variant_selector: {
                    values: {
                        name: string;
                        sku: string;
                        available: boolean;
                        selected: boolean;
                    }[];
                    name: string;
                }[];
                price: {
                    default: {
                        value: number;
                        tax_included: boolean;
                        original_value: number;
                        discount: number;
                    };
                };
                website_category_id: string;
                only_quotation: boolean;
            };
            amount: {
                untaxed: number;
                tax: number;
                total: number;
            };
            product_packaging: {
                id: string;
                name: string;
            };
            is_reward_line: boolean;
        }[];
        count: number;
    };
    shipping: {
        address: {
            email?: string | undefined;
            userEmail?: string | undefined;
            address_type?: string | undefined;
            is_company?: boolean | undefined;
            lang?: string | undefined;
            enabled?: boolean | undefined;
            type: "invoice" | "delivery" | "contact";
            id: number;
            name: string;
            display_name: string;
            parent_id: number | boolean;
            ref: string | null;
            street: string;
            street2: string | null;
            zip: string;
            city: string;
            phone: string;
            state: {
                code: string;
                id: number;
                name: string;
            };
            country: {
                code: string;
                id: number;
                name: string;
            };
            title: string | null;
            partner_invoice_id: {
                id: number;
                display_name: string;
            } | null;
            partner_delivery_id: {
                id: number;
                display_name: string;
            } | null;
        };
    };
    invoicing: {
        address: {
            email?: string | undefined;
            userEmail?: string | undefined;
            address_type?: string | undefined;
            is_company?: boolean | undefined;
            lang?: string | undefined;
            enabled?: boolean | undefined;
            type: "invoice" | "delivery" | "contact";
            id: number;
            name: string;
            display_name: string;
            parent_id: number | boolean;
            ref: string | null;
            street: string;
            street2: string | null;
            zip: string;
            city: string;
            phone: string;
            state: {
                code: string;
                id: number;
                name: string;
            };
            country: {
                code: string;
                id: number;
                name: string;
            };
            title: string | null;
            partner_invoice_id: {
                id: number;
                display_name: string;
            } | null;
            partner_delivery_id: {
                id: number;
                display_name: string;
            } | null;
        };
    };
}, {
    discount?: {
        value: number;
        rate: number;
    } | undefined;
    product_packaging?: {
        id: number;
        name: string;
        price_unit: number;
    } | undefined;
    date: string;
    id: number;
    name: string;
    state: string;
    amount: {
        untaxed: number;
        tax: number;
        total: number;
        total_without_discount: number;
    };
    state_label: string;
    client_order_ref: string | false;
    date_delivery: string | false;
    expiration_date: string;
    step: {
        current: boolean;
        done: string[];
    };
    lines: {
        amount: {
            untaxed: number;
            tax: number;
            total: number;
        };
        items: {
            discount: {
                value: number;
                rate: number;
            };
            id: number;
            name: string;
            qty: number;
            product: {
                id: number;
                name: string;
                url_key: string;
                description: string | null;
                sku: string;
                objectID: number;
                model: {
                    name: string;
                };
                redirect_url_key: string[];
                main: boolean;
                short_description: string | null;
                short_name: string | null;
                seo_title: string | null;
                meta_keywords: string | null;
                meta_description: string | null;
                variant_count: number;
                categories: {
                    id: number;
                    name: string;
                    url_key: string;
                    level: number;
                    description: string;
                }[];
                variant_attributes: Record<string, string>;
                hierarchicalCategories: {
                    lvl0?: string | undefined;
                };
                attributes: {
                    descripciones?: string | undefined;
                    guia_de_tallas?: string | undefined;
                    material1?: number | undefined;
                };
                structured_attributes: {
                    group_name: string;
                    fields: {
                        value: string;
                        type: string;
                        name: string;
                        key: string;
                    }[];
                }[];
                attribute_set: {
                    name: string;
                } | null;
                images: Record<string, {
                    alt: string;
                    src: string;
                    tag: string;
                }>[];
                stock: {
                    global: {
                        qty: number;
                    };
                };
                brand: {
                    name: string;
                } | null;
                new_product: boolean;
                variant_selector: {
                    values: {
                        name: string;
                        sku: string;
                        available: boolean;
                        selected: boolean;
                    }[];
                    name: string;
                }[];
                price: {
                    default: {
                        value: number;
                        tax_included: boolean;
                        original_value: number;
                        discount: number;
                    };
                };
                website_category_id: string;
                only_quotation: boolean;
            };
            amount: {
                untaxed: number;
                tax: number;
                total: number;
            };
            product_packaging: {
                id: string;
                name: string;
            };
            is_reward_line: boolean;
        }[];
        count: number;
    };
    shipping: {
        address: {
            email?: string | undefined;
            userEmail?: string | undefined;
            address_type?: string | undefined;
            is_company?: boolean | undefined;
            lang?: string | undefined;
            enabled?: boolean | undefined;
            type: "invoice" | "delivery" | "contact";
            id: number;
            name: string;
            display_name: string;
            parent_id: number | boolean;
            ref: string | null;
            street: string;
            street2: string | null;
            zip: string;
            city: string;
            phone: string;
            state: {
                code: string;
                id: number;
                name: string;
            };
            country: {
                code: string;
                id: number;
                name: string;
            };
            title: string | null;
            partner_invoice_id: {
                id: number;
                display_name: string;
            } | null;
            partner_delivery_id: {
                id: number;
                display_name: string;
            } | null;
        };
    };
    invoicing: {
        address: {
            email?: string | undefined;
            userEmail?: string | undefined;
            address_type?: string | undefined;
            is_company?: boolean | undefined;
            lang?: string | undefined;
            enabled?: boolean | undefined;
            type: "invoice" | "delivery" | "contact";
            id: number;
            name: string;
            display_name: string;
            parent_id: number | boolean;
            ref: string | null;
            street: string;
            street2: string | null;
            zip: string;
            city: string;
            phone: string;
            state: {
                code: string;
                id: number;
                name: string;
            };
            country: {
                code: string;
                id: number;
                name: string;
            };
            title: string | null;
            partner_invoice_id: {
                id: number;
                display_name: string;
            } | null;
            partner_delivery_id: {
                id: number;
                display_name: string;
            } | null;
        };
    };
}>;
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
    getCart<T>(email: string, schema: ZodSchema): Promise<IApiResponse<T>>;
    getAddresses<T>(email: string, schema: ZodSchema): Promise<IApiResponse<T>>;
    getCustomer<T>(email: string, schema: ZodSchema): Promise<IApiResponse<T>>;
    getPickings<T>(email: string, schema: ZodSchema): Promise<IApiResponse<T>>;
    getSales<T>(email: string, schema: ZodSchema): Promise<IApiResponse<T>>;
    getInvoices<T>(email: string, schema: ZodSchema): Promise<IApiResponse<T>>;
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
export type IApiResponse<DataType> = SuccessResult<DataType> | ErrorResult;
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
export {};
//# sourceMappingURL=shopinvader-boundary.d.ts.map