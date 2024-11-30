import {MigrationInterface, QueryRunner} from "typeorm";

export class sales1732789367827 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE sales_order (
                id SERIAL PRIMARY KEY,
                created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                customer_name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                mobile_number VARCHAR(15) NOT NULL,
                status VARCHAR(50) NOT NULL,
                order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                total_amount DECIMAL(10, 2) NOT NULL
            )
        `);

        await queryRunner.query(`
            CREATE TABLE product (
                id SERIAL PRIMARY KEY,
                created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                name VARCHAR(255) NOT NULL,
                description TEXT,
                price DECIMAL(10, 2) NOT NULL,
                stock_quantity INT,
                rating DECIMAL(10, 1),
                image VARCHAR 
            )
        `);

        await queryRunner.query(`
            CREATE TABLE sales_order_product (
                id SERIAL PRIMARY KEY,
                sales_order_id INT REFERENCES sales_order(id) ON DELETE CASCADE,
                product_id INT REFERENCES product(id) ON DELETE CASCADE,
                quantity INT NOT NULL
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE sales_order_product`);
        await queryRunner.query(`DROP TABLE product`);
        await queryRunner.query(`DROP TABLE sales_order`);
    }

}
