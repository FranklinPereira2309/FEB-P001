import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarApiComponent } from './buscar-api.component';

describe('BuscarApiComponent', () => {
  let component: BuscarApiComponent;
  let fixture: ComponentFixture<BuscarApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
