import { CreateXpenseDto } from '@/dtos/xpenses.dto';
import { HttpException } from '@/exceptions/HttpException';
import { Xpense } from '@/interfaces/xpenses.interface';
import xpenseModel from '@/models/xpenses.model';
import { isEmpty } from '@/utils/util';

class XpenseService {
  public xpenses = xpenseModel;

  // Find all xpenses with optional filter/search params
  public async findAllXpenses(): Promise<Xpense[]> {
    const xpenses = await this.xpenses.find();
    return xpenses;
  }

  // Find xpense by ID
  public async findXpenseById(id: string): Promise<Xpense> {
    if (isEmpty(id)) throw new HttpException(400, 'No Id given');

    const findXpense: Xpense = await this.xpenses.findOne({ _id: id });
    if (!findXpense) {
      throw new HttpException(404, 'No Xpense found for this ID');
    }

    return findXpense;
  }

  // Create an Xpense
  public async createXpense(xpenseData: CreateXpenseDto): Promise<Xpense> {
    if (isEmpty(xpenseData)) {
      throw new HttpException(400, 'No xpenseData given');
    }

    const createdXpense = await this.xpenses.create({
      ...xpenseData,
    });

    return createdXpense;
  }

  // Updates an Xpense
  public async updateXpense(
    xpenseId: string,
    xpenseData: CreateXpenseDto,
  ): Promise<Xpense> {
    if (isEmpty(xpenseData)) {
      throw new HttpException(400, 'No xpenseData given');
    }

    const dbXpense = await this.xpenses.findOne({ _id: xpenseId });
    if (!dbXpense) {
      throw new HttpException(404, 'No Xpense found for this ID');
    }

    const updatedXpense = await this.xpenses.findByIdAndUpdate(xpenseId, {
      ...xpenseData,
    });

    if (!updatedXpense) {
      throw new HttpException(500, 'Error while updating Xpense');
    }

    return updatedXpense;
  }

  // Removes an Xpense
  public async deleteXpense(id: string): Promise<Xpense> {
    const deletedXpense = await this.xpenses.findByIdAndDelete(id);

    if (!deletedXpense) {
      throw new HttpException(404, 'No Xpense found for this ID');
    }

    return deletedXpense;
  }
}

export default XpenseService;
