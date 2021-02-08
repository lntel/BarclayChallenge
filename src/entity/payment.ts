import { Column, Entity, getRepository, PrimaryGeneratedColumn } from "typeorm";

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
    access_key: string ;
    
    @Column()
    profile_id: string;
    
    @Column()
    signed_field_names: string;
    
    @Column()
    unsigned_field_names: string;
    
    @Column()
    bill_to_address_city: string;
    
    @Column()
    bill_to_address_country: string;
    
    @Column()
    bill_to_address_line1: string;
    
    @Column()
    bill_to_address_postal_code: string;
    
    @Column()
    bill_to_email: string;
    
    @Column()
    bill_to_forename: string;
    
    @Column()
    bill_to_surname: string;

}