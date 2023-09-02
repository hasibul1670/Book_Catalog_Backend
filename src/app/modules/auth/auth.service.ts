/* eslint-disable no-undef */
import { PrismaClient, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { StatusCodes } from 'http-status-codes';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { ApiError } from '../../../handlingError/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';

import { ILoginUser, ILoginUserResponse } from './auth.interface';
import { isPasswordMatched } from './auth.utils';
const prisma = new PrismaClient();

const signUp = async (payload: User): Promise<User> => {
  try {
    const { password, ...userData } = payload;
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await prisma.user.create({
      data: {
        ...userData,
        password: hashedPassword,
      },
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

const loginuser = async (
  payload: ILoginUser
): Promise<ILoginUserResponse | undefined> => {
  const { email, password } = payload;
  const isFound = await prisma.user.findFirst({
    where: { email: email },
  });

  if (!isFound) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'User does not exist');
  }

  if (isFound) {
    const isMatched = await isPasswordMatched(password, isFound.password);

    if (!isMatched) {
      throw new ApiError(StatusCodes.UNAUTHORIZED, 'Password is incorrect');
    }

    // Generate an access token
    const token = jwtHelpers.createToken(
      { email },
      config.jwt.secret as Secret,
      config.jwt.expires_in as string
    );

    return {
      token,
    };
  }
};
export const AuthService = {
  loginuser,
  signUp,
};
