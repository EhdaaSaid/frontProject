import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaddrComponent } from './addaddr.component';

describe('AddaddrComponent', () => {
  let component: AddaddrComponent;
  let fixture: ComponentFixture<AddaddrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddaddrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaddrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
