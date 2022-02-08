import { Router } from "express";
import { clientRoutes } from "./client.routes";
import { deliveryManRoutes } from "./delivery-man.routes";


const router = Router();

router.use("/clients", clientRoutes)
router.use("/delivery-man", deliveryManRoutes);

export { router }