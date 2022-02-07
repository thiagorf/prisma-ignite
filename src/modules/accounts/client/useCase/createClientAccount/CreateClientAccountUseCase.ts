import prisma from "../../../../../client/connection";
import { IUserDTO } from "../../DTO/IUserDTO";
import { hash } from "bcrypt";


export class CreateClientAccountUseCase {

	async execute(data: IUserDTO) {

		const { username, password } = data;

		const userExists = await prisma.client.findFirst({
			where: {
				username: username
			}
		});

		if (userExists) {
			throw new Error("User already exists")
		}

		const hashPassword = await hash(password, 8)

		const user = await prisma.client.create({
			data: {
				username,
				password: hashPassword
			}
		});

		return user;

	}
}

