import { Request, Response } from "express";
import { DeliveryManTakesDeliveryUseCase } from "./DeliveryManTakesDeliveryUseCase";



export class DeliveryManTakesDeliveryController {
	async handle(request: Request, response: Response) {
		const { id } = request.user

		const { id_delivery } = request.params;

		const deliveryManTakesDeliveryUseCase = new DeliveryManTakesDeliveryUseCase();

		const delivery = await deliveryManTakesDeliveryUseCase.execute({ id_deliveryman: id, id_delivery });

		return response.json(delivery);

	}
}