import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PersonalAulas } from "./PersonalAulas";
import { RegistroTreino } from "./RegistroTreino";
import { Treino } from "./Treino";

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text'})
    nome: string;

    @Column({type: 'text', unique: true})
    email: string;

    @Column({type: 'text', unique: true})
    documento: string;

    /* TIPO PersonalTrainer - 0 | Aluno - 1 */
    @Column({type: 'int'})
    tipo: number; 

    @Column({type: 'text'})
    senha: string;

    @OneToMany(() => RegistroTreino, (registroTreinos) => registroTreinos.usuario_id)
    registro_treinos: RegistroTreino[]

    @OneToMany(() => Treino, (treino) => treino.personal_id)
    treinos: Treino[]

}