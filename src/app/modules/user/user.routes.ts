import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserControllers } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

router.get('/', UserControllers.getAllUsers);
router.get('/:id', UserControllers.getSingleUser);
router.patch(
  '/:id',
  validateRequest(UserValidation.updateValidationSchema),
  UserControllers.updateSingleUser
);
router.delete('/:id', UserControllers.deleteUser);

export const UserRoutes = router;
