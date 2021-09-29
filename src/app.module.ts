import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controlers/products/products.controller';
import { CategoriesController } from './controlers/categories/categories.controller';
import { OrdersController } from './controlers/orders/orders.controller';
import { UsersController } from './controlers/users/users.controller';
import { CostumersController } from './controlers/costumers/costumers.controller';
import { BrandsController } from './controlers/brands/brands.controller';
import { ProductsService } from './services/products/products.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, OrdersController, UsersController, CostumersController, BrandsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
