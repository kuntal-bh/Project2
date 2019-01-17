import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredients : Ingredient[]
  
  constructor(private shoppingservice :ShoppingListService) { }

  ngOnInit() {
  }

  onAdd(inputname:HTMLInputElement, inputamount:HTMLInputElement)
  {
    const name = inputname.value;
    const amount = inputamount.valueAsNumber;
    const newIngredient = new Ingredient(name,amount);
    this.shoppingservice.addIngredients(newIngredient);
  }

}
