import { Module } from "@nestjs/common"
import { PoemsController } from "./poems.controller"
import { PoemsRepository } from "./poems.repository"
import { PoemsService } from "./poems.service"

@Module({
  controllers: [PoemsController],
  providers: [PoemsService, PoemsRepository],
})
export class PoemsModule {}
