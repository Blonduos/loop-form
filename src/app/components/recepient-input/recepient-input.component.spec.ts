import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepientInputComponent } from './recepient-input.component';

describe('RecepientInputComponent', () => {
  let component: RecepientInputComponent;
  let fixture: ComponentFixture<RecepientInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepientInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepientInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
