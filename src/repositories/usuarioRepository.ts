import { AppDataSource } from "../data-source";
import { Usuario } from "../entity/Usuario";

export const usuarioRepository = AppDataSource.getRepository(Usuario)