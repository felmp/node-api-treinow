import 'reflect-metadata'
import 'dotenv/config'
import { DataSource } from "typeorm"

import { Usuario } from './entity/Usuario'
import { CreateTableUsuarios1677039388765 } from './migrations/1677039388765-CreateTableUsuarios'

import { RegistroTreino } from './entity/RegistroTreino'
import { Treino } from './entity/Treino'
import { CreateTableTreinos1677197957555 } from './migrations/1677197957555-CreateTableTreinos'

import { PersonalAulas } from './entity/PersonalAulas'
import { CreateTablePersonalAulas1677288739157 } from './migrations/1677288739157-CreateTablePersonalAulas'
import { CreateAvaliacaoPersonal1677345523926 } from './migrations/1677345523926-CreateAvaliacaoPersonal'
import { AvaliacaoPersonal } from './entity/AvaliacaoPersonal'

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: 'db.sqlite',
    synchronize: true,
    logging: false,
    entities: [
        Usuario, 
        RegistroTreino, 
        Treino,
        PersonalAulas,
        AvaliacaoPersonal
    ],
    migrations: [
        CreateTableUsuarios1677039388765,
        CreateTableTreinos1677197957555,
        CreateTablePersonalAulas1677288739157,
        CreateAvaliacaoPersonal1677345523926
    ],
    subscribers: [],
})
