import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInitialTables1745917486258 implements MigrationInterface {
	name = "CreateInitialTables1745917486258";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
      CREATE TABLE "categories" (
        "id" SERIAL PRIMARY KEY,
        "categoryName" VARCHAR NOT NULL,
        "description" VARCHAR NOT NULL,
        "isActive" BOOLEAN DEFAULT true,
        "createdAt" TIMESTAMP DEFAULT now(),
        "updatedAt" TIMESTAMP DEFAULT now()
      )
    `);
		await queryRunner.query(`
      CREATE TABLE "products" (
        "id" SERIAL PRIMARY KEY,
        "productName" VARCHAR NOT NULL,
        "description" VARCHAR NOT NULL,
        "price" DECIMAL NOT NULL,
        "stockQuantity" INTEGER NOT NULL,
        "categoryId" INTEGER REFERENCES "categories"("id"),
        "createdAt" TIMESTAMP DEFAULT now(),
        "updatedAt" TIMESTAMP DEFAULT now()
      )
    `);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE "products"`);
		await queryRunner.query(`DROP TABLE "categories"`);
	}
}
