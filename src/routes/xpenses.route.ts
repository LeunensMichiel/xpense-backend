import XpensesController from '@/controllers/xpenses.controller';
import { CreateXpenseDto } from '@/dtos/xpenses.dto';
import { Routes } from '@/interfaces/routes.interface';
import authMiddleware from '@/middlewares/auth.middleware';
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
    this.router.get(
      `${this.path}`,
      authMiddleware,
      this.xpensesController.getXpenses,
    );
    this.router.get(
      `${this.path}/:id`,
      authMiddleware,
      this.xpensesController.getXpenseById,
    );
    this.router.post(
      `${this.path}`,
      authMiddleware,
      validationMiddleware(CreateXpenseDto, 'body'),
      this.xpensesController.createXpense,
    );
    this.router.put(
      `${this.path}/:id`,
      authMiddleware,
      validationMiddleware(CreateXpenseDto, 'body', true),
      this.xpensesController.updateXpense,
    );
    this.router.delete(
      `${this.path}/:id`,
      authMiddleware,
      this.xpensesController.deleteXpense,
    );
  }
}

export default XpensesRoute;
