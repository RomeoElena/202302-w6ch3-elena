import { CharacterApiRepo } from "./character.api.repo";

describe("Given the CharacterApiRepo", () => {
  describe("When we call the loadCharacter", () => {
    let repo: CharacterApiRepo;
    beforeEach(() => {
      repo = new CharacterApiRepo();
    });
    test("Then it should load the mock characters", async () => {
      const mock = {
        name: "Jaime",
        family: "Lannister",
        age: 22,
        isAlive: true,
        message: `I first punch then I ask.`,
        category: "fighter",
        weapon: "Punzón",
        skill: 8.5,
      };
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ data: [] }),
      });
      const result = await repo.loadCharacter();
      expect(result).toEqual({ data: [] });
    });
    test("rejects to error", async () => {
      await expect(Promise.reject(new Error("error"))).rejects.toThrow("error");
    });
  });
});
