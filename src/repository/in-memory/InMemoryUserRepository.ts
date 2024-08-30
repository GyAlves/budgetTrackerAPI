
// models
import { User } from "@/models/User";

// Repository
import { IUsersRepository } from "../interfaces/IUsersRepository";

export class InMemoryUserRepository implements IUsersRepository{

    public users: User[] = [];

    async fetchUsers(): Promise<User[] | []> {
        return this.users;
    }
    async getUserById(user_id: string): Promise<User | null> {
        const user = this.users.find(user => user.id === user_id);

        if (!user) return null;
        return user;
    }
    async createUser(data: User): Promise<User> {
        const user = {
            id: data.id,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
            role: data.role
        }

        this.users.push(user);
        return user;
    }
    async updateUserById(user_id: string, updatedUser: Omit<User, 'id'>): Promise<void | null> {
        const userIndex = this.users.findIndex(user => user.id === user_id);
        if (!userIndex) return null;

        this.users[userIndex] = { id: user_id, ...updatedUser };
    }
    async deleteUserById(user_id: string): Promise<void | null> {
        const userIndex = this.users.findIndex(user => user.id === user_id);
        if (!userIndex) return null;

        this.users.splice(userIndex, 1);
    }
    async deleteUsers(): Promise<void> {
        this.users = [];
    }

}