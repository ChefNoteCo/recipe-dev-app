import Ingredient from '../models/Ingredient';

class IngredientsAPI {
  constructor() {
    ingredients = [
      Ingredient({
        id: 'ing123',
        name: 'Chocolate Whey Protein',
      }),
      Ingredient({
        id: 'ing456',
        name: 'Chocolate Chips',
      }),
    ];

    this.get = get.bind(this);
  }

  get() {
    return this.ingredients;
  }
}

export default IngredientsAPI;
