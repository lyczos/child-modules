import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAuthorizedModalComponent } from './first-authorized-modal.component';

describe('FirstAuthorizedModalComponent', () => {
  let component: FirstAuthorizedModalComponent;
  let fixture: ComponentFixture<FirstAuthorizedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstAuthorizedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstAuthorizedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
