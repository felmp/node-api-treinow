import { AppDataSource } from "../data-source";
import { PersonalAulas } from "../entity/PersonalAulas";

export const personalAulasRepository = AppDataSource.getRepository(PersonalAulas)