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
    forename: string;

    @Column()
    surname: string;

    @Column()
    password: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    joinDate: string;

    @Column({ default: false })
    admin: boolean;

    public static async exists(key: string, value: string): Promise<User | undefined> {
        const userRepo = getRepository(User);

        return await userRepo.findOne({
            where: {
                [key]: value.toLowerCase()
            }
        });
    }

}