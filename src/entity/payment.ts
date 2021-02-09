import { Column, Entity, getRepository, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Payment {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    locale: string;
    
    @Column()
    transaction_type: string;
    
    @Column()
    reference_number: string;
    
    @Column({ type: 'decimal' })
    amount: number;

    @Column()
    currency: string;
    
    @Column()
    signed_date_time: Date;    

    @ManyToOne(() => User, user => user.payments)
    user: User;

}