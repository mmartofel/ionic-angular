import { Injectable } from '@angular/core';
import { Recipes } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  
  private recipes: Recipes[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/440px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      ingradients: ['French Fries','Pork  Meat','Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageURL: 'https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg',
      ingradients: ['Pasta','Tomato Sauce','Parmigiano']
    }
  ]

  constructor() { }

  getAllRecepies() {
    return [...this.recipes];
  }

  getRecepi(recipeId: string) {
    return { 
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
  };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recepie => {
      return recepie.id !== recipeId;
    });
  }
}
