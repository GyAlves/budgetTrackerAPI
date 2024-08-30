
// models
import { Expense } from "@/models/Expense";

// interfaces
import { IExpensesRepository } from "../interfaces/IExpensesRepository";

export class InMemoryExpensesRepository implements IExpensesRepository {

    public expenses: Expense[] = [];

    async getExpenseById(expense_id: string): Promise<Expense | null> {
       const expense = this.expenses.find(expense => expense.id === expense_id);

       if (!expense) return null;
       return expense;
    }
    async fetchExpensesByUserId(user_id: string): Promise<Expense[] | []> {
        const expenses = this.expenses.filter(expense => expense.user_id === user_id);
        if (!expenses) return [];

        return expenses;
    }
    async createExpense(expense: Expense): Promise<number[]> {
        this.expenses.push(expense);
        return [this.expenses.length];
    }
    async updateExpenseById(expense_id: string, updatedExpense: Omit<Expense, 'id'>): Promise<void | null> {
        const expenseIndex = this.expenses.findIndex(expense => expense.id === expense_id);
        if (!expenseIndex) return null;

        this.expenses[expenseIndex] = { id: expense_id, ...updatedExpense };
    }
    async deleteExpenseById(expense_id: string): Promise<void | null> {
        const expenseIndex = this.expenses.findIndex(expense => expense.id === expense_id);
        if (!expenseIndex) return null;

        this.expenses.splice(expenseIndex, 1);

    }
    async deleteAllUserExpenses(user_id: string): Promise<void> {
       this.expenses.filter(expenses => expenses.user_id !== user_id);
    }
    
}