import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateInitialTables1745917486258 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
