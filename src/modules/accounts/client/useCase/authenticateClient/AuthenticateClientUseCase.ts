import { compare } from "bcrypt";
import jwt from "jsonwebtoken"
import prisma from "../../../../../client/connection";
import { IUserDTO } from "../../DTO/IUserDTO";


export class AuthenticateClientUseCase {

	async execute(data: IUserDTO) {

		const { username, password } = data;

		const userExists = await prisma.client.findFirst({
			where: {
				username: username
			}
		});

		if (!userExists) {
			throw new Error("User don't exists")
		}

		const passwordMatch = compare(password, userExists.password);

		if (!passwordMatch) {
			throw new Error("Username or password incorrect!");
		}


		const token = jwt.sign({ username }, "secret", {
			expiresIn: "15m"
		});

		return {
			username,
			token
		}

	}
}