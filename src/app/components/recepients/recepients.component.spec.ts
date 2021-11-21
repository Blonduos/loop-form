import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepientsComponent } from './recepients.component';

describe('RecepientsComponent', () => {
  let component: RecepientsComponent;
  let fixture: ComponentFixture<RecepientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
