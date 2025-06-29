import { NextFunction, Request, Response } from "express";

export const signUp = async ({
  req,
  res,
  next,
}: {
  req: Request;
  res: Response;
  next: NextFunction;
}) => {
  try {
    const { name, email, password } = req.body;
  } catch (error) {
    next(error);
  }
};

export const login = async ({
  req,
  res,
  next,
}: {
  req: Request;
  res: Response;
  next: NextFunction;
}) => {
  try {
    const { email, password } = req.body;
  } catch (error) {
    next(error);
  }
};
