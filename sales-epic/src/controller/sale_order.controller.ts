import { connection } from '../config/connection';
import { SaleOrder } from '../entity/SaleOrder';
import { SaleOrderProduct } from '../entity/SaleOrderProduct';
import { Product } from '../entity/Products';
import { Communicator } from '../config/communicator';

export default class SaleOrderController {

    private communicator: Communicator;
    constructor() {
        this.communicator = new Communicator();
    }

    private returnQuery(filter: any) {
        let condition = {};
        let query = "so.id IS NOT NULL";
        
        if (filter.filterdata && filter.filterdata.length > 0) {
           filter.filterdata.forEach(element => {
              if (element.type === "string") {
                query += ` and so.${element.key} ILIKE :${element.key}`;
                condition[element.key] = `%${element.value}%`;
              }
     
              if (element.type === "equal") {
                 query += ` and so.${element.key} = :${element.key}`;
                 condition[element.key] = `${element.value}`;
              }
     
              if (element.type === "date") {
                 query += ` and DATE(so.${element.key}) = :${element.key}`;
                 condition[element.key] = `${element.value}`;
              }
           });
        }  
  
        return { condition: condition, query: query };
     }

     

    list_sale_orders(search: any) {
        return new Promise((resolve, reject) => {
            return connection.then(async (connection) => {
                console.log("---------", JSON.parse(search))
                search = JSON.parse(search);
                const clause: any = this.returnQuery(search);

                // const clause = {
                //     query: ` so.id is not null `, condition: {}
                // }

                // if (search_str.length) {
                //     clause.query += ` AND (product.name ilike :search_str OR 
                //         so.email ilike :search_str OR 
                //         so.mobile_number ilike :search_str OR 
                //         so.status ilike :search_str OR 
                //         CAST(so.order_date AS TEXT) ilike :search_str)
                //     `;
                //     clause.condition['search_str'] = `%${search}%`
                // }
    
                return connection.manager
                .createQueryBuilder()
                .select(`so.*, 
                    json_agg(json_build_object(
                        'id', sop.id, 'product_name', product.name, 'quantity', sop.quantity, 'product_id', sop.product_id
                    ))`
                )
                .from(SaleOrder, 'so')
                .leftJoin(SaleOrderProduct, 'sop', 'sop.sales_order_id = so.id')
                .leftJoin(Product, 'product', 'product.id = sop.product_id')
                .where(clause.query, clause.condition)
                .groupBy('so.id')
                .getRawMany()
                .then((orders_data: any[]) => {
                    resolve({ statusCode: 200, message: 'success', data: orders_data })
                }).catch((error) => {
                    reject({message: 'Unable to fetch products data.', statusCode: 500});
                })
    
            }).catch((error: any) => {
                reject({message: 'Unable to fetch products data.', statusCode: 500});
            })
        })
    }


    product_insert(data: any) {
        return new Promise((resolve, reject) => {
            return connection.then(async (connection) => {
    
                let sale_order = new SaleOrder();
                Object.assign(sale_order, data);
                
                return connection.manager
                .save(sale_order)
                .then(async (res) => {
                    if (data?.products.length) {
                        let so_list = [], products_list = [];
                        data.products.forEach((product) => {
                            let so_product = new SaleOrderProduct();
                            so_product.sales_order_id = sale_order.id;
                            so_product.product_id = product.product_id;
                            so_product.quantity = product?.quantity || 0;
                            if (product.id) {
                                so_product.id = parseInt(product.id.toString());
                            }
                            so_list.push(so_product);

                            let prod_entity = new Product();
                            // @ts-ignore 
                            prod_entity.stock_quantity = () => `stock_quantity - ${product?.quantity || 0}`;
                            prod_entity.id = parseInt(product.product_id.toString());
                            products_list.push(prod_entity)
                        })
                        
                        data = await connection.manager.save(so_list).catch((err) => {});
                        let prod = await connection.manager.save(products_list).catch((err) => {});
                    
                    }

                    this.communicator.Post(
                        'https//third-party-api.com', 'salesOrder',
                        data
                    )

                    resolve({
                        code: 200,
                        message: 'success',
                        result: res.id ? res.id : {}
                    });
                }).catch(err => {
                    reject({ statusCode: 500, message: 'Unable to add sale order.' });
                });
    
            }).catch((error: any) => {
                reject({message: 'Unable to add sale order.', statusCode: 500});
            })
        })
    }

    product_update(data: any) {
        return new Promise((resolve, reject) => {
            return connection.then(async (connection) => {
    
                let sale_order = new SaleOrder();
                Object.assign(sale_order, data);

                sale_order.id =  parseInt(data.id.toString());
                
                return connection.manager
                .save(sale_order)
                .then(async (res) => {

                    if (data?.products) {
                        let so_list = [], products_list = [];
                        data.products.forEach((product) => {
                            let so_product = new SaleOrderProduct();
                            so_product.sales_order_id = sale_order.id;
                            so_product.product_id = product.product_id;
                            so_product.quantity = product?.quantity || 0;
                            if (product.id) {
                                so_product.id = parseInt(product.id.toString());
                            }
                            so_list.push(so_product);

                            let prod_entity = new Product();
                            // @ts-ignore 
                            prod_entity.stock_quantity = () => `stock_quantity - ${product?.quantity || 0}`;
                            prod_entity.id = parseInt(product.product_id.toString());
                            products_list.push(prod_entity)
                        })
                        
                        data = await connection.manager.save(so_list).catch((err) => {});
                        let prod = await connection.manager.save(products_list).catch((err) => {});
                    
                    }

                    this.communicator.Post(
                        'https//third-party-api.com', 'salesOrder',
                        data
                    )

                    resolve({
                        code: 200,
                        message: 'success',
                        result: res.id ? res.id : {}
                    });
                }).catch(err => {
                    reject({ statusCode: 500, message: 'Unable to add sale order.' });
                });
    
            }).catch((error: any) => {
                reject({message: 'Unable to add sale order.', statusCode: 500});
            })
        })
    }

}

export { SaleOrderController }