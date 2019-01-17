import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsAdded = new EventEmitter<Ingredient[]>();
  ingredients : Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes',10)
  ]
  constructor() { }

  getIngredients () {
    return this.ingredients.slice();
  }

  addIngredients(ingredient :Ingredient){
    this.ingredients.push(ingredient);    
   this.ingredientsAdded.emit(this.ingredients.slice())
  }
  addIngredientsforshopping(ingredientsarray:Ingredient[]){
    this.ingredients.push(...ingredientsarray);
    this.ingredientsAdded.emit(this.ingredients.slice())
  }
}
