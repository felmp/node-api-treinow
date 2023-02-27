import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateTablePersonalAulas1677288739157 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: 'personal_aulas',
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
                    }
                ]
            })
        )

        const personalForeignKey = new TableForeignKey({
            columnNames: ['personal_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'usuarios',
            onDelete: "CASCADE"
        })
        
        await queryRunner.createForeignKey('personal_aulas', personalForeignKey)
        
        const alunoForeignKey = new TableForeignKey({
            columnNames: ['aluno_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'usuarios',
            onDelete: "CASCADE"
        })
        
        await queryRunner.createForeignKey('personal_aulas', alunoForeignKey)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('personal_aulas')
        
    }

}

