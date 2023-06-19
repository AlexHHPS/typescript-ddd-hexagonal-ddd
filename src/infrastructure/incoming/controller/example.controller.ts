import { randomUUID } from 'crypto';

import { Request, Response } from 'express';

import { CreateUser } from '../../../application/domain1/ExampleUseCase.js';
import { CreateUserUseCaseOutput } from '../../../application/domain1/ExampleUseCase.output.js';
import { User } from '../../../domain/domain1/user.entity.js';
import { LocalDBUserRepository } from '../../outgoing/database/localDBUserRepository.adapter.js';

const useCaseExample: CreateUser = new CreateUser(new LocalDBUserRepository());

export class ControllerExample {
	public createUser = async (req: Request, res: Response): Promise<void> => {
		try {
			const result: CreateUserUseCaseOutput = await useCaseExample.execute({
				user: new User(randomUUID(), req.body.id, new Date(), new Date()),
			});
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
			res.status(200).json(result);
		} catch (error) {
			// log error
			console.error(error as Error);
		}
	};
}
