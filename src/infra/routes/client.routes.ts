import { Router } from "express";
import { AuthenticaClientController } from "../../modules/accounts/client/useCase/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "../../modules/accounts/client/useCase/createClientAccount/CreateClientController";

const router = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticaClientController();

router.post("/", createClientController.handle);
router.post("/authenticate", authenticateClientController.handle)


export { router as clientRoutes }