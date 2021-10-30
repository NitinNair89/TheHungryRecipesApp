export class MealHelper {
  public static formattedIngredients(meal: any): string[] {
    const ingredients: string[] = [];
    const ingredientsLength = 20;

    for (let index = 1; index <= ingredientsLength; index++) {
      const ingredient = 'strIngredient' + index;
      const measure = 'strMeasure' + index;

      if (!!meal[ingredient]) {
        let description = meal[ingredient];
        description += !!meal[measure] ? ` - ${meal[measure]}` : '';

        ingredients.push(description);
      }
    }

    return ingredients;
  }
}
