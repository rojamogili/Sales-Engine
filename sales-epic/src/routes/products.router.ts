import { Request, Response } from 'express';

import { checkAuth } from '../middlewares/jwt-token-validation';
import { ProductsController } from '../controller/products.controller';

class ProductsRoutes {
    private productsController: ProductsController;
    constructor() {
        this.productsController = new ProductsController();
    }

    public routes(app: any): void {

        app.route('/products/list')
        .get([checkAuth], async (request: Request, response: Response) => {
            console.log("-----------", request.params)
            return this.productsController.list_products(request.query)
            .then((data) => {
                return response.send(data);
            }).catch((err) => {
                return response.status(500).send(err);
            })
        })

        app.route('/products/add')
        .post([checkAuth], async (request: Request, response: Response) => {
            console.log("-------", request.body);
            return this.productsController.product_upsert(request.body)
            .then((data) => {
                return response.send(data);
            }).catch((err) => {
                return response.status(500).send(err);
            })
        })

        app.route('/products/update')
        .patch([checkAuth], async (request: Request, response: Response) => {
            return this.productsController.product_upsert(request.body)
            .then((data) => {
                return response.send(data);
            }).catch((err) => {
                return response.status(500).send(err);
            })
        })
    }
}
export { ProductsRoutes };
