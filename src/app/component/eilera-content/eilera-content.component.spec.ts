import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EileraContentComponent } from './eilera-content.component';

describe('EileraContentComponent', () => {
  let component: EileraContentComponent;
  let fixture: ComponentFixture<EileraContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EileraContentComponent]
    });
    fixture = TestBed.createComponent(EileraContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
