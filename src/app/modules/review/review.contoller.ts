import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import { sendControllerResponse } from '../../../shared/sendControllerResponse';
import { categoryFilterableFields } from './category.constants';
import { CategoryServices } from './category.service';

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryServices.createCategory(req.body);
  sendControllerResponse(res, 'category created successfully', result);
});

const getAllCategories = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, categoryFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await CategoryServices.getAllCategories(filters, options);
  sendControllerResponse(res, 'Categories fetched successfully', result);
});

const getSingleCategory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoryServices.getSingleCategory(id);
  sendControllerResponse(
    res,
    'A Single Category fetched Successfully!',
    result
  );
});
const deleteCategory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoryServices.deleteCategory(id);
  sendControllerResponse(res, 'category Deleted Successfully!', result);
});
const updateCategory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const newData = req.body;
  const result = await CategoryServices.updateSingleCategory(id, newData);
  sendControllerResponse(res, 'category Updated Successfully!', result);
});

export const CategoryControllers = {
  createCategory,
  getAllCategories,
  getSingleCategory,
  deleteCategory,
  updateCategory,
};
