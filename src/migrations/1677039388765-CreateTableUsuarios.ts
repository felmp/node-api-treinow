import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableUsuarios1677039388765 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: 'usuarios',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                        length: '100',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        length: '100',
                        isUnique: true
                    },
                    {
                        name: 'documento',
                        type: 'varchar',
                        length: '30',
                        isUnique: true
                    },
                    {
                        name: 'tipo',
                        type: 'int',
                        length: '1',
                    },
                    {
                        name: 'senha',
                        type: 'varchar',
                        length: '30',
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios')
    }

}
