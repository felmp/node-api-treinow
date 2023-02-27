import { Router } from "express";
import { AlunoController } from "./controllers/AlunoController";
import { AuthController } from "./controllers/AuthController";
import { PersonalController } from "./controllers/PersonalController";
import { UsuarioController } from "./controllers/UsuarioController";
import { authHelper } from "./helpers/authHelper";

const routes = Router();

routes.post('/account/create', new UsuarioController().create)
routes.get('/auth', new AuthController().auth)
routes.post('/store/workout', authHelper, new AlunoController().createWorkout)
routes.delete('/account/delete', authHelper, new UsuarioController().delete)
routes.post('/personal/workout', authHelper, new PersonalController().createTraining)
routes.get('/personal/workout', authHelper, new PersonalController().listTraining)
routes.post('/personal/student', authHelper, new PersonalController().registerStudent)
routes.post('/personal/:personal_id/rating', authHelper, new AlunoController().ratingPersonal)


export default routes;