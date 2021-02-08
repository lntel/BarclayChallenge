import { Column, Entity, getRepository, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    emailAddress: string;

    @Column({ unique: true })
    mobileNumber: string;

    @Column()
    password: string;

    @Column({ default: false })
    admin: boolean;

    public static async exists(emailAddress: string): Promise<User | undefined> {
        const userRepo = getRepository(User);

        return await userRepo.findOne({
            where: {
                emailAddress: emailAddress.toLowerCase()
            }
        });
    }

}