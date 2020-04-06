import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-two-away-data-bind',
  templateUrl: './two-away-data-bind.component.html',
  styleUrls: ['./two-away-data-bind.component.css']
})
export class TwoAwayDataBindComponent implements OnInit {
  
 
  pessoa:any = {
    nome:'mayck',
    sobrenome: 'lima'
  };
 
  constructor() { }

  ngOnInit(): void {
  }

}
