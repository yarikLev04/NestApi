import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('First app')
      .setDescription('My first app')
      .setVersion('1.0')
      .build(),
  );

  SwaggerModule.setup('', app, document);

  await app.listen(3000);
}
bootstrap();
