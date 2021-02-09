import { Column, Entity, getRepository, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Hairdresser } from "./hairdresser";

@Entity()
export class Site {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    address: string;

    @Column()
    postcode: string;

    @Column()
    city: string;

    @Column()
    landline: string;

    @OneToMany(() => Hairdresser, hairdresser => hairdresser.site)
    hairdressers: Hairdresser[];

    public static async exists(id: string) {
        const repo = getRepository(Site);

        return await repo.findOne(id);
    }

}