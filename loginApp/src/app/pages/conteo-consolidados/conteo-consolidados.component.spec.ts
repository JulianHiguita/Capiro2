import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteoConsolidadosComponent } from './conteo-consolidados.component';

describe('ConteoConsolidadosComponent', () => {
  let component: ConteoConsolidadosComponent;
  let fixture: ComponentFixture<ConteoConsolidadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteoConsolidadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteoConsolidadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
