import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHAlatComponent } from './my-halat.component';

describe('MyHAlatComponent', () => {
  let component: MyHAlatComponent;
  let fixture: ComponentFixture<MyHAlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHAlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHAlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
