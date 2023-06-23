import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShppingListComponent } from './shpping-list.component';

describe('ShppingListComponent', () => {
  let component: ShppingListComponent;
  let fixture: ComponentFixture<ShppingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShppingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
