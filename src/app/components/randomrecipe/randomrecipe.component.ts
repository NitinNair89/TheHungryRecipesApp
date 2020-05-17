import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-randomrecipe',
  templateUrl: './randomrecipe.component.html',
  styleUrls: ['./randomrecipe.component.scss']
})
export class RandomrecipeComponent implements OnInit {

  mealThumb: string;
  mealName: string;
  mealIngredients = [];
  mealYoutubeLink: string;
  mealInstructions: string;

  randomMeal = {"meals":[{"idMeal":"52810","strMeal":"Osso Buco alla Milanese","strDrinkAlternate":null,"strCategory":"Miscellaneous","strArea":"Italian","strInstructions":"Heat the oven to 300 degrees.\r\nDredging the shanks: pour the flour into a shallow dish (a pie plate works nicely). Season the veal shanks on all sides with salt and pepper. One at a time, roll the shanks around in the flour coat, and shake and pat the shank to remove any excuses flour. Discard the remaining flour.\r\nBrowning the shanks: put the oil and 1 tablespoon of the butter in a wide Dutch oven or heavy braising pot (6 to 7 quart) and heat over medium-high heat. When the butter has melted and the oil is shimmering, lower the shanks into the pot, flat side down; if the shanks won\u2019t fit without touching one another, do this in batches. Brown the shanks, turning once with tongs, until both flat sides are well caramelized, about 5 minutes per side. If the butter-oil mixture starts to burn, lower the heat just a bit. Transfer the shanks to a large platter or tray and set aside.\r\nThe aromatics: pour off and discard the fat from the pot. Wipe out any burnt bits with a damp paper towel, being careful not to remove any delicious little caramelized bits. Ad the remaining 2 tablespoons butter to the pot and melt it over medium heat. When the butter has stopped foaming, add the onion, carrot, celery, and fennel. Season with salt and pepper, stir, and cook the vegetables until they begin to soften but do not brown, about 6 minutes. Stir in the garlic, orange zest, marjoram, and bay leaf, and stew for another minute or two.\r\nThe braising liquid: add the wine, increase the heat to high, and bring to a boil. Boil, stirring occasionally, to reduce the wine by about half, 5 minutes. Add the stock and tomatoes, with their juice, and boil again to reduce the liquid to about 1 cup total, about 10 minutes.\r\nThe braise: Place the shanks in the pot so that they are sitting with the exposed bone facing up, and pour over any juices that accumulated as they sat. Cover with parchment paper, pressing down so the parchment nearly touches the veal and the edges hang over the sides of the pot by about an inch. Cover tightly with the lid, and slide into the lower part of the oven to braise at a gentle simmer. Check the pot after the first 15 minutes, and if the liquid is simmering too aggressively, lower the oven heat by 10 or 15 degrees. Continue braising, turning the shanks and spooning some pan juices over the top after the first 40 minutes, until the meat is completely tender and pulling away from the bone, about 2 hours.\r\nThe gremolata: While the shanks are braising, stir together the garlic, parsley, and lemon zest in a small bowl. Cover with plastic wrap and set aside in a cool place (or the refrigerator, if your kitchen is very warm.)\r\nThe finish: When the veal is fork-tender and falling away from the bone, remove the lid and sprinkle over half of the gremolata. Return the veal to the oven, uncovered, for another 15 minutes to caramelize it some.\r\nUsing a slotted spatula or spoon, carefully lift the shanks from the braising liquid, doing your best to keep them intact. The shanks will be very tender and threatening to fall into pieces, and the marrow will be wobbly inside the bones, so this can be a bit tricky. But if they do break apart, don\u2019t worry, the flavor won\u2019t suffer at all. Arrange the shanks on a serving platter or other large plate, without stacking, and cover with foil to keep warm.\r\nFinishing the sauce: Set the braising pot on top of the stove and evaluate the sauce: if there is a visible layer of fat floating on the surface, use a large spoon to skim it off and discard it. Taste the sauce for concentration of flavor. If it tastes a bit weak or flat, bring it to a boil over high heat, and boil to reduce the volume and intensify the flavor for 5 to 10 minutes. Taste again for salt and pepper. If the sauce wants more zip, stir in a teaspoon or two of the remaining gremolata.\r\nPortioning the veal shanks: if the shanks are reasonably sized, serve one per person. If the shanks are gargantuan or you\u2019re dealing with modest appetites, pull apart the larger shanks, separating them at their natural seams, and serve smaller amounts. Be sure to give the marrow bones to whomever prizes them most.\r\nServing: Arrange the veal shanks on warm dinner plates accompanied by the risotto, if serving. Just before carrying the plates to the table, sprinkle on the remaining gremolata and then spoon over a generous amount of sauce \u2013 the contact with the hot liquid will aromatize the gremolata and perk up everyone\u2019s appetite with the whiff of garlic and lemon.","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wwuqvt1487345467.jpg","strTags":null,"strYoutube":"https:\/\/www.youtube.com\/watch?v=9GUTC2Qwrf0","strIngredient1":"Veal","strIngredient2":"Flour","strIngredient3":"Olive Oil","strIngredient4":"Butter","strIngredient5":"Onion","strIngredient6":"Carrot","strIngredient7":"Celery","strIngredient8":"Fennel","strIngredient9":"Garlic","strIngredient10":"Orange Zest","strIngredient11":"Marjoram","strIngredient12":"Bay Leaf","strIngredient13":"Dry White Wine","strIngredient14":"Chicken Stock","strIngredient15":"Tomatoes","strIngredient16":"Parsley","strIngredient17":"Garlic","strIngredient18":"Lemon Zest","strIngredient19":"","strIngredient20":"","strMeasure1":"4 meaty shanks","strMeasure2":"\u00bd cup","strMeasure3":"2 tablespoons ","strMeasure4":"3 tablespoons","strMeasure5":"1 medium chopped into \u00bd-inch pieces","strMeasure6":"1 chopped into \u00bd-inch pieces","strMeasure7":"1 chopped into \u00bd-inch pieces","strMeasure8":"1 bulb chopped into \u00bd-inch pieces","strMeasure9":"3 cloves","strMeasure10":"2 strips","strMeasure11":"1 \u00bd teaspoons","strMeasure12":"1","strMeasure13":"1 cup","strMeasure14":"\u00bd cup ","strMeasure15":"1 cup chopped with juice","strMeasure16":"2 tablespoons chopped","strMeasure17":"1 teaspoon minced","strMeasure18":"1 teaspoon grated ","strMeasure19":"","strMeasure20":"","strSource":"https:\/\/www.cookstr.com\/Meat\/Osso-Buco-alla-Milanese","dateModified":null}]}

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.fetchRandomRecipe();
  }

  fetchRandomRecipe(): void { 
    this.appService.getRandomMeal().subscribe(data => {
      data.meals.forEach(meal => {
        this.mealThumb = meal.strMealThumb;
        this.mealName = meal.strMeal;
        this.mealInstructions = meal.strInstructions;
        this.mealYoutubeLink = meal.strYoutube;

        for (let index = 1; index <= 20; index++) {
          let ingredient = 'strIngredient' + index;
          let measure = 'strMeasure' + index;
  
          if ( meal[ingredient] ) {
            this.mealIngredients.push( meal[ingredient] + ' - ' + meal[measure]);
          }
        }
      });
    });
  }
}