import { Component, OnInit } from '@angular/core';
import { Receipe } from './receipe-model';
import { ReceipeService } from './receipe.service';

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css']
})
export class ReceipeComponent implements OnInit {
  receipeselected : Receipe
  constructor(private receipe :ReceipeService) { }

  ngOnInit() {
    this.receipe.receipewasselected.subscribe((receipe:Receipe)=>{
      this.receipeselected = receipe;
    })
  }

}
