import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNormalModalComponent } from './first-normal-modal.component';

describe('FirstNormalModalComponent', () => {
  let component: FirstNormalModalComponent;
  let fixture: ComponentFixture<FirstNormalModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstNormalModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstNormalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
