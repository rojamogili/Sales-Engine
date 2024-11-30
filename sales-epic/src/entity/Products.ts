import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;
  
  @Column()
  public description: string;

  @Column()
  public image: string;

  @Column()
  public price: number;

  @Column()
  public rating: number;
  
  @Column()
  public stock_quantity: number;

  @Column()
  public created_at: Date;
  
  @Column()
  public updated_at: Date;
  
}
