import prisma from '@nc/database/prisma/connect_prisma';
import supertest from 'supertest';
import { app } from '../../../../server';

const request = supertest(app);

describe('User expenses model', () => {
  beforeAll(async () => { });

  afterEach(async () => {
    await prisma.users.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  const userData = {
    first_name: 'jeppe',
    last_name: 'rindom',
    company_name: 'pleo',
    ssn: '1',
  };
  const expensesData = {
    merchant_name: 'Cafe',
    amount_in_cents: 228000,
    currency: 'DKK',
    status: 'pending',
  };

  test('should fetch user expenses detatails from database', async () => {
    const { id: user_id } = await prisma.users.create({ data: userData });
    await prisma.expenses.create({
      data: { ...expensesData, users: { connect: { id: user_id } } },
    });
    const expenses = await prisma.expenses.findMany({ where: { user_id } });
    expect(expenses[0]).toHaveProperty('id');
    expect(expenses).toHaveProperty('0.merchant_name', expensesData.merchant_name);
  });

  test('should fetch user expenses via expense routes', async () => {
    const { id: user_id } = await prisma.users.create({ data: userData });
    const expenses = await prisma.expenses.create({
      data: { ...expensesData, users: { connect: { id: user_id } } },
    });

    const reqBodyData = {
      user_id,
      pagination: {
        skip: 0,
        take: 10,
      },
    };
    const { statusCode, body } = await request
      .get('/expense/v1/get-user-expenses')
      .send(reqBodyData)
      .then((res) => {
        return { statusCode: res.statusCode, body: res.body };
      });
    expect(statusCode).toBe(200);
    expect(body).toHaveProperty('0.id', expenses.id);
    expect(body).toHaveProperty('0.user_id', expenses.user_id);
  });
});
