import { BadRequestError } from '@nc/utils/errors/bad-request-error';
import prisma from '@nc/database/prisma/connect_prisma';

class ExpensesService {
  async getAllExpenses() {
    const expenses = await prisma.expenses.findMany({});
    return expenses;
  }

  async getExpensesByUserId({ user_id, pagination: { skip, take, search } }) {
    const where = {
      AND: { user_id },
      OR: {},
    };

    if (search) {
      where.OR = [
        { merchant_name: { contains: search, mode: 'insensitive' } },
        { status: { contains: search, mode: 'insensitive' } },
      ];
    } else {
      delete where.OR;
    }

    const query = {
      where,
      take: take || 10,
      skip: skip || 0,
    };

    const userExpenses = await prisma.expenses.findMany(query);
    if (!userExpenses) {
      throw new BadRequestError('Invalid user ID was provided');
    }

    return userExpenses;
  }
}

export default ExpensesService;
