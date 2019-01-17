import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Receipe } from '../receipe-model';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
 receipes :Receipe[];

 
  constructor(private receipe : ReceipeService) { }

  ngOnInit() {
    this.receipes = this.receipe.getReceipes();
  }
  
}
