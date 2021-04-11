import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursOverViewComponent } from './tours-over-view.component';

describe('ToursOverViewComponent', () => {
  let component: ToursOverViewComponent;
  let fixture: ComponentFixture<ToursOverViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursOverViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursOverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
