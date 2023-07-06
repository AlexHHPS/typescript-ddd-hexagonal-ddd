/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { randomUUID } from 'crypto';

import { Request, Response } from 'express';

import { CreateUserUseCase } from '../../../application/domain1/createUser/createUserUseCase.js';
import { CreateUserUseCaseOutput } from '../../../application/domain1/createUser/createUserUseCase.output.js';
import { ExampleError } from '../../../domain/domain1/example.error.js';
import { User } from '../../../domain/domain1/user.entity.js';
import { LocalDBUserRepository } from '../../outgoing/database/localDBUserRepository.adapter.js';

const useCaseExample: CreateUserUseCase = new CreateUserUseCase(new LocalDBUserRepository());

export class ExampleController {
	public createUser = async (req: Request, res: Response): Promise<void> => {
		try {
			const result: CreateUserUseCaseOutput = await useCaseExample.execute({
				user: new User(randomUUID(), req.body.id, new Date(), new Date()),
			});
			res.status(200).json(result);
		} catch (error) {
			console.error(error as Error);
			throw new ExampleError();
		}
	};

	public findUser = async (req: Request, res: Response): Promise<void> => {
		try {
			const result: User = await new LocalDBUserRepository().findByCriteria(req.body.id);
			res.status(200).json(result);
		} catch (error) {
			console.error(error as Error);
			throw new ExampleError();
		}
	};
}
