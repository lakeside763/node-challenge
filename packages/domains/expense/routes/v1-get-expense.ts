import ExpensesService from '../services/expenses';
import { Router } from 'express';

const expensesService = new ExpensesService();

export const router = Router();

router.get('/get-user-expenses', async (req, res, next) => {
  try {
    const expenses = await expensesService.getExpenses();
    return res.status(200).json(expenses);
  } catch (error) {
    next(error);
  }
});
