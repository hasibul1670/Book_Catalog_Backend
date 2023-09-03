import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BookControllers } from './book.controller';
import { BookValidation } from './book.validations';
const router = express.Router();

router.post(
  '/create-book',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BookValidation.createValidation),
  BookControllers.createBook
);

router.get('/', BookControllers.getAllBooks);
router.get('/:id', BookControllers.getSingleBook);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BookValidation.updateValidation),
  BookControllers.updateBook
);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), BookControllers.deleteBook);

export const BookRoutes = router;
