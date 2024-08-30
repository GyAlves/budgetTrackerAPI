//dependencies 
import { beforeEach, describe } from '@jest/globals'; 

// repositories
import { InMemoryUserRepository } from "../../repository/in-memory/InMemoryUserRepository";

// use-cases
import { FetchAllUsersUseCase } from "../FetchAllUsersUseCase";


let usersRepository: InMemoryUserRepository;
let fetchAllUsersUseCase: FetchAllUsersUseCase;

describe('Fetch All Users Use Case', () => {
    beforeEach(() => {
        usersRepository = new InMemoryUserRepository();
        fetchAllUsersUseCase = new FetchAllUsersUseCase(usersRepository);
    });

    it('should be able to fetch all the users', async () => {

        const user = await usersRepository.createUser({
            id: '1',
            first_name: 'John',
            last_name: 'Doe',
            email: 'john.alves@gmail.com',
            password: '123',
            role: 'user'
        });

        const { users } = await fetchAllUsersUseCase.execute();

        expect(users).toHaveLength(1);
        expect(users).toEqual([
            expect.objectContaining(user)
        ]);
    });
});