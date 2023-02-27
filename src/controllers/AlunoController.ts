import { Request, Response } from "express";
import { Usuario } from "../entity/Usuario";
import { BadRequestError, NotFoundError } from "../helpers/api-erros";
import { avaliacaoPersonalRepository } from "../repositories/avaliacaoPersonalRepository";
import { personalAulasRepository } from "../repositories/personalAulasRepository";
import { registroTreinosRepository } from "../repositories/registroTreinosRepository";
import { treinoRepository } from "../repositories/treinoRepository";
import { usuarioRepository } from "../repositories/usuarioRepository";

export class AlunoController {
    async createWorkout(req: Request, res: Response){
        if(req.usuario.tipo != 1) {
            throw new NotFoundError('Seu usuário não possue permissão para registrar um treino.');
        }

        
        if(!req.body) {
            throw new BadRequestError("Informe um treino para registrar.");
            
        }

        const { treino_id, data_hora_inicio } = req.body;


        const verificaTreino = await treinoRepository.findOne({
            where: {
                id: treino_id
            }
        })

        if(!verificaTreino){
           throw new BadRequestError("Treino informado não existente.");
            
        }

        const novoRegistroTreino = await registroTreinosRepository.create({
            data_hora_inicio,
            treino_id,
            usuario_id: req.usuario.id
        })

        registroTreinosRepository.save(novoRegistroTreino)

        return res.status(200).json({
            "usuario": req.usuario.nome,
            "treino": req.usuario.treinos?.filter(t => t.id == treino_id).map(treino => treino.nome),
            "data_hora_inicio": data_hora_inicio
        })
    }

    async ratingPersonal(req: Request, res: Response) {
        const { personal_id } = req.params
        const { avaliacao } = req.body

        if(req.usuario.tipo != 1) {
            throw new NotFoundError("Seu usuário não possue permissão para avaliar um personal.");
        }

        const verificaAula = await personalAulasRepository.findOne({
            where:{
                personal_id: Number(personal_id),
                aluno_id: req.usuario.id
            }
        })

        if(verificaAula == null) {
            throw new NotFoundError("Você não pode avaliar este personal.");

        }
        
        const novaAvaliacao = avaliacaoPersonalRepository.create({
            aluno_id: req.usuario.id,
            personal_id: Number(personal_id),
            avaliacao,
        })

        const personal = await usuarioRepository.findOne({
            where: {
                id: Number(personal_id)
            }
        })
 
        avaliacaoPersonalRepository.save(novaAvaliacao)
        
        return res.status(200).json({
            aluno: req.usuario.nome,
            personal: personal?.nome,
            avaliacao,
        })
    }

}