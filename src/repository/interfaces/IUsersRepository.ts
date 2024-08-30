// models
import { User } from "@/models/User";

export interface IUsersRepository {
    fetchUsers(): Promise<User[] | []>
    getUserById(user_id: string): Promise<User | null>
    createUser(user:User): Promise<User>
    updateUserById(user_id: string, updatedUser: Omit<User, 'id'>): Promise<void | null>
    deleteUserById(user_id: string): Promise<void | null>
    deleteUsers(): Promise<void>
}