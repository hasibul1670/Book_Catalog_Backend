/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient, User } from '@prisma/client';
import config from '../../../config';
import { ApiError } from '../../../handlingError/ApiError';
import { buildWhereConditions } from '../../../helpers/buildWhereCondition';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { userSearchableFields } from './user.constant';
import { IUserFilterRequest } from './user.interface';

const prisma = new PrismaClient();

const createUser = async (payload: User): Promise<User> => {
  try {
    const result = await prisma.user.create({
      data: payload,
    });
    return result;
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2002') {
      throw new ApiError(409, 'This User is already Exist !! ');
    }
    throw error;
  }
};

const getAllUsers = async (
  filters: IUserFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<User[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filtersData } = filters;
  const { whereConditions, sortConditions } = buildWhereConditions(
    searchTerm,
    filtersData,
    userSearchableFields,
    sortBy,
    sortOrder
  );
  const result = await prisma.user.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy: sortConditions,
  });
  const total = await prisma.user.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getProfile = async (token: any) => {
  
  const decoded = jwtHelpers.verifyToken(token, config.jwt.secret as string);
  const result = await prisma.user.findUnique({
    where: { id: decoded.id },
  });
  return result;
};

const getSingleUser = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: { id },
  });
  return result;
};

const deleteUser = async (id: string) => {
  try {
    return await prisma.user.delete({
      where: { id },
    });
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2025') {
      throw new ApiError(404, 'User Not Found !!!');
    }
  }
};

const updateSingleUser = async (id: string, newData: Partial<User>) => {
  try {
    const updatedSemester = await prisma.user.update({
      where: { id },
      data: newData,
    });
    return updatedSemester;
  } catch (error) {
    const err = error as any;
    if (err.code === 'P2002') {
      throw new ApiError(409, 'This User is already Exist');
    }
    if (err.code === 'P2025') {
      throw new ApiError(404, 'User  Not Found !!!');
    }
    throw error;
  }
};

export const UserServices = {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  getProfile,
};
