import { Request, Response } from "express";
import { ClientOrderDeliveryUseCase } from "./ClientOrderDeliveryUseCase";



export class ClientOrderDeliveryController {
	async handle(request: Request, response: Response) {
		const { item_name } = request.body

		const { id } = request.user;

		const clientOrderDeliveryUseCase = new ClientOrderDeliveryUseCase();

		const clientDelivery = await clientOrderDeliveryUseCase.execute({ item_name, id_client: id });

		return response.json(clientDelivery);
	}
}