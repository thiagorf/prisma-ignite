import { Router } from "express";
import { AuthenticateDeliveryManController } from "../../modules/accounts/deliveryman/useCase/authenticateDeliveryMan/AuthenticateDeliveryManController";
import { CreateDeliveryManController } from "../../modules/accounts/deliveryman/useCase/createDeliveryMan/CreateDeliveryManController";

const router = Router();

const createDeliveryManController = new CreateDeliveryManController()
const authenticateDeliveryManController = new AuthenticateDeliveryManController()

router.post("/", createDeliveryManController.handle);
router.post("/authenticate", authenticateDeliveryManController.handle)

export { router as deliveryManRoutes }