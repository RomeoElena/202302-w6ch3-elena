/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */

import { CharacterStructure } from "../../models/characters";

export interface CharacterApiRepoStructure {
  loadCharacters(): Promise<CharacterStructure[]>;
  updateCharacter(
    name: CharacterStructure["name"]
  ): Promise<CharacterStructure>;
}

export class CharacterApiRepo {
  url: string;
  constructor() {
    this.url = "http://localhost:5080/character";
  }

  async loadCharacter(): Promise<CharacterStructure[]> {
    const resp = await fetch(this.url);
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as CharacterStructure[];
    return data;
  }

  async updateCharacter(
    character: CharacterStructure
  ): Promise<CharacterStructure> {
    const url = this.url + "/" + character.name;
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(character),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as CharacterStructure;
    return data;
  }
}
