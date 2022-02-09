import { Router } from "express";
import { clientRoutes } from "./client.routes";
import { deliveryManRoutes } from "./delivery-man.routes";
import { deliveryRoutes } from "./delivery.routes";


const router = Router();

router.use("/clients", clientRoutes)
router.use("/delivery-man", deliveryManRoutes);
router.use("/deliveries", deliveryRoutes)

export { router }