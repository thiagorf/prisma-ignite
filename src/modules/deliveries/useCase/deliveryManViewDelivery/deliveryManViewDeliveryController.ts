import { Request, Response } from "express";



export class DeliveryManViewDeliveryController {
	async handle(request: Request, response: Response) {
		const { id } = request.user;
	}
}