import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

    @Get(':id/products/:productId')
    getCategory(@Param('productId') productId: string, @Param('id') id: string) {
        return `product ${productId} and ${id}`;
    }

    @Post()
    create(@Body() payload: any) {
        return {
            message: 'creating categorie',
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
