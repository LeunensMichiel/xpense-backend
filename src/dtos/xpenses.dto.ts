import { IsDateString, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateXpenseDto {
  @IsString()
  public title: string;

  @IsUrl()
  public imageUrl: string;

  @IsDateString()
  public date: Date;

  @IsNumber()
  public cost: number;

  @IsString()
  public category: string;
}
