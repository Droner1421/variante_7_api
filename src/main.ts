import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {json, urlencoded} from  'body-parser';


const conexion = async () => {

  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:8081',
      'http://10.38.82.190:8081',


    ],
      methods: "GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS",
      credentials: true

  });

  app.use(json({limit: '100mb'}));
  app.use(urlencoded({limit: '100mb', extended: true}));
  app.setGlobalPrefix('api/formulario');
  await app.listen(3000);
}


conexion();