import { OrderedBook, PrismaClient } from '@prisma/client';
import { ApiError } from '../../../handlingError/ApiError';
import { buildWhereConditions } from '../../../helpers/buildWhereCondition';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { orderedBookSearchableFields } from './orderedBook.constants';
import { IOrderedBooksFilterRequest } from './orderedBook.interface';

const prisma = new PrismaClient();

const createOrderedBook = async (
  payload: OrderedBook
): Promise<OrderedBook> => {
  const { bookId, quantity } = payload;
  try {
    return await prisma.orderedBook.create({
      data: {
        bookId,
        quantity: quantity,
      },
    });
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2002') {
      throw new ApiError(409, 'This Academic Faculty is already Exist');
    }
    throw error;
  }
};
const getAllOrderedBooks = async (
  filters: IOrderedBooksFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<OrderedBook[]>> => {
  const { limit, page, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(options);

  const { searchTerm, ...filtersData } = filters;
  const { whereConditions, sortConditions } = buildWhereConditions(
    searchTerm,
    filtersData,
    orderedBookSearchableFields,
    sortBy,
    sortOrder
  );
  const result = await prisma.orderedBook.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy: sortConditions,
  });
  const total = await prisma.orderedBook.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getSingleOrderedBook = async (id: string) => {
  const result = await prisma.orderedBook.findMany({
    where: {
      id,
    },
  });
  return result;
};

export const OrderedBookServices = {
  createOrderedBook,
  getAllOrderedBooks,
  getSingleOrderedBook,
};
