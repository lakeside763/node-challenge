/* eslint-disable sort-imports */
import { Router } from 'express';
import { router as v1 } from './routes/v1-get-user';
import UserServices from './services/userServices';

export const router = Router();
export const userService = new UserServices();

router.use('/v1', v1);
