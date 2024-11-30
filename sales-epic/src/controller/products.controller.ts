import { connection } from '../config/connection';
import { Product } from '../entity/Products';

export default class ProductsController {

    constructor() {

    }

    product_upsert(data: any) {
        return new Promise((resolve, reject) => {
            return connection.then(async (connection) => {
    
                let product = new Product();
                Object.assign(product, data);
                
                if (data.id) {
                    product.id =  parseInt(data.id.toString());
                }
    
                return connection.manager
                .save(product)
                .then(async res => {
                    resolve({
                        code: 200,
                        message: 'success',
                        result: res ? res : {}
                    });
                }).catch(err => {
                    reject({ statusCode: 500, message: 'Unable to add/update product.' });
                });
    
            }).catch((error: any) => {
                reject({message: 'Unable to add/update product.', statusCode: 500});
            })
        })
    }

    list_products(params) {
        return new Promise((resolve, reject) => {
            return connection.then(async (connection) => {
                let fil_query = 'id is not null ', qry_params = {};
    
                if (params?.name) {
                    fil_query += ` AND name ilike :name`;
                    qry_params['name'] = `%${params.name}%`
                }
    
                return connection.manager
                .createQueryBuilder()
                .select(`*`)
                .from(Product, 'product')
                .where(fil_query, qry_params)
                .getRawMany()
                .then((products: any[]) => {
                    resolve({ statusCode: 200, message: 'success', data: products })
                }).catch((error) => {
                    reject({message: 'Unable to fetch products data.', statusCode: 500});
                })
    
            }).catch((error: any) => {
                reject({message: 'Unable to fetch products data.', statusCode: 500});
            })
        })
    }

}

export { ProductsController }