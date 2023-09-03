/* eslint-disable @typescript-eslint/no-explicit-any */
import { Order, PrismaClient } from '@prisma/client';
import { ApiError } from '../../../handlingError/ApiError';
import { buildWhereConditions } from '../../../helpers/buildWhereCondition';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { OrderFilterableFields } from './order.constant';
import { IOrderFilterRequest } from './order.interface';

const prisma = new PrismaClient();

const createOrder = async (payload: Order) => {
  try {
    return await prisma.order.create({ data: payload });
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2002') {
      throw new ApiError(409, 'This Order is already placed');
    }
    throw error;
  }
};

const getAllOrders = async (
  filters: IOrderFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Order[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(options);

  const { searchTerm, ...filtersData } = filters;
  const { whereConditions, sortConditions } = buildWhereConditions(
    searchTerm,
    filtersData,
    OrderFilterableFields,
    sortBy,
    sortOrder
  );
  const result = await prisma.order.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy: sortConditions,
  });
  const total = await prisma.order.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getSingleOrder = async (id: string) => {
  const result = await prisma.order.findUnique({
    where: { id },
    include: { orderedBooks: true, customer: true },
  });
  return result;
};

const deleteOrder = async (id: string) => {
  try {
    return await prisma.order.delete({
      where: { id },
    });
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2025') {
      throw new ApiError(404, 'Academic Semester Not Found !!!');
    }
  }
};

const updateSingleOrder = async (id: string, newData: Partial<Order>) => {
  try {
    const updatedSemester = await prisma.order.update({
      where: { id },
      data: newData,
    });

    return updatedSemester;
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2025') {
      throw new ApiError(404, 'Academic Semester Not Found !!!');
    }
    throw error;
  }
};

export const OrderServices = {
  createOrder,
  deleteOrder,
  getAllOrders,
  getSingleOrder,
  updateSingleOrder,
};
