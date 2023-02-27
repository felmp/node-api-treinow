import { Request, Response } from "express";
import { usuarioRepository } from "../repositories/usuarioRepository";
import bcrypt from 'bcrypt';
import { NotFoundError } from "../helpers/api-erros";

export class UsuarioController {
    async create(req: Request, res: Response){
        const { nome, email, documento, tipo, senha } = req.body;

        const emailExistente = await usuarioRepository.findOneBy({email})

        if(emailExistente) {
            throw new NotFoundError('Email já cadastrado.')
        }

        const documentoExistente = await usuarioRepository.findOneBy({documento})

        if(documentoExistente) {
            throw new NotFoundError("Documento já cadastrado.");
            
        }

        const senhaCryptografada = await bcrypt.hash(senha, 10)

        const novoUsuario = usuarioRepository.create({
            nome,
            email,
            senha: senhaCryptografada,
            documento,
            tipo
        })

        await usuarioRepository.save(novoUsuario)
        
        const { senha:_, ...usuario } = novoUsuario

        return res.status(201).json(usuario)
    }

    async delete(req: Request, res: Response) {
        await usuarioRepository.delete(req.usuario)

        return res.status(201).json('Usuário deletado com sucesso.')
    }
}