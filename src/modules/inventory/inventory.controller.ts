import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { InventoryService } from './inventory.service';

@Controller('inventory')
@ApiTags('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  // 取得全部庫存資料
  @Get()
  @ApiOperation({ summary: '取得全部庫存資料' })
  async findAllInventories() {}

  // 取得單一庫存資料
  @Post('/:id')
  @ApiOperation({ summary: '取得單一庫存資料' })
  async findInventoryById() {}
}
