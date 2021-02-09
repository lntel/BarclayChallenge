import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Appointment {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    date: string;

    @Column()
    time: string;

    @ManyToOne(() => User, user => user.appointments)
    user: User;

}