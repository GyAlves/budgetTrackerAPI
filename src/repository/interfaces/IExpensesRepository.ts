import { Expense } from "@/models/Expense"

export interface IExpensesRepository {
    getExpenseById(expense_id: string): Promise<Expense | null>
    fetchExpensesByUserId(user_id: string): Promise<Expense[] | []>
    createExpense(expense:Expense): Promise<number[]>
    updateExpenseById(expense_id: string, updatedExpense: Omit<Expense, 'id'>): Promise<void | null>
    deleteExpenseById(expense_id: string): Promise<void | null>
    deleteAllUserExpenses(user_id: string): Promise<void> // Admin
}