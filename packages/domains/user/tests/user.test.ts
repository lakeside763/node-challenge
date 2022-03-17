import prisma from '../../../../prisma/connect_prisma';
import supertest from 'supertest';
import { app } from '../../../../server';

const request = supertest(app);

describe('User expenses model', () => {
  beforeAll(async () => {});

  afterEach(async () => {
    await prisma.users.deleteMany();
    await prisma.expenses.deleteMany();
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

  test('should fetch user details from database', async () => {
    const { id } = await prisma.users.create({ data: userData });
    const user = await prisma.users.findUnique({ where: { id } });
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('first_name', userData.first_name);
  });

  test('should fetch user details via user routes', async () => {
    const user = await prisma.users.create({ data: userData });
    const { statusCode, body } = await request.get(`/user/v1/get-user-details/${user.id}`).then((res) => {
      return { statusCode: res.statusCode, body: res.body };
    });
    expect(statusCode).toBe(200);
    expect(body).toHaveProperty('id', user.id);
    expect(body).toHaveProperty('first_name', user.first_name);
  });
});
