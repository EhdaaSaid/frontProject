import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SahbItemComponent } from './sahb-item.component';

describe('SahbItemComponent', () => {
  let component: SahbItemComponent;
  let fixture: ComponentFixture<SahbItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SahbItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SahbItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
