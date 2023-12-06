import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVoyageComponent } from './list-voyage.component';

describe('ListVoyageComponent', () => {
  let component: ListVoyageComponent;
  let fixture: ComponentFixture<ListVoyageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListVoyageComponent]
    });
    fixture = TestBed.createComponent(ListVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
