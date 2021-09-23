import { Controller, Get, Header, HttpCode, Param, Post, Query, Redirect } from '@nestjs/common';

@Controller('products')
export class ProductsController {


    /*Ruta comodines, tener en cuenta que se debe colocar al principio*/
    @Get('ab*cd')
    // @Redirect('https://nestjs.com', 301)
    findAllOne() {
        return 'Esta ruta usa un comodín';
    }

    /*Todas las rutas que no sean dinamicas deben estar al principio */
    @Get('filter')
    getProductFilter() {
        return `Yo soy un filter`;
    }

    /*Parametros tipo query*/
    @Get('')
    getProducts(
        @Query('limit') limit = 200,
        @Query('offset') offset = 50,
        @Query('brand') brand: string) {
        return `products: limit=> ${limit} offset=>${offset} brand=>${brand}`;
    }

    /*Parametros */
    @Get(':productId')
    getProduct(@Param('productId') productId: any) {
        return `Product ${productId}`;
    }

    @Post()
    @HttpCode(202)
    // @Header('Cache-control', 'none')
    create() {
        return 'Esta acción agrega un nuevo gato.';
    }
}
