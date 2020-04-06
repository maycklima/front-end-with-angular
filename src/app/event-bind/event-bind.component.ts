import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent implements OnInit {

  valorSalvo:string ='';
  digitado = '';
  isMouseOver:boolean = false;



  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver
  }

  getDigitado(evento: KeyboardEvent){
    this.digitado = (<HTMLInputElement>evento.target).value;
  }
  salvarValor(valor){
    this.valorSalvo = valor
  }
  
 

  constructor() { }

  ngOnInit(): void {
  }

}
