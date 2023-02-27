import { AppDataSource } from "../data-source";
import { AvaliacaoPersonal } from "../entity/AvaliacaoPersonal";

export const avaliacaoPersonalRepository = AppDataSource.getRepository(AvaliacaoPersonal)