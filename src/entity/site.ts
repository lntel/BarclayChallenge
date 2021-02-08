import { Column, Entity, getRepository, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Site {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    emailAddress: string;

    @Column()
    password: string;

    public static async exists(emailAddress: string): Promise<Site | undefined> {
        const userRepo = getRepository(Site);

        return await userRepo.findOne({
            where: {
                emailAddress: emailAddress.toLowerCase()
            }
        });
    }

}