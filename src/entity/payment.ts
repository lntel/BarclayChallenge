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
    $currency = $_POST['currency'];
    @Column()
    $signed_date_time = $_POST['signed_date_time'];    
    $access_key = $_POST['access_key'];
    $profile_id = $_POST['profile_id'];
    $signed_field_names = $_POST['signed_field_names'];
    $unsigned_field_names = $_POST['unsigned_field_names'];
    $bill_to_address_city = $_POST['bill_to_address_city'];
    $bill_to_address_country = $_POST['bill_to_address_country'];
    $bill_to_address_line1 = $_POST['bill_to_address_line1'];
    $bill_to_address_postal_code = $_POST['bill_to_address_postal_code'];
    $bill_to_email = $_POST['bill_to_email'];
    $bill_to_forename = $_POST['bill_to_forename'];
    $bill_to_surname = $_POST['bill_to_surname'];









}