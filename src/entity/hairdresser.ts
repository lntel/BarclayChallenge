import { Column, Entity, getRepository, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Hairdresser {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    forename: string;

    @Column()
    surname: string;

    public fullname() {
        return `${this.forename} ${this.surname}`;
    }

}