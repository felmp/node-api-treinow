import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { usuarioRepository } from "../repositories/usuarioRepository";
import { Usuario } from "../entity/Usuario";
import { NotFoundError } from "../helpers/api-erros";

export class AuthController {
    async auth(req: Request, res: Response){
        const { email, senha } = req.body;

        const usuario = await usuarioRepository.findOneBy({ email }) as Usuario

        if(!usuario) {
            throw new NotFoundError('Email ou senha inválidos')

        }

        const verificarSenha = await bcrypt.compare(senha, usuario.senha)

        if(!verificarSenha) {
            throw new NotFoundError('Email ou senha inválidos')

        }

        const token = jwt.sign(
            {
                id: usuario.id,
                tipo_usuario: usuario.tipo 
            },
            process.env.JWT_PASS ?? '',
            {
                expiresIn: '4h'
            }
        )

        const { senha:_, ...userLogin } = usuario
        
        return res.json({
            user: userLogin,
            token: token
        })
    }
}