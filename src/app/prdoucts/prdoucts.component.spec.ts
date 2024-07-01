import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdouctsComponent } from './prdoucts.component';

describe('PrdouctsComponent', () => {
  let component: PrdouctsComponent;
  let fixture: ComponentFixture<PrdouctsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrdouctsComponent]
    });
    fixture = TestBed.createComponent(PrdouctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
