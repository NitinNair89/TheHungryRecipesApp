import { MealHelper } from './meal.helper';

describe('MealHelper', () => {
  it('should return a list with 20 ingredients', () => {
    // prepare
    const mockedMeal = {
      strIngredient1: 'Butter',
      strIngredient2: 'Bacon',
      strIngredient3: 'Onion',
      strIngredient4: 'Garlic Clove',
      strIngredient5: 'Brussels Sprouts',
      strIngredient6: 'Potatoes',
      strIngredient7: 'Random',
      strIngredient8: 'Random1',
      strIngredient9: 'Random2',
      strIngredient10: 'Random3',
      strIngredient11: 'Random4',
      strIngredient12: 'Random5',
      strIngredient13: 'Random6',
      strIngredient14: 'Random7',
      strIngredient15: 'Random8',
      strIngredient16: 'Random9',
      strIngredient17: 'Random10',
      strIngredient18: 'Random11',
      strIngredient19: 'Random12',
      strIngredient20: 'Random13',
      strIngredient21: 'Random13',
      strMeasure1: '1 tbs',
      strMeasure2: '4',
      strMeasure3: '1 finely sliced',
      strMeasure4: '1 chopped',
      strMeasure5: '20',
      strMeasure6: '400g',
      strMeasure7: '400g',
      strMeasure8: '400g',
      strMeasure9: '400g',
      strMeasure10: '400g',
      strMeasure11: '400g',
      strMeasure12: '400g',
      strMeasure13: '400g',
      strMeasure14: '400g',
      strMeasure15: '400g',
      strMeasure16: '400g',
      strMeasure17: '400g',
      strMeasure18: '400g',
      strMeasure19: '400g',
      strMeasure20: '400g',
      strMeasure21: '400g',
    };

    // exec
    const formattedIngredients = MealHelper.formattedIngredients(mockedMeal);

    // check
    expect(formattedIngredients.length).toBe(20);
  });

  it('should ignore empty ingredients and measures', () => {
    // prepare
    const mockedMeal = {
      strIngredient1: 'Butter',
      strIngredient2: 'Bacon',
      strIngredient3: '',
      strIngredient4: '',
      strMeasure1: '',
      strMeasure2: '4',
      strMeasure3: '400g',
      strMeasure4: '',
    };

    // exec
    const formattedIngredients = MealHelper.formattedIngredients(mockedMeal);

    // check
    expect(formattedIngredients.length).toBe(2);
    expect(formattedIngredients[0]).toBe('Butter');
    expect(formattedIngredients[1]).toBe('Bacon - 4');
  });

  it('should format correctly', () => {
    // prepare
    const mockedMeal = {
      strIngredient1: '',
      strIngredient2: 'Bacon',
      strIngredient3: '',
      strIngredient4: 'Garlic Clove',
      strIngredient5: 'Brussels Sprouts',
      strMeasure1: '',
      strMeasure2: '4',
      strMeasure3: '',
      strMeasure4: '1 chopped',
      strMeasure5: '20',
    };

    // exec
    const formattedIngredients = MealHelper.formattedIngredients(mockedMeal);

    // check
    expect(formattedIngredients.length).toBe(3);
  });
});
