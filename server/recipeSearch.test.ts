import { describe, expect, it } from "vitest";
import { getRecipeById, recipeCorpus, searchRecipes } from "./recipeSearch";

describe("recipe search retrieval", () => {
  it("keeps the curated recipe corpus at 20 menus", () => {
    expect(recipeCorpus).toHaveLength(20);
  });

  it("ranks chicken recipes that match pantry garlic above unrelated recipes", () => {
    const result = searchRecipes("ไก่", ["กระเทียม"], { sort: "match" });

    expect(result.results.length).toBeGreaterThan(0);
    expect(result.results[0]?.id).toBe("pad-krapao-gai");
    expect(result.results[0]?.matchedIngredients).toContain("กระเทียม");
    expect(result.retrieval.method).toContain("pantry match");
  });

  it("supports vegetarian and under-15-minute filters", () => {
    const result = searchRecipes("", [], { diet: "vegetarian", time: "15" });

    expect(result.results).toHaveLength(1);
    expect(result.results[0]?.id).toBe("tofu-thai-nourish-bowl");
    expect(result.results[0]?.tags).toContain("vegetarian");
  });

  it("returns a recipe by id and null for an unknown id", () => {
    expect(getRecipeById("garlic-chicken-wok")?.title).toBe("ไก่กระเทียมพริกไทย");
    expect(getRecipeById("missing-recipe")).toBeNull();
  });
});
