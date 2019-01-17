import { Component, OnInit, Input , EventEmitter,Output} from '@angular/core';
import { Receipe } from '../../receipe-model';
import { ReceipeService } from '../../receipe.service';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
 @Input() receipeitem:Receipe;
 
  constructor(private receipes : ReceipeService) { }

  ngOnInit() {
  }
  showdetails()
  {
    
    this.receipes.receipewasselected.emit(this.receipeitem)
  }
}
