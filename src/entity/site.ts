import { Column, Entity, getRepository, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Site {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    address: string;

    @Column()
    postcode: string;

}