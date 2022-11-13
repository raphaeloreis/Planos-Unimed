/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Characteristics {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
  
  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  @ManyToMany(
    type => Product, 
    product => product.characteristics
  )
  products: Product[];
}