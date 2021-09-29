import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, Redirect } from '@nestjs/common';

@Controller('products')
export class ProductsController {


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
        return { message: `products: limit=> ${limit} offset=>${offset} brand=>${brand}` }
    }

    /*Parametros */
    @Get(':productId')
    getProduct(@Param('productId') productId: any) {
        return { message: `Product ${productId}` };
    }

    @Post()
    @HttpCode(202)
    // @Header('Cache-control', 'none')
    create(@Body() payload: any) {
        return {
            message: 'Esta acción agrega un nuevo gato.',
            payload
        };
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: any) {
        return {
            id,
            payload
        }
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return id;
    }
}
