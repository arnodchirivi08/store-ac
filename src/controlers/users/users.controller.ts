import { Body, Controller, Delete, Get, Param, Post, HttpStatus, HttpCode } from '@nestjs/common';

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
