import { Router } from "express";
import { ClientOrderDeliveryController } from "../../modules/deliveries/useCase/clientOrderDelivery/ClientOderDeliveryController";

const router = Router();

const clientOrderDeliveryController = new ClientOrderDeliveryController()

router.post("/", clientOrderDeliveryController.handle);

export { router as deliveryRoutes }