import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { InterpolacaoComponent } from './interpolacao/interpolacao.component';
import { CaixaDeSelecaoComponent } from './caixa-de-selecao/caixa-de-selecao.component';
import { TwoAwayDataBindComponent } from './two-away-data-bind/two-away-data-bind.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    InterpolacaoComponent,
    CaixaDeSelecaoComponent,
    TwoAwayDataBindComponent,
    DiretivaNgforComponent,
    DiretivaNgifComponent,
    EventBindComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
