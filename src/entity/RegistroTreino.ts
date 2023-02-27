import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Treino } from "./Treino";
import { Usuario } from "./Usuario";

@Entity('registro_treinos')
export class RegistroTreino {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text'})
    data_hora_inicio: string

    @ManyToOne(() => Usuario, (usuario) => usuario.registro_treinos)
    usuario_id: number;

    @ManyToOne(() => Treino, (treino) => treino.registro_treinos)
    treino_id: number;
}