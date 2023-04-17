import { z, ZodError } from "zod";
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
export declare const ZCart: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
}, {
    id: number;
    name: string;
}>;
export type IAddressType = z.infer<typeof ZAddressType>;
export type IProductPrice = z.infer<typeof ZProductPrice>;
export type IImageObject = z.infer<typeof ZImageObject>;
export type IImages = z.infer<typeof ZImages>;
export type ICart = z.infer<typeof ZCart>;
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
    getCart(email: string): Promise<IApiResponse<ICart>>;
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
export type IApiResponse<DataType> = IApiErrorResponse | IApiSuccessResponse<DataType>;
export interface IApiSuccessResponse<DataType> {
    success: true;
    data: DataType;
}
export interface IApiErrorResponse {
    error_type: "zod" | "erp api";
    success: false;
    error: ZodError | number;
    message: string;
}
export {};
//# sourceMappingURL=shopinvader-boundary.d.ts.map