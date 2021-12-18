import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { AppController } from './app.controller'

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot()],
  controllers: [AppController]
})
export class AppModule { }
