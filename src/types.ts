export interface PlantType {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
}

export interface CategoryType {
    id: number;
    category_name: string;
    small_description: string;
}