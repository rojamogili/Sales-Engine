import { Request, Response } from 'express';

import { checkAuth } from '../middlewares/jwt-token-validation';
import { SaleOrderController } from '../controller/sale_order.controller';

class SaleOrderRoutes {

    private saleOrderController: SaleOrderController;
    constructor() {
        this.saleOrderController = new SaleOrderController();
    }

    public routes(app: any): void {

        app.route('/sale-order/list')
        .get([checkAuth], async (request: Request, response: Response) => {
            console.log("-----------", request.query, request.query.search, '\n\n', )
            return this.saleOrderController.list_sale_orders(request.query.search)
            .then((data) => {
                return response.send(data);
            }).catch((err) => {
                return response.status(500).send(err);
            })
        })

        app.route('/sale-order/add')
        .post([checkAuth], async (request: Request, response: Response) => {
            console.log("-------", request.body);
            return this.saleOrderController.product_insert(request.body)
            .then((data) => {
                return response.send(data);
            }).catch((err) => {
                return response.status(500).send(err);
            })
        })

        app.route('/sale-order/update')
        .patch([checkAuth], async (request: Request, response: Response) => {
            return this.saleOrderController.product_update(request.body)
            .then((data) => {
                return response.send(data);
            }).catch((err) => {
                return response.status(500).send(err);
            })
        })
    }
}

export { SaleOrderRoutes };
