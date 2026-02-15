import {
  BULBASAUR_MOCK,
  CHARMANDER_MOCK,
  SQUIRTLE_MOCK,
} from "./mocks/pokemon-mocks";

describe("Pokémon Types", () => {
  it("Bulbasaur should be a Grass type", () => {
    expect(BULBASAUR_MOCK.pokemon).not.toBeNull();
    expect(BULBASAUR_MOCK.pokemon!.types).toContain("Grass");
  });

  it("Charmander should be a Fire type", () => {
    expect(CHARMANDER_MOCK.pokemon).not.toBeNull();
    expect(CHARMANDER_MOCK.pokemon!.types).toContain("Fire");
  });

  it("Squirtle should be a Water type", () => {
    expect(SQUIRTLE_MOCK.pokemon).not.toBeNull();
    expect(SQUIRTLE_MOCK.pokemon!.types).toContain("Water");
  });

  it("Bulbasaur should have the correct name and number", () => {
    expect(BULBASAUR_MOCK.pokemon!.name).toBe("Bulbasaur");
    expect(BULBASAUR_MOCK.pokemon!.number).toBe("001");
  });

  it("Charmander should have the correct name and number", () => {
    expect(CHARMANDER_MOCK.pokemon!.name).toBe("Charmander");
    expect(CHARMANDER_MOCK.pokemon!.number).toBe("004");
  });

  it("Squirtle should have the correct name and number", () => {
    expect(SQUIRTLE_MOCK.pokemon!.name).toBe("Squirtle");
    expect(SQUIRTLE_MOCK.pokemon!.number).toBe("007");
  });

  it("each Pokémon should have attacks defined", () => {
    const mocks = [BULBASAUR_MOCK, CHARMANDER_MOCK, SQUIRTLE_MOCK];

    mocks.forEach((mock) => {
      expect(mock.pokemon!.attacks).toBeDefined();
      expect(mock.pokemon!.attacks.fast.length).toBeGreaterThan(0);
      expect(mock.pokemon!.attacks.special.length).toBeGreaterThan(0);
    });
  });

  it("each Pokémon should have evolutions", () => {
    const mocks = [BULBASAUR_MOCK, CHARMANDER_MOCK, SQUIRTLE_MOCK];

    mocks.forEach((mock) => {
      expect(mock.pokemon!.evolutions).not.toBeNull();
      expect(mock.pokemon!.evolutions!.length).toBeGreaterThan(0);
    });
  });
});
