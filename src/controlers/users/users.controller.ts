import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll() {
        return 'Retorna usuarios';
    }

    @Post()
    create(@Body() payload: any) {
        return {
            message: 'Creating users',
            payload
        }
    }
}
