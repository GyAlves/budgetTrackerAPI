// dependencies
import { randomUUID } from "crypto";

// models
import { User } from "@/models/User";

// Repository
import { IUsersRepository } from "@/repository/interfaces/IUsersRepository";

// interfaces
interface ICreateUserRequest {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    role: string 
}

interface ICreateUserResponse {
    user: User
}

export class CreateUserUseCase {
    constructor (
        private usersRepository: IUsersRepository
    ){}

    async execute(data: ICreateUserRequest ): Promise<ICreateUserResponse>{

        const user = await this.usersRepository.createUser({
            id: randomUUID(),
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            role: data.role,
            password: data.password
        });

        return {
            user
        }
    }
}