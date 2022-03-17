import { userService } from '../index';
import { Request, Response, Router } from 'express';

export const router = Router();

router.get('/get-user-details/:userId', async (req: Request, res: Response) => {
  try {
    const userId: String = req.params.userId;
    const user = await userService.getUserDetailsByUserId({ userId });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(error.statusCode).send(error.message);
  }
});

router.get('/get-all-users', async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(error.statusCode).send(error.message);
  }
});

// router.get('/get-user-details', async (req, res, next) => {
//   const [userError, userDetails] = await to(getUserDetails(req.query?.userId));

//   if (userError) {
//     return next(
//       new ApiError(userError, userError.status, `Could not get user details: ${userError}`, userError.title, req)
//     );
//   }

//   if (!userDetails) {
//     return res.json({});
//   }

//   return res.json(secureTrim(userDetails));
// });
