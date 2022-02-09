import prisma from "../../../../client/connection";

interface IClientDelivery {
	item_name: string;
	id_client: string
}


export class ClientOrderDeliveryUseCase {
	async execute({ item_name, id_client }: IClientDelivery) {
		const client = await prisma.client.findFirst({
			where: {
				id: id_client
			}
		});

		if (!client) {
			throw new Error("Invalid user!")
		}

		const delivery = await prisma.deliveries.create({
			data: {
				item_name,
				id_client,
				created_at: new Date()
			}
		});

		return delivery;
	}
}