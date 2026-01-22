
export interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    tag?: string;
    description: string;
}

export interface Review {
    id: number;
    text: string;
    author: string;
    role: string;
}
