import { Controller, Get, Param } from '@nestjs/common';

@Controller('costumers')
export class CostumersController {
    
    @Get(':id')
    findAllOne(@Param('id') id: string) {
        return `Cliente ${id}`
    }
}
