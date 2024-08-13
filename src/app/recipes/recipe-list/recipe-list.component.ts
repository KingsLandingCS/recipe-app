import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://get.pxhere.com/photo/food-cuisine-ingredient-dish-recipe-tableware-garnish-culinary-art-finger-food-fast-food-dessert-plate-snack-baked-goods-meal-side-dish-dairy-condiment-comfort-food-junk-food-breakfast-delicacy-Chiboust-cream-american-food-sandwich-hot-dog-Breakfast-roll-kitchen-utensil-cake-decorating-staple-food-la-carte-food-produce-buttercream-cooking-icing-cream-italian-food-bavarian-cream-brunch-al-dente-mediterranean-food-1636540.jpg"),
    new Recipe("A Test Recipe", "This is simply a test", "https://get.pxhere.com/photo/food-cuisine-ingredient-dish-recipe-tableware-garnish-culinary-art-finger-food-fast-food-dessert-plate-snack-baked-goods-meal-side-dish-dairy-condiment-comfort-food-junk-food-breakfast-delicacy-Chiboust-cream-american-food-sandwich-hot-dog-Breakfast-roll-kitchen-utensil-cake-decorating-staple-food-la-carte-food-produce-buttercream-cooking-icing-cream-italian-food-bavarian-cream-brunch-al-dente-mediterranean-food-1636540.jpg"),
  ];
}
