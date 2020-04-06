import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  templateUrl: './interpolacao.component.html',
  styleUrls: ['./interpolacao.component.css']
})
export class InterpolacaoComponent implements OnInit {

  urlImage = 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/2/5/7/4/2574f9070ce48b988fe2693a60c40427.jpg';
  
  @Input() variavelInput:'Texto Inputado'
  
  getValue(){
    return 1+1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
