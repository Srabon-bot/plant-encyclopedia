export interface Plant {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
}

export interface Category {
    id: number;
    category_name: string;
    small_description: string;
}