import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { AppModule } from "./app/app.module"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Enable CORS
  app.enableCors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })

  // Swagger Docs
  const config = new DocumentBuilder()
    .setTitle("Poems")
    .setDescription("Poems API to use in your apps 😉")
    .setVersion("3.0")
    .addTag("poem")
    .build()
  const docFactory = () => SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("docs", app, docFactory)

  await app.listen(3000, "0.0.0.0")
}
bootstrap()
