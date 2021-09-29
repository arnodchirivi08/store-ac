import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
    @Get()
    findAll() {
        return 'Retorna marcas';
    }

    @Post()
    create(@Body() payload: any){
        return {
            message: 'Creating brand',
            payload
        }
    }
}
