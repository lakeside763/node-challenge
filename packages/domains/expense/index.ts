import ExpensesService from './services/expenses';
import { Router } from 'express';
import { router as v1 } from './routes/v1-get-expense';

export const router = Router();
export const expensesService = new ExpensesService();

router.use('/v1', v1);
