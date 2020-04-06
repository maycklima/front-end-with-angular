import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor = 0;

  @ViewChild('campoInput') campoValorInput: ElementRef;

  incrementa(){
    if(this.valor < 10){
      //console.log(this.campoValorInput)
      console.log(this.valor);
      this.valor++; 
    }        
  }
  
  decrementa(){
    if(this.valor > 0)
    {
      console.log(this.valor);
      this.valor--;
    }
  }
  constructor() { }

  ngOnInit(): void {}
}