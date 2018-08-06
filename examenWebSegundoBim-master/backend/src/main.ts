import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cookieParser = require('cookie-parser');
declare const module: any;

async function bootstrap() {
     const app = await NestFactory.create(AppModule);
     app.enableCors();
     app.use(cookieParser());
     await app.listen(3000);
    //
    // // wbpack
    // if (module.hot) {
    //     module.hot.accept();
    //     module.hot.dispose(() => app.close());
    //
    // }
}
bootstrap();
