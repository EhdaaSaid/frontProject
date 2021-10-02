import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHallaComponent } from './add-halla.component';

describe('AddHallaComponent', () => {
  let component: AddHallaComponent;
  let fixture: ComponentFixture<AddHallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHallaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
