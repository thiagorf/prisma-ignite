import { Router } from "express";
import { ClientOrderDeliveryController } from "../../modules/deliveries/useCase/clientOrderDelivery/ClientOderDeliveryController";
import { ensureClientIsAuthenticated } from "../middleware/ensureClientIsAuthenticated";

const router = Router();

const clientOrderDeliveryController = new ClientOrderDeliveryController()

router.post("/", ensureClientIsAuthenticated, clientOrderDeliveryController.handle);

export { router as deliveryRoutes }