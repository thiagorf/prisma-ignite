import { Request, Response } from "express";
import { DeliveryManViewDeliveryUseCase } from "./deliveryManViewDeliveryUseCase";



export class DeliveryManViewDeliveryController {
	async handle(request: Request, response: Response) {
		const { id } = request.user;

		const deliveryManViewDeliveryUseCase = new DeliveryManViewDeliveryUseCase();

		const deliveryManDeliveries = await deliveryManViewDeliveryUseCase.execute(id);

		return response.json(deliveryManDeliveries);
	}
}