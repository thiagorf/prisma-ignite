import { Request, Response } from "express";
import { CreateClientAccountUseCase } from "./CreateClientAccountUseCase";



export class CreateClientController {
	async handle(request: Request, response: Response) {
		const { username, password } = request.body;

		const createClientAccountUseCase = new CreateClientAccountUseCase();

		const clientAccount = await createClientAccountUseCase.execute({ username, password });

		return response.status(201).json(clientAccount);
	}
}

