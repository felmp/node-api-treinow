import { Request, Response } from "express";
import { NotFoundError } from "../helpers/api-erros";
import { personalAulasRepository } from "../repositories/personalAulasRepository";
import { treinoRepository } from "../repositories/treinoRepository";
import { usuarioRepository } from "../repositories/usuarioRepository";

export class PersonalController {
    async createTraining(req: Request, res: Response){
        if(req.usuario.tipo != 0) {
            throw new NotFoundError('Seu usuário não possue permissão para criar um treino.');
        }

        const { nome, duracao } = req.body

        const novoTreino = await treinoRepository.create({
            nome,
            duracao,
            personal_id: req.usuario.id,
            data_cadastro: Date.now()
        }) 

        treinoRepository.save(novoTreino)

        return res.status(200).json({
            "personal": req.usuario.nome,
            "treino": novoTreino.nome,
            "duracao": novoTreino.duracao
        })
    }

    async listTraining(req: Request, res: Response){
        const listaTreinos = await treinoRepository.find({
            where: {
                personal_id: req.usuario.id
            }
        })

        return res.status(200).json(listaTreinos)
    }

    async registerStudent(req: Request, res: Response) {
        const { aluno_id } = req.body

        const verificaUsuario = await usuarioRepository.findOne({
            where: {
                id: aluno_id
            }
        })

        if(verificaUsuario == null || verificaUsuario?.tipo != 1) {
            throw new NotFoundError('Este usuário não é do tipo aluno ou não está cadastrado no sistema.');
        }
        
        const registrarAluno = await personalAulasRepository.create({
            aluno_id: verificaUsuario.id,
            personal_id: req.usuario.id
        })

        const verificaDuplicidade = await personalAulasRepository.findOne({
            where: {
                aluno_id: verificaUsuario.id,
                personal_id: req.usuario.id
            }
        })

        console.log(verificaDuplicidade);
        

        if(verificaDuplicidade != null) {
            throw new NotFoundError("Aula já cadastrada.")
        }

        personalAulasRepository.save(registrarAluno)

        res.status(200).json(
            {
                personal: req.usuario.nome,
                aluno: verificaUsuario.nome
            }
        )
    }
}