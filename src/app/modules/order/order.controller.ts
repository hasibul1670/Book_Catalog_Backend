/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { ApiError } from '../../../handlingError/ApiError';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import { sendControllerResponse } from '../../../shared/sendControllerResponse';
import { OrderServices } from './order.services';
import { OrderFilterableFields } from './order.constant';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderServices.createOrder(req.body);
  sendControllerResponse(
    res,
    'Academic Semester Created Successfully!',
    result
  );
});

const getAllOrders = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, OrderFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await OrderServices.getAllOrders(filters, options);
  sendControllerResponse(res, 'Orders retrieved successfully !', result);
});

const deleteOrder = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await OrderServices.deleteOrder(id);
  sendControllerResponse(res, ' Order Deleted successfully !', result);
});

const getSingleOrder = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await OrderServices.getSingleOrder(id);

  if (!result) {
    throw new ApiError(404, 'Academic semester not found');
  }

  sendControllerResponse(res, 'Single Order retrieved successfully!', result);
});

const updateSingleOrder = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const newData = req.body;
  const result = await OrderServices.updateSingleOrder(id, newData);
  sendControllerResponse(res, 'Single Order Updated  successfully !', result);
});

export const OrderControllers = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  deleteOrder,
  updateSingleOrder,
};
