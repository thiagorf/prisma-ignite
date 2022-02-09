import { Router } from "express";
import { AuthenticateDeliveryManController } from "../../modules/accounts/deliveryman/useCase/authenticateDeliveryMan/AuthenticateDeliveryManController";
import { CreateDeliveryManController } from "../../modules/accounts/deliveryman/useCase/createDeliveryMan/CreateDeliveryManController";
import { DeliveryManTakesDeliveryController } from "../../modules/deliveries/useCase/deliveryManTakesDelivery/DeliveryManTakesDeliveryController";

const router = Router();

const createDeliveryManController = new CreateDeliveryManController();
const authenticateDeliveryManController = new AuthenticateDeliveryManController();
const deliveryManTakesDeliveryController = new DeliveryManTakesDeliveryController();
const deliveryManFinishsDeliveryController = new DeliveryManTakesDeliveryController();

router.post("/", createDeliveryManController.handle);
router.post("/authenticate", authenticateDeliveryManController.handle)
router.put("/deliveries/:id", deliveryManTakesDeliveryController.handle)
router.put("/deliveries/:id/finish", deliveryManFinishsDeliveryController.handle)

export { router as deliveryManRoutes }