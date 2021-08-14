import XpensesController from '@/controllers/xpenses.controller';
import { CreateXpenseDto } from '@/dtos/xpenses.dto';
import { Routes } from '@/interfaces/routes.interface';
import validationMiddleware from '@/middlewares/validation.middleware';
import { Router } from 'express';

class XpensesRoute implements Routes {
  public path = '/xpenses';
  public router = Router();
  public xpensesController = new XpensesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.xpensesController.getXpenses);
    this.router.get(`${this.path}/:id`, this.xpensesController.getXpenseById);
    this.router.post(
      `${this.path}`,
      validationMiddleware(CreateXpenseDto, 'body'),
      this.xpensesController.createXpense,
    );
    this.router.put(
      `${this.path}/:id`,
      validationMiddleware(CreateXpenseDto, 'body', true),
      this.xpensesController.updateXpense,
    );
    this.router.delete(`${this.path}/:id`, this.xpensesController.deleteXpense);
  }
}

export default XpensesRoute;
