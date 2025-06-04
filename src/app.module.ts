import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'gardy',
      database: 'nest_user',
      autoLoadEntities: true,
      synchronize: true, // ❗ Set to false in production and use migrations
    }),
    UsersModule,
  ],
})
export class AppModule {}
