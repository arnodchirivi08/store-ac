import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
    @Get()
    findAll() {
        return 'Retorna marcas';
    }

    @Post()
    create(@Body() payload: any) {
        return {
            message: 'Creating brand',
            payload
        }
    }

    @Put(':id')
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
