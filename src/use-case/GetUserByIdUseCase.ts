
// models
import { User } from "@/models/User";

// Repository
import { IUsersRepository } from "@/repository/interfaces/IUsersRepository";

// interfaces
interface IFetchAllUsersRequest {
    user_id: string
}

interface IFetchAllUsersResponse {
    user: User | null
}

export class GetUserByIdUseCase {
    constructor (
        private usersRepository: IUsersRepository
    ){}

    async execute({ user_id }: IFetchAllUsersRequest): Promise<IFetchAllUsersResponse>{

        const user = await this.usersRepository.getUserById(user_id);
        
        return { user };
        
    }
}