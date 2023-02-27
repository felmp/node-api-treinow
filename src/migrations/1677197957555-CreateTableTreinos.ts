import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateTableTreinos1677197957555 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: 'registro_treinos',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'data_hora_inicio',
                        type: 'string',
                    },
                    {
                        name: 'usuario_id',
                        type: 'int',
                    },
                    {
                        name: 'treino_id',
                        type: 'int',
                    }
                ]
            })
        )

        await queryRunner.createTable(
            new Table ({
                name: 'treinos',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'nome',
                        type: 'string',
                    },
                    {
                        name: 'duracao',
                        type: 'string',
                    },
                    {
                        name: 'data_cadastro',
                        type: 'date',
                    },
                    {
                        name: 'personal_id',
                        type: 'int',
                    }
                ]
            })
        )

        const usuarioForeignKey = new TableForeignKey({
            columnNames: ['usuario_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'usuarios',
            onDelete: "CASCADE"
        })

        await queryRunner.createForeignKey('registro_treinos', usuarioForeignKey)

        const treinoForeignKey = new TableForeignKey({
            columnNames: ['treino_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'treinos',
            onDelete: "CASCADE"
        })

        await queryRunner.createForeignKey('registro_treinos', treinoForeignKey)

        const personalForeignKey = new TableForeignKey({
            columnNames: ['personal_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'usuarios',
            onDelete: "CASCADE"
        })

        await queryRunner.createForeignKey('treinos', personalForeignKey)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('treinos')
        await queryRunner.dropTable('registro_treinos')

    }

}
