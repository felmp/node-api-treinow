import { AppDataSource } from "../data-source";
import { Treino } from "../entity/Treino";

export const treinoRepository = AppDataSource.getRepository(Treino)