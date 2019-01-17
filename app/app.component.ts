import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedfeature = 'shoppinglist'
  onNavigate(feature : string)
  {
    this.loadedfeature = feature
  }
}
