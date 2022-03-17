/* eslint-disable import/no-extraneous-dependencies */
import { BadRequestError } from '@nc/utils/errors/bad-request-error';
import prisma from '../../../../prisma/connect_prisma';

class ExpensesService {
  async getAllExpenses() {
    const expenses = await prisma.expenses.findMany({});
    return expenses;
  }

  async getExpensesByUserId({ userId: user_id }) {
    const userExpenses = await prisma.expenses.findMany({ where: { user_id } });
    if (!userExpenses) {
      throw new BadRequestError('Invalid user ID was provided');
    }

    return userExpenses;
  }
}

export default ExpensesService;
