import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaDeSelecaoComponent } from './caixa-de-selecao.component';

describe('CaixaDeSelecaoComponent', () => {
  let component: CaixaDeSelecaoComponent;
  let fixture: ComponentFixture<CaixaDeSelecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaDeSelecaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaDeSelecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
