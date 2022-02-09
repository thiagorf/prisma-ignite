import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import prisma from "../../client/connection";

interface ITokenSub {
	sub: string;
}

export async function ensureDeliveryManIsAuthenticated(request: Request, response: Response, next: NextFunction) {
	const authHeader = request.headers.authorization;

	if (!authHeader) {
		throw new Error("token is missing!");
	}

	const [, token] = authHeader.split(" ");

	try {

		const { sub: id } = verify(token, "secret") as ITokenSub;

		const user = await prisma.deliveryMan.findFirst({
			where: {
				id
			}
		})

		if (!user) {
			throw new Error("Invalid token");
		}

		request.user = {
			id: user.id
		}

		next()

	} catch (error) {
		throw new Error("Invalid token!");
	}
}