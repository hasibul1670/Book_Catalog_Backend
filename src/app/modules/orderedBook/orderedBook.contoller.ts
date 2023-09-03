import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import { sendControllerResponse } from '../../../shared/sendControllerResponse';
import { OrderedBookServices } from './orderedBook.service';
import { orderedBookFilterableFields } from './orderedBook.constants';

const createOrderedBook = catchAsync(
  async (req: Request, res: Response) => {
    const result = await OrderedBookServices.createOrderedBook(
      req.body
    );
    sendControllerResponse(
      res,
      'OrderedBook created successfully',
      result
    );
  }
);

const getAllOrderedBooks = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, orderedBookFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await OrderedBookServices.getAllOrderedBooks(
      filters,
      options
    );
    sendControllerResponse(
      res,
      'OrderedBooks fetched successfully',
      result
    );
  }
);

const getSingleOrderedBook = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OrderedBookServices.getSingleOrderedBook(id);
    sendControllerResponse(
      res,
      'A Single OrderedBook fetched Successfully!',
      result
    );
  }
);



export const OrderedBookControllers = {
  createOrderedBook,
  getAllOrderedBooks,
  getSingleOrderedBook,

};
