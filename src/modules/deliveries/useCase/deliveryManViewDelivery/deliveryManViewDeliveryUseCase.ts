import prisma from "../../../../client/connection";



export class DeliveryManViewDeliveryUseCase {
	async execute(id: string) {
		const deliveryManDeliveries = await prisma.deliveryMan.findFirst({
			where: {
				id
			},
			include: {
				Deliveries: true
			}
		});

		return deliveryManDeliveries;
	}
}