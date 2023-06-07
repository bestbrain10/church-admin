import { ApiProperty } from '@nestjs/swagger';
import {
  IsMongoId,
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class NewAdminDTO {
  @IsMongoId()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly member: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty()
  readonly resetOld: boolean = true;
}

export class NewAdminResponse {
  @ApiProperty()
  secret: string;

  @ApiProperty()
  url: string;
}
