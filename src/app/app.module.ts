import { Module } from "@nestjs/common"
import { PoemsModule } from "../poems/poems.module"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"

@Module({
  imports: [PoemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
