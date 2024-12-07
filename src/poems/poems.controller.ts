import { Controller, Get, Query } from "@nestjs/common"
import { ApiQuery } from "@nestjs/swagger"
import { GetAllPoemsQueries, PoemsService } from "./poems.service"

@Controller("poems")
export class PoemsController {
  constructor(private poemsService: PoemsService) {}

  @Get()
  @ApiQuery({ name: "id", required: false })
  @ApiQuery({ name: "text", required: false })
  @ApiQuery({ name: "poetId", required: false })
  getAll(
    // Query Params...
    @Query("id") id?: string,
    @Query("text") text?: string,
    @Query("poetId") poetId?: string,
  ) {
    const final: GetAllPoemsQueries = {}
    if (id) final.id = Number(id)
    if (poetId) final.poetId = Number(poetId)
    if (text) final.text = text

    return this.poemsService.getAll(final)
  }
}
