//dependencies 
import { beforeEach, describe } from '@jest/globals'; 

// repositories
import { InMemoryUserRepository } from "../../repository/in-memory/InMemoryUserRepository";

// use-cases
import { CreateUserUseCase } from "../CreateUserUseCase";

let usersRepository: InMemoryUserRepository;
let createUserUseCase: CreateUserUseCase;

describe('Create User Use Case', () => {
    beforeEach(() => {
        usersRepository = new InMemoryUserRepository();
        createUserUseCase = new CreateUserUseCase(usersRepository);
    });

    it('should be able to create a user', async () => {

       const { user } = await createUserUseCase.execute({
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@doe.com',
        role: 'user',
        password: '123'
       });
       expect(user.id).toEqual(expect.any(String));
    });
});