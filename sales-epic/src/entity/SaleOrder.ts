import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sales_order')
export class SaleOrder {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public customer_name: string;
  
  @Column()
  public email: string;

  @Column()
  public mobile_number: string;
  
  @Column()
  public status: string;

  @Column()
  public created_at: Date;
  
  @Column()
  public updated_at: Date;
  
  @Column()
  public order_date: Date;
  
  @Column()
  public total_amount: number;
  
}
