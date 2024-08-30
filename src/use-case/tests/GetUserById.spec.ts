//dependencies 
import { beforeEach, describe } from '@jest/globals'; 

// repositories
import { InMemoryUserRepository } from "../../repository/in-memory/InMemoryUserRepository";

// use-cases
import { GetUserByIdUseCase } from "../GetUserByIdUseCase";

let usersRepository: InMemoryUserRepository;
let getUserByIdUseCase: GetUserByIdUseCase;

describe('Get User by Id Use case', () => {
    beforeEach(() => {
        usersRepository = new InMemoryUserRepository();
        getUserByIdUseCase = new GetUserByIdUseCase(usersRepository);
    });

    it('should be able to get user by id', async () => {

        const user = await usersRepository.createUser({
            id: '1',
            first_name: 'John',
            last_name: 'Doe',
            email: 'john.alves@gmail.com',
            password: '123',
            role: 'user'
        });

        const { user: userFound } = await getUserByIdUseCase.execute({ user_id: user.id });
        expect(userFound?.id).toEqual(user.id);
    });
});