import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { CartModule } from './modules/cart/cart.module';
import { ChatGateway } from './webSocket/webSocket.gateway';
import { ProductModule } from './modules/product/product.module';

import { UserEntity } from './entities/user-entity';

@Module({
  imports: [
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      autoLoadEntities: true,
      entities: [UserEntity],
      synchronize: true,
    }),
    CartModule,
    ProductModule,
  ],
  controllers: [],
  providers: [ChatGateway],
})
export class AppModule {}
