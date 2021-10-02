import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHalaComponent } from './edit-hala.component';

describe('EditHalaComponent', () => {
  let component: EditHalaComponent;
  let fixture: ComponentFixture<EditHalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
