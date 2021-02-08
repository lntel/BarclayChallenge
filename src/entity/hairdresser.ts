import { Column, Entity, getRepository, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Hairdresser {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    emailAddress: string;

    @Column()
    password: string;

    public static async exists(emailAddress: string): Promise<Hairdresser | undefined> {
        const userRepo = getRepository(Hairdresser);

        return await userRepo.findOne({
            where: {
                emailAddress: emailAddress.toLowerCase()
            }
        });
    }

}