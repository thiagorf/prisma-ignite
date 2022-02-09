import prisma from "../../../../client/connection";

interface IFinishDelivery {
	id_delivery: string;
}

export class DeliveryManFinishsDeliveryUseCase {
	async execute({ id_delivery }: IFinishDelivery) {
		const delivery = await prisma.deliveries.findFirst({
			where: {
				id: id_delivery
			}
		});

		if (!delivery) {
			throw new Error("Delivery not found!");
		}

		const finishDelivery = await prisma.deliveries.update({
			where: {
				id: id_delivery
			},
			data: {
				end_at: new Date()
			}
		});

		return finishDelivery;
	}
} 