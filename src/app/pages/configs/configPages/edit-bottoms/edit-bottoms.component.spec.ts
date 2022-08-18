import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBottomsComponent } from './edit-bottoms.component';

describe('EditBottomsComponent', () => {
  let component: EditBottomsComponent;
  let fixture: ComponentFixture<EditBottomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBottomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBottomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
