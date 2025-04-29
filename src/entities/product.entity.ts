// src/entities/product.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Category } from "./category.entity";

@Entity("products")
export class Product {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	productName: string;

	@Column()
	description: string;

	@Column("decimal")
	price: number;

	@Column()
	stockQuantity: number;

	@Column()
	categoryId: number;

	@ManyToOne(() => Category, (category) => category.products)
	@JoinColumn({ name: "categoryId" })
	category: Category;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}
