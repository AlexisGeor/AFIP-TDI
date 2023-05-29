import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotorComponent } from './automotor.component';

describe('AutomotorComponent', () => {
  let component: AutomotorComponent;
  let fixture: ComponentFixture<AutomotorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomotorComponent]
    });
    fixture = TestBed.createComponent(AutomotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
