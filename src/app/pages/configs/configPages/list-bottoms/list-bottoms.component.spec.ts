import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBottomsComponent } from './list-bottoms.component';

describe('ListBottomsComponent', () => {
  let component: ListBottomsComponent;
  let fixture: ComponentFixture<ListBottomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBottomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBottomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
