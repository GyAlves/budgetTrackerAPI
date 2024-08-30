import IExpense from "./interfaces/IExpense";

export class Expense implements IExpense {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public user_id: string,
        public type: Enumerator<any>,
        public value: Number,
    ){}
}