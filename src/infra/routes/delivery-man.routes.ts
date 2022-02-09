import { Router } from "express";
import { AuthenticateDeliveryManController } from "../../modules/accounts/deliveryman/useCase/authenticateDeliveryMan/AuthenticateDeliveryManController";
import { CreateDeliveryManController } from "../../modules/accounts/deliveryman/useCase/createDeliveryMan/CreateDeliveryManController";
import { DeliveryManTakesDeliveryController } from "../../modules/deliveries/useCase/deliveryManTakesDelivery/DeliveryManTakesDeliveryController";
import { DeliveryManViewDeliveryController } from "../../modules/deliveries/useCase/deliveryManViewDelivery/deliveryManViewDeliveryController";
import { ensureDeliveryManIsAuthenticated } from "../middleware/ensureDeliveryManIsAuthenticated";

const router = Router();

const createDeliveryManController = new CreateDeliveryManController();
const authenticateDeliveryManController = new AuthenticateDeliveryManController();
const deliveryManTakesDeliveryController = new DeliveryManTakesDeliveryController();
const deliveryManFinishsDeliveryController = new DeliveryManTakesDeliveryController();
const deliveryManViewDeliveryController = new DeliveryManViewDeliveryController();

router.post("/", createDeliveryManController.handle);
router.post("/authenticate", authenticateDeliveryManController.handle);
router.put("/deliveries/:id", ensureDeliveryManIsAuthenticated, deliveryManTakesDeliveryController.handle);
router.put("/deliveries/:id/finish", ensureDeliveryManIsAuthenticated, deliveryManFinishsDeliveryController.handle);
router.get("/deliveries", ensureDeliveryManIsAuthenticated, deliveryManViewDeliveryController.handle);

export { router as deliveryManRoutes }