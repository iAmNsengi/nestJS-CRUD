import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateSongDTO {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsArray()
  @IsNotEmpty()
  readonly artists: string[];

  @IsDateString()
  @IsNotEmpty()
  readonly releaseDate: string;

  @IsMilitaryTime()
  @IsNotEmpty()
  readonly duration: Date;
}
