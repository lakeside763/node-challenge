import { expensesService } from '../index';
import { NextFunction, Request, Response, Router } from 'express';

export const router = Router();

router.get('/get-all-expenses', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const expenses = await expensesService.getAllExpenses();
    return res.status(200).json(expenses);
  } catch (error) {
    next(error);
  }
});

router.get('/get-user-expenses', async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const userExpenses = await expensesService.getExpensesByUserId(input);
    return res.status(200).json(userExpenses);
  } catch (error) {
    return res.status(error.statusCode).send(error.message);
  }
});
