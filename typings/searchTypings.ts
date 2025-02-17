export interface SearchResult {
    results: Result[];
    total_results: number;
    last_visible_page: number;
    parse_status_code: number;
    created_at: string;
    updated_at: string;
    page: number;
    url: string;
    job_id: string;
    status_code: number;
    parser_type: string;
}

export interface Result {
    content: Content;
}

export interface Content {
    url: string;
    organic: Organic[];
    total_results: number;
    last_visible_page: number;
    parse_status_code: number;
}

export interface Organic {
    url: string;
    image: string;
    price: Price;
    title: string;
    rating: string;
    seller: Seller;
    product_id: string;
    badge?: string;
    variants?: Variant[];

}

export interface Price {
    price: number;
    currency: string;
}

export interface Rating {
    count: number;
    rating: number;
}

export interface Seller {
    name: string;
}

export interface Variant {
    url: string;
    title: string;
    product_id: string;
}

export interface Context {
    key: string;
    value: any;
}

export interface Link {
    rel: string;
    href: string;
    method: string;
}

