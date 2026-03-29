import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.useGlobalPipes(new ValidationPipe())
    const config = new DocumentBuilder()
        .setTitle('Tu zona tienda API')
        .setDescription('API para la aplicación de tu zona tienda')
        .setVersion('1.0')
        .build()
    const documentFactory = () => SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api/docs', app, documentFactory)
    await app.listen(process.env.APP_PORT ?? 3000)
}
bootstrap()
