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

    @Column({ type: 'decimal' })
    price: number;

}