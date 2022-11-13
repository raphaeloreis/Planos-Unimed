/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Characteristics } from './characteristics.entity';

@Entity()
export class Product {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
  title: string;
  
  @Column({ nullable: true })
  description: string;

	@Column()
  price: number;
  
  @Column({ default: 0 })
  recommendations: number;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
	
	@JoinTable()
	@ManyToMany(
		type => Characteristics, 
		characteristics => characteristics.products,
		{ 
			cascade: true, // ['insert']
		}
	)
	characteristics: Characteristics[]
}