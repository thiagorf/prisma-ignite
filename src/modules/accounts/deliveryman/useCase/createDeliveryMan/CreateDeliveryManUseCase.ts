import { hash } from "bcrypt";
import prisma from "../../../../../client/connection";
import { IDeliveryManDTO } from "../../DTO/IDeliveryManDTO";



export class CreateDeliveryManUseCase {
	async execute(data: IDeliveryManDTO) {
		const { username, password } = data;

		const deliveryManExist = await prisma.deliveryMan.findFirst({
			where: {
				username: username
			}
		})

		if (deliveryManExist) {
			throw new Error("User already exists!")
		}

		const hashPassword = await hash(password, 8)

		const deliveryMan = await prisma.deliveryMan.create({
			data: {
				username,
				password: hashPassword
			}
		});

		return deliveryMan;
	}
}