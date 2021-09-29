import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
    // orders?order=1
    @Get('')
    getOrders(
        @Query('limit') limit = 200,
        @Query('offset') offset = 50,
        @Query('order') order: string) {
        return `products: limit=> ${limit} offset=>${offset} order=>${order}`;
    }

    @Post()
    create(@Body() payload: any) {
        return {
            message: 'Creating order',
            payload
        }
    }
}
