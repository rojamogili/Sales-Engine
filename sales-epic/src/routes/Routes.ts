
import { ProductsRoutes } from './products.router';
import { SaleOrderRoutes } from './sales_order.router';

class Routes {
    private productsRoutes: ProductsRoutes;
    private saleOrderRoutes: SaleOrderRoutes;

    constructor() {
        this.productsRoutes = new ProductsRoutes();
        this.saleOrderRoutes = new SaleOrderRoutes();
    }

    public routes(app: any): void {
        this.productsRoutes.routes(app);
        this.saleOrderRoutes.routes(app);
    }
}

export { Routes };
