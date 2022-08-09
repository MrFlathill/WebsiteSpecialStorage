import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankLogicComponent } from './tank-logic.component';

describe('TankLogicComponent', () => {
  let component: TankLogicComponent;
  let fixture: ComponentFixture<TankLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankLogicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TankLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
