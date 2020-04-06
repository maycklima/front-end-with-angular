import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent implements OnInit {

  @Input('nome') nomeDoCurso = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
