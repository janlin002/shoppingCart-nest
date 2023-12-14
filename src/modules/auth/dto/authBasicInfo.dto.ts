import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthBasicInfo {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  user_id: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  first_name: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  last_name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  address: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  telephone: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsDate()
  create_at: Date;

  @IsNotEmpty()
  @ApiProperty()
  @IsDate()
  modified_at: Date;

  @IsNotEmpty()
  @ApiProperty()
  @IsDate()
  deleted_at: Date;
}
