import { Product } from "./product.entity";
export declare class Category {
    id: number;
    categoryName: string;
    description: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    products: Product[];
}
