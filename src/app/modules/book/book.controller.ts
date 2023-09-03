import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import { sendControllerResponse } from '../../../shared/sendControllerResponse';
import { BookServices } from './book.service';
import { bookFilterableFields } from './book.contants';


const createBook = catchAsync(
  async (req: Request, res: Response) => {
    const result = await BookServices.createBook(
      req.body
    );
    sendControllerResponse(
      res,
      'Book  Created successfully',
      result
    );
  }
);

const getAllBooks = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, bookFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder','maxPrice','minPrice']);
    const result = await BookServices.getAllBooks(
      filters,
      options
    );
    sendControllerResponse(
      res,
      'Books Retrieved in that Category successfully',
      result
    );
  }
);

const getBooksByCategoryId = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BookServices.getBooksByCategoryId(
      id,
     
    );
    sendControllerResponse(
      res,
      'All Book Retrieved  in that category successfully',
      result
    );
  }
);

const getSingleBook = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BookServices.getSingleBook(
      id
    );
    sendControllerResponse(
      res,
      'A Book retrieved Successfully!',
      result
    );
  }
);
const deleteBook = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BookServices.deleteBook(id);
    sendControllerResponse(
      res,
      'Book deleted Successfully!',
      result
    );
  }
);
const updateBook = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const newData = req.body;
    const result = await BookServices.updateBook(id,newData);
    sendControllerResponse(
      res,
      'Book Updated Successfully!',
      result
    );
  }
);

export const BookControllers = {
  createBook,
  getAllBooks,
  getSingleBook,
  deleteBook,
  updateBook,
  getBooksByCategoryId
};
