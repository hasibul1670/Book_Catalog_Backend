/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { ApiError } from '../../../handlingError/ApiError';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import { sendControllerResponse } from '../../../shared/sendControllerResponse';
import { AuthService } from '../auth/auth.service';
import { userFilterableFields } from './user.constant';
import { UserServices } from './user.services';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.signUp(req.body);
  sendControllerResponse(res, 'User is Created Successfully!', result);
});

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, userFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await UserServices.getAllUsers(filters, options);
  sendControllerResponse(res, 'Users retrieved successfully !', result);
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserServices.deleteUser(id);
  sendControllerResponse(res, ' User Deleted successfully !', result);
});

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await UserServices.getSingleUser(id);

  if (!result) {
    throw new ApiError(404, 'User  not found');
  }

  sendControllerResponse(res, 'Single User retrieved successfully!', result);
});

const updateSingleUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const newData = req.body;
  const result = await UserServices.updateSingleUser(id, newData);
  sendControllerResponse(res, 'Single User Updated  successfully !', result);
});

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateSingleUser,
};
