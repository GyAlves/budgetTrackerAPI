export default interface IExpense {
    id: string,
    title: string,
    description: string,
    user_id: string,
    type: Enumerator, // [Income, Outcome]
    value: Number,
}