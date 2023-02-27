import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuario";

@Entity('personal_aulas')
export class PersonalAulas {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'int'})
    aluno_id: number;

    @Column({type: 'int'})
    personal_id: number;
}