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

router.get('/get-user-expenses/:userId', async (req: Request, res: Response) => {
  try {
    const userId: String = req.params.userId;
    const userExpenses = await expensesService.getExpensesByUserId({ userId });
    return res.status(200).json(userExpenses);
  } catch (error) {
    return res.status(error.statusCode).send(error.message);
  }
});
