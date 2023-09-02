/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ILoginUserResponse } from './auth.interface';
import { AuthService } from './auth.service';

const sendLoginResponse = async (
  res: Response,
  message: string,
  token: string
) => {
  sendResponse<ILoginUserResponse>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message,
    token,
  });
};

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;
  const result = (await AuthService.loginuser(loginData)) as ILoginUserResponse;
  const { token } = result;
  sendLoginResponse(res, 'User signin successfully!', token);
});

export const AuthController = {
  loginUser,
};
