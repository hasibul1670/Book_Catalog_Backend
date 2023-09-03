import express from 'express';
import { OrderedBookControllers } from './orderedBook.contoller';

const router = express.Router();
router.post(
  '/create-OrderedBook',

  OrderedBookControllers.createOrderedBook
);

router.get('/', OrderedBookControllers.getAllOrderedBooks);
router.get('/:id', OrderedBookControllers.getSingleOrderedBook);

export const OrderedBookRoutes = router;
