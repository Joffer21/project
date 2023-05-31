import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeNumerComponent } from './change-numer.component';

describe('ChangeNumerComponent', () => {
  let component: ChangeNumerComponent;
  let fixture: ComponentFixture<ChangeNumerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeNumerComponent]
    });
    fixture = TestBed.createComponent(ChangeNumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
