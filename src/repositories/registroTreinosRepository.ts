import { AppDataSource } from "../data-source";
import { RegistroTreino } from "../entity/RegistroTreino";

export const registroTreinosRepository = AppDataSource.getRepository(RegistroTreino)