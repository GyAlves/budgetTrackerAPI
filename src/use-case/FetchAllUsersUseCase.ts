
// models
import { User } from "@/models/User";

// Repository
import { IUsersRepository } from "@/repository/interfaces/IUsersRepository";

// interfaces

interface IFetchAllUsersResponse {
    users: User[] | []
}

export class FetchAllUsersUseCase {
    constructor (
        private usersRepository: IUsersRepository
    ){}

    async execute(): Promise<IFetchAllUsersResponse>{

        const users = await this.usersRepository.fetchUsers();
        return {
            users
        };
    }
}