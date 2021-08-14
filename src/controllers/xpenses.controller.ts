import { CreateXpenseDto } from '@/dtos/xpenses.dto';
import { Xpense } from '@/interfaces/xpenses.interface';
import XpenseService from '@/services/xpenses.service';
import { NextFunction, Request, Response } from 'express';

class XpensesController {
  public xpenseService = new XpenseService();

  public getXpenses = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const findAllXpensesData: Xpense[] =
        await this.xpenseService.findAllXpenses();

      res.status(200).json({ data: findAllXpensesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getXpenseById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const xpenseId: string = req.params.id;
      const findOneXpenseData: Xpense = await this.xpenseService.findXpenseById(
        xpenseId,
      );

      res.status(200).json({ data: findOneXpenseData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createXpense = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const xpenseData: CreateXpenseDto = req.body;
      const createXpenseData: Xpense = await this.xpenseService.createXpense(
        xpenseData,
      );

      res.status(201).json({ data: createXpenseData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateXpense = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const xpenseId: string = req.params.id;
      const xpenseData: CreateXpenseDto = req.body;
      const updateXpenseData: Xpense = await this.xpenseService.updateXpense(
        xpenseId,
        xpenseData,
      );

      res.status(200).json({ data: updateXpenseData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteXpense = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const xpenseId: string = req.params.id;
      const deleteXpenseData: Xpense = await this.xpenseService.deleteXpense(
        xpenseId,
      );

      res.status(200).json({ data: deleteXpenseData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
