import { Controller, Get } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
    @Get()
    findAll() {
        return 'Retorna marcas';
    }
}
