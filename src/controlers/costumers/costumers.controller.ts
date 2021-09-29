import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

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

    update(@Param('id') id: number, payload: any) {
        return {
            id,
            payload
        }
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return {
            id
        }
    }
}
