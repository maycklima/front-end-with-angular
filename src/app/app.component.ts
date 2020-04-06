import { Router, RouterModule, Params, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, NgZone, enableProdMode } from '@angular/core'; 
enableProdMode();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})  
export class AppComponent {
  aba = 'home'
}
