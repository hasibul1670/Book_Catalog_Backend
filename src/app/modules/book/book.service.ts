import { Book, PrismaClient } from '@prisma/client';
import { ApiError } from '../../../handlingError/ApiError';
import { buildWhereConditions } from '../../../helpers/buildWhereCondition';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { bookSearchableFields } from './book.contants';
import { IBookFilterRequest } from './book.interface';

const prisma = new PrismaClient();

const createBook = async (payload: Book): Promise<Book> => {
  try {
    const result = await prisma.book.create({
      data: payload,
      include: { category: true },
    });

    return result;
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2002') {
      throw new ApiError(409, 'This BOOKS is already Exist !! ');
    }
    throw error;
  }
};

const getAllBooks = async (
  filters: IBookFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Book[]>> => {
  const { limit, page, skip, sortBy, sortOrder, minPrice, maxPrice } =
    paginationHelpers.calculatePagination(options);

  const { searchTerm, ...filtersData } = filters;
  const { whereConditions, sortConditions } = buildWhereConditions(
    searchTerm,
    filtersData,
    bookSearchableFields,
    sortBy,
    sortOrder,
    maxPrice,
    minPrice
  );
  const result = await prisma.book.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy: sortConditions,
  });
  const total = await prisma.book.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getSingleBook = async (id: string) => {
  try {
    const result = await prisma.book.findUnique({
      where: { id },
      include: { category: true },
    });

    return result;
  } catch (error) {
    // Handle the error here, e.g., log it or return an error response
    console.error('Error while fetching the book:---------------', error);
    throw error; // Rethrow the error to propagate it up the call stack if needed
  }
};

const deleteBook = async (id: string) => {
  try {
    const result = await prisma.book.delete({
      where: {
        id,
      },
    });
    return result;
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2025') {
      throw new ApiError(404, 'BOOKS  Not Found !!!');
    }
  }
};
const updateBook = async (
  id: string,
  newData: Partial<Book>
): Promise<Book | null> => {
  try {
    const updatedDepartment = await prisma.book.update({
      where: { id },
      data: newData,
    });
    return updatedDepartment;
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2002') {
      throw new ApiError(409, 'This BOOKS  is already Exist');
    }
    if (err.code === 'P2025') {
      throw new ApiError(404, ' BOOKS  Not Found !!!');
    }
    throw error;
  }
};

export const BookServices = {
  createBook,
  getAllBooks,
  getSingleBook,
  deleteBook,
  updateBook,
};
