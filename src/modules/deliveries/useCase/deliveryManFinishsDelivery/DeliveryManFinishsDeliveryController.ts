import { Request, Response } from "express";
import { DeliveryManFinishsDeliveryUseCase } from "./DeliveryManFinishsDeliveryUseCase";



export class DeliveryManFinishsDeliveryController {
	async handle(request: Request, response: Response) {

		const { id } = request.params;

		const deliveryManFinishsDeliveryUseCase = new DeliveryManFinishsDeliveryUseCase();

		const finishDelivery = await deliveryManFinishsDeliveryUseCase.execute({ id_delivery: id });

		return response.json(finishDelivery);
	}
}