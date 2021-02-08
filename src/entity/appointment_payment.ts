import { Column, Entity, getRepository, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Appointment_Payments {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    emailAddress: string;

    @Column()
    password: string;

    public static async exists(emailAddress: string): Promise<Appointment_Payments | undefined> {
        const userRepo = getRepository(Appointment_Payments);

        return await userRepo.findOne({
            where: {
                emailAddress: emailAddress.toLowerCase()
            }
        });
    }

}