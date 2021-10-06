import {
    Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, Redirect, HttpStatus,
    Res
} from '@nestjs/common';
import { Response } from 'express';

import { ProductsService } from '../../services/products/products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {

    }

    /*Ruta comodines, tener en cuenta que se debe colocar al principio*/
    @Get('ab*cd')
    // @Redirect('https://nestjs.com', 301)
    findAllOne() {
        return { message: 'Esta ruta usa un comodín' };
    }

    /*Todas las rutas que no sean dinamicas deben estar al principio */
    @Get('filter')
    getProductFilter() {
        return { message: `Yo soy un filter` };
    }

    /*Parametros tipo query*/
    @Get('')
    getProducts(
        @Query('limit') limit = 200,
        @Query('offset') offset = 50,
        @Query('brand') brand: string) {
        return this.productsService.findAll();
    }

    /*Parametros */
    /*uso de codigos de estado */
    @Get(':productId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(@Param('productId') productId: number) {
        // response.status(200).send({
        //     message: `product ${productId}`
        // })
        return this.productsService.findOne(+productId);
    }

    @Post()
    @HttpCode(202)
    // @Header('Cache-control', 'none')
    create(@Body() payload: any) {
        return this.productsService.create(payload);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: any) {
        return this.productsService.update(+id, payload);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return id;
    }
}
