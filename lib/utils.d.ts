import { PrivateShopinvaderFetchOptions } from './shopinvader-boundary';
declare const get_fetch_options: ({ website_unique_id, api_key, email, }: PrivateShopinvaderFetchOptions) => {
    method: string;
    headers: {
        'API-KEY': string;
        'WEBSITE-UNIQUE-KEY': string;
        'PARTNER-EMAIL': string;
    };
};
export declare const fetch_endpoint: (email: string, endpoint: string, fetch_options: ReturnType<typeof get_fetch_options>) => Promise<import("domain-functions/types/types").Result<Response>>;
export {};
//# sourceMappingURL=utils.d.ts.map