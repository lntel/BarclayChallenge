import { Column, Entity, getRepository, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Payment {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    emailAddress: string;

    @Column()
    locale: string;
    
    @Column()
    transaction_type: string;
    
    @Column()
    reference_number: number;
    
    @Column()
    amount: number;

    @Column()
    currency: string;
    
    @Column()
    signed_date_time: Date;    
    
    @Column()
    access_key: string;

    @ManyToOne(() => User, user => user.payments)
    users: User;

}