import { Column, Entity, getRepository, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Site } from "./site";

@Entity()
export class Hairdresser {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    forename: string;

    @Column()
    surname: string;

    @Column()
    description: string;

    @ManyToOne(() => Site, site => site.hairdressers)
    site: Site;

    public fullname() {
        return `${this.forename} ${this.surname}`;
    }

}