import { Request, Response } from "express";
import { ClientViewDeliveryUseCase } from "./ClientViewDeliveryUseCase";



export class ClientViewDeliveryController {
	async handle(request: Request, response: Response) {
		const { id } = request.user;

		const clientViewDeliveryUseCase = new ClientViewDeliveryUseCase();

		const clientDeliveries = await clientViewDeliveryUseCase.execute(id);

		return response.json(clientDeliveries);
	}
}