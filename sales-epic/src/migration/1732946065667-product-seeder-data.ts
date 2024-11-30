import {MigrationInterface, QueryRunner} from "typeorm";

import { Products } from '../config/constants';
import { Product } from '../entity/Products';
export class productSeederData1732946065667 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.startTransaction();
        let products_entity = []
        Products.forEach((product) => {
            let product_entity = new Product();
            Object.assign(product_entity, product)
            products_entity.push(product_entity);
        })

        await queryRunner.manager.save(products_entity)
        await queryRunner.commitTransaction();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
