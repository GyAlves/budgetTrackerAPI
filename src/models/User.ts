import IUser from "./interfaces/IUser";

export class User implements IUser {
    constructor (
        public id: string,
        public first_name: string,
        public last_name: string,
        public email: string,
        public password: string,
        public role: Enumerator,
    ){}
}