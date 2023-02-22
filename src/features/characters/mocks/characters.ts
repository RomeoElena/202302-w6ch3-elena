import { CharacterStructure } from "../models/characters";

type MockData = { data: CharacterStructure[] };
export const mockCharacters = async (): Promise<MockData> => ({
  data: [
    {
      name: "Joffrey",
      family: "Barathon",
      age: 23,
      isAlive: true,
      message: `I first punch then I ask.`,
      category: "king",
      kingdomYears: 4,
      weapon: "Mollete",
      skill: 7.8,
    },
    {
      name: "Jaime",
      family: "Lannister",
      age: 22,
      isAlive: true,
      message: `I first punch then I ask.`,
      category: "fighter",
      weapon: "Punzón",
      skill: 8.5,
    },
    {
      name: "Daenerys",
      family: "Polo",
      age: 45,
      isAlive: true,
      message: `Here, I am!`,
      category: "fighter",
      skill: 6,
    },
    {
      name: "Husk",
      family: "Boro",
      age: 23,
      isAlive: true,
      message: `I'm lost!`,
      category: "fighter",
      kingdomYears: 4,
      weapon: "Mollete",
      skill: 7.8,
    },
    {
      name: "Pepe",
      family: "Gomez",
      age: 23,
      isAlive: true,
      message: `I first punch then I ask.`,
      category: "king",
      kingdomYears: 4,
      weapon: "Palo",
      skill: 7.8,
    },
  ],
});
