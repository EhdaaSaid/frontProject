import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountHalatComponent } from './count-halat.component';

describe('CountHalatComponent', () => {
  let component: CountHalatComponent;
  let fixture: ComponentFixture<CountHalatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountHalatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountHalatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
