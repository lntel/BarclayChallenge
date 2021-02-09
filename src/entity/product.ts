import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Product {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    imageUrl: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ default: 0 })
    quantity: number;

    @Column({ type: 'decimal' })
    price: number;

}