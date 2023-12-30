import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualTaskCardComponent } from './individual-task-card.component';

describe('IndividualTaskCardComponent', () => {
  let component: IndividualTaskCardComponent;
  let fixture: ComponentFixture<IndividualTaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualTaskCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
