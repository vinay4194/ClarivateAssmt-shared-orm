import { Category } from "./category.entity";
export declare class Product {
    id: number;
    productName: string;
    description: string;
    price: number;
    stockQuantity: number;
    categoryId: number;
    category: Category;
    createdAt: Date;
    updatedAt: Date;
}
