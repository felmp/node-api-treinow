import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('avaliacao_personal')
export class AvaliacaoPersonal {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'int'})
    aluno_id: number;

    @Column({type: 'int'})
    personal_id: number;

    @Column({type: 'int'})
    avaliacao: number;

    @Column({type: 'text'})
    comentario: string;
}