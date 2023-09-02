import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryControllers } from './category.contoller';
import { CategoryValidation } from './category.validation';

const router = express.Router();
router.post(
  '/create-category',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(CategoryValidation.createValidation),
  CategoryControllers.createCategory
);

router.get(
  '/',
  CategoryControllers.getAllCategories
);
router.get(
  '/:id',
  CategoryControllers.getSingleCategory
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryControllers.deleteCategory
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(CategoryValidation.updateValidation),
  CategoryControllers.updateCategory
);

export const CategoryRoutes = router;
