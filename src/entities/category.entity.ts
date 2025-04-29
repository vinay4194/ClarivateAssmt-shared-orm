// src/entities/category.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity("categories")
export class Category {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	categoryName: string;

	@Column()
	description: string;

	@Column({ default: true })
	isActive: boolean;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@OneToMany(() => Product, (product) => product.category)
	products: Product[];
}
