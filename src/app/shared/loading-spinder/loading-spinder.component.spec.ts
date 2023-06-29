import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSpinderComponent } from './loading-spinder.component';

describe('LoadingSpinderComponent', () => {
  let component: LoadingSpinderComponent;
  let fixture: ComponentFixture<LoadingSpinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingSpinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSpinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
