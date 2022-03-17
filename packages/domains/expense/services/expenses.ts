import prisma from '../../../../prisma/connect_prisma';

class ExpensesService {
  async getExpenses() {
    const expenses = await prisma.expenses.findMany({});
    return expenses;
  }
}

export default ExpensesService;
