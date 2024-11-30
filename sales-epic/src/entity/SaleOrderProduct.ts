import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sales_order_product')
export class SaleOrderProduct {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public sales_order_id: number;
  
  @Column()
  public product_id: number;

  @Column()
  public quantity: number;
  
}
