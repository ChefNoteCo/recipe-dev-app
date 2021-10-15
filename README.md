## State Structure
### State
```
{
  recipes: {
    recent: [
      { /* recipe metadata */, [ingredients], [instructions] }
    ],
    all: [
      { /* recipe detail */ }
    ]
  ],
  ingredients: [
    { /* ingredient detail */ }
  ]
}
```

### Actions
* recipeAdded, payload: Recipe
* recipeChanged, payload: Recipe
* recipeIngredientsChanged, payload: [ingredients]
* recipeInstructionsChanged, payload: [instructions]
* ingredientAdded, payload: Ingredient
* viewRecipe, payload: Recipe (push to recent, pop oldest)


## LocalStorage Structure
```
{
  recipes: [Recipe],
  recentRecipes: [RecipeMetadata],
  ingredients: [Ingredients]
}
```