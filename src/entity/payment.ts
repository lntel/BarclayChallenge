import { Column, Entity, getRepository, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Payment {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    emailAddress: string;

    @Column()
    password: string;

    public static async exists(emailAddress: string): Promise<Payment | undefined> {
        const userRepo = getRepository(Payment);

        return await userRepo.findOne({
            where: {
                emailAddress: emailAddress.toLowerCase()
            }
        });
    }

}