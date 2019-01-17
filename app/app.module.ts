import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ReceipeComponent } from './receipe/receipe.component';
import { ReceipeDetailComponent } from './receipe/receipe-detail/receipe-detail.component';
import { ReceipeListComponent } from './receipe/receipe-list/receipe-list.component';
import { ReceipeItemComponent } from './receipe/receipe-list/receipe-item/receipe-item.component';
import { ShoppingEditComponent } from './shoppinglist/shopping-edit/shopping-edit.component';
import { DropdownDirectiveDirective } from './shared/dropdown-directive.directive';
import { ReceipeService } from './receipe/receipe.service';
import { ShoppingListService } from './shoppinglist/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppinglistComponent,
    ReceipeComponent,
    ReceipeDetailComponent,
    ReceipeListComponent,
    ReceipeItemComponent,
    ShoppingEditComponent,
    DropdownDirectiveDirective
    
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [ReceipeService,ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
