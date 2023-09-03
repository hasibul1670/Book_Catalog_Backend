import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();
router.post('/create-order', OrderControllers.createOrder);
router.get('/', OrderControllers.getAllOrders);
router.get('/:id', OrderControllers.getSingleOrder);
router.delete('/:id', OrderControllers.deleteOrder);

export const OrderRoutes = router;
