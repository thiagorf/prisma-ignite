import { Router } from "express";
import { AuthenticaClientController } from "../../modules/accounts/client/useCase/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "../../modules/accounts/client/useCase/createClientAccount/CreateClientController";
import { ClientViewDeliveryController } from "../../modules/deliveries/useCase/clientViewDelivery/ClientViewDeliveryController";
import { ensureClientIsAuthenticated } from "../middleware/ensureClientIsAuthenticated";

const router = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticaClientController();
const clientViewDeliveryController = new ClientViewDeliveryController();

router.post("/", createClientController.handle);
router.post("/authenticate", authenticateClientController.handle);
router.get("/deliveries", ensureClientIsAuthenticated, clientViewDeliveryController.handle)


export { router as clientRoutes }