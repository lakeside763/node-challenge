import { BadRequestError } from '@nc/utils/errors/bad-request-error';
import prisma from '@nc/database/prisma/connect_prisma';

class UserServices {
  async getAllUsers() {
    const users = await prisma.users.findMany({});
    return users;
  }

  async getUserDetailsByUserId({ userId: id }) {
    const user = await prisma.users.findFirst({ where: { id } });
    if (!user) {
      throw new BadRequestError('Invalid user ID was provided');
    }
    return user;
  }
}

export default UserServices;
