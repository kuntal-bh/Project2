import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients :Ingredient[];

  constructor(private shoppinservice : ShoppingListService) { }

  ngOnInit() {
   this.ingredients= this.shoppinservice.getIngredients();
   this.shoppinservice.ingredientsAdded.subscribe((ing :Ingredient[])=>{     
    this.ingredients = ing;
   })
  }
  
  getIngredient(){
   return this.shoppinservice.getIngredients();
  }

 
}
