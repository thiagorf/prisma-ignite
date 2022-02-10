import prisma from "../../../../client/connection";



export class ClientViewDeliveryUseCase {
	async execute(id: string) {
		const clientDeliveries = await prisma.client.findFirst({
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