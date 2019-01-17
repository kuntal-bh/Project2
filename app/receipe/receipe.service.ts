import { Injectable,EventEmitter } from '@angular/core';
import { Receipe } from './receipe-model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class ReceipeService {
   receipewasselected = new EventEmitter<Receipe>();
 private receipes :Receipe[] = [
    new Receipe('A Prawn Receipe','This is simple test','https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'
    ,[
      new Ingredient ('meat',1),
      new Ingredient('salt',1)
    ]),

    new Receipe ('Chicken Curry ', 'This is a chicken curry receipe','https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_010.jpg',
    [
      new Ingredient('chicken',1),
      new Ingredient('chillies',2)
    ])
  ];

  constructor(private shoppingListService : ShoppingListService) { }

  getReceipes(){
    return this.receipes.slice();
  }

  addIngtolist(ingredients :Ingredient[]) {
    this.shoppingListService.addIngredientsforshopping(ingredients);
  }
}
