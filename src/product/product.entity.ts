import { Category } from 'src/category/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  image: string;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;
}
