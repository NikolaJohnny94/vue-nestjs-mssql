import { ValidationPipe, } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'


async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.setGlobalPrefix('api/v1')
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000)
  console.log('\nServer is running on http://localhost:3000/api/v1')
}
bootstrap();
