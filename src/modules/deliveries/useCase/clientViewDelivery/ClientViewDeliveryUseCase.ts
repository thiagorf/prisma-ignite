import prisma from "../../../../client/connection";



export class ClientViewDeliveryUseCase {
	async execute(id: string) {
		const clientDeliveries = await prisma.client.findMany({
			where: {
				id
			},
			include: {
				Deliveries: true
			}
		});

		return clientDeliveries;
	}
}