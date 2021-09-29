import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('costumers')
export class CostumersController {
    
    @Get(':id')
    findAllOne(@Param('id') id: string) {
        return `Cliente ${id}`
    }

    @Post()
    create(@Body() payload: any) {
        return {
            message: 'creating costumer',
            payload
        }
    }
}
