/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';


export class PaginationQueryDto {
  @ApiPropertyOptional({ description: 'Number of itens to return' })
  @IsOptional()
  @IsPositive()
  limit: number;

  @ApiPropertyOptional({ description: 'Page number' })
  @IsOptional()
  @IsPositive()
  offset: number;
}
