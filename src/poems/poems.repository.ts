import { Injectable } from "@nestjs/common"
import { Poem, Poet, poems, poets } from "src/assets/poems"

export interface ReadyPoem {
  id: number
  couplets: string[]
  poet: Poet
}

@Injectable()
export class PoemsRepository {
  private poemToReadyPoem({ id, couplets, poetId }: Poem): ReadyPoem {
    const poet = poets.find(p => p.id === poetId)

    return { id, couplets, poet }
  }

  getAll(query?: Partial<{ id: number; text: string; poetId: number }>): ReadyPoem[] {
    let filteredPoems = [...poems]

    if (query.id) {
      filteredPoems = filteredPoems.filter(p => p.id === query.id)
    }

    if (query.text) {
      filteredPoems = filteredPoems.filter(p => p.couplets.join(" ").includes(query.text))
    }

    if (query.poetId) {
      filteredPoems = filteredPoems.filter(p => p.poetId === query.poetId)
    }

    const readyPoems = filteredPoems.map(this.poemToReadyPoem)

    return readyPoems
  }
}
