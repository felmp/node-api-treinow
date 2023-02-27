import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RegistroTreino } from "./RegistroTreino";
import { Usuario } from "./Usuario";

@Entity('treinos')
export class Treino {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text'})
    nome: string;

    @Column({type: 'text'})
    duracao: string;

    @Column({type: 'datetime'})
    data_cadastro: Date;

    @ManyToOne(() => Usuario, (usuario) => usuario.id)
    personal_id: number;

    @OneToMany(() => RegistroTreino, (registro_treinos) => registro_treinos.treino_id)
    registro_treinos: RegistroTreino[];

}