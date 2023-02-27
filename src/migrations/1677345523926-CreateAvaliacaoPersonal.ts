import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateAvaliacaoPersonal1677345523926 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'avaliacao_personal',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'aluno_id',
                        type: 'int',
                    },
                    {
                        name: 'personal_id',
                        type: 'int',
                    },
                    {
                        name: 'avaliacao',
                        type: 'int',
                    },
                ]
            })
        )
            const personalForeignKey = new TableForeignKey({
                columnNames: ['personal_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'usuarios',
                onDelete: "CASCADE"
            })
            
            await queryRunner.createForeignKey('avaliacao_personal', personalForeignKey)
            
            const alunoForeignKey = new TableForeignKey({
                columnNames: ['aluno_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'usuarios',
                onDelete: "CASCADE"
            })
            
            await queryRunner.createForeignKey('avaliacao_personal', alunoForeignKey)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('avaliacao_personal')
    }

}
