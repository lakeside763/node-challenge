import { ApiError } from '@nc/utils/errors';
import { Router } from 'express';
import { secureTrim } from '../formatter';
import { to } from '@nc/utils/async';
import { getUserDetails } from '../model';

export const router = Router();

router.get('/get-user-details', async (req, res, next) => {
  const [userError, userDetails] = await to(getUserDetails(req.query?.userId));

  if (userError) {
    return next(
      new ApiError(userError, userError.status, `Could not get user details: ${userError}`, userError.title, req)
    );
  }

  if (!userDetails) {
    return res.json({});
  }

  return res.json(secureTrim(userDetails));
});

router.get('/current-user', (req, res) => {
  res.status(200).json({ name: 'lakeside', status: 'Admin' });
});
