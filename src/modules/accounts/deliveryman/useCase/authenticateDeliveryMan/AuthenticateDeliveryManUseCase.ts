import { compare } from "bcrypt";
import prisma from "../../../../../client/connection";
import { IDeliveryManDTO } from "../../DTO/IDeliveryManDTO";
import jwt from 'jsonwebtoken';



export class AuthenticateDeliveryManUseCase {
	async execute(data: IDeliveryManDTO) {
		const { username, password } = data;

		const deliveryMan = await prisma.deliveryMan.findFirst({
			where: {
				username: username
			}
		})

		if (!deliveryMan) {
			throw new Error("Username or password incorrects!")
		}

		const comparePassword = compare(password, deliveryMan.password);

		if (!comparePassword) {
			throw new Error("User or password incorrects!")
		}

		const token = jwt.sign({}, "secret", {
			expiresIn: "15m",
			subject: deliveryMan.id
		});

		return token;

	}
} 