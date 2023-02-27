import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { usuarioRepository } from "../repositories/usuarioRepository";
import { UnauthorizedError } from "./api-erros";

export const authHelper = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers

        if (!authorization) {
            throw new UnauthorizedError('Endpoint requer autorização')
        }

        const token = authorization?.split(' ')[1] as string

        const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayload

        const usuario = await usuarioRepository.findOneBy({id})
    
        if (!usuario) {
            throw new UnauthorizedError('Endpoint requer autorização')
        }

        const { senha: _, ...rest } = usuario

        req.usuario = rest

        next()
}