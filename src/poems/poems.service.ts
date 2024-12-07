import { Injectable } from "@nestjs/common"
import { PoemsRepository, ReadyPoem } from "./poems.repository"

export interface GetAllPoemsQueries {
  id?: number
  text?: string
  poetId?: number
}

@Injectable()
export class PoemsService {
  constructor(private peomsRepo: PoemsRepository) {}

  getAll(query?: GetAllPoemsQueries): ReadyPoem[] {
    return this.peomsRepo.getAll(query)
  }
}
