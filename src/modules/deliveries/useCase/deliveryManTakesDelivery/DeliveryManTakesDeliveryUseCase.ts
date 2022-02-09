import prisma from "../../../../client/connection";

interface IDeliveryRequest {
	id_deliveryman: string;
	id_delivery: string;
}

export class DeliveryManTakesDeliveryUseCase {
	async execute({ id_deliveryman, id_delivery }: IDeliveryRequest) {
		const deliveryMan = await prisma.deliveryMan.findFirst({
			where: {
				id: id_deliveryman
			}
		});

		if (!deliveryMan) {
			throw new Error("Invalid deliveryman!")
		}

		const delivery = await prisma.deliveries.update({
			where: {
				id: id_delivery
			},
			data: {
				id_deliveryman
			}
		});

		return delivery;
	}
}