import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstGlobalModalComponent } from './first-global-modal.component';

describe('FirstGlobalModalComponent', () => {
  let component: FirstGlobalModalComponent;
  let fixture: ComponentFixture<FirstGlobalModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstGlobalModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstGlobalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
