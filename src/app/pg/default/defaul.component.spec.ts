import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaulComponent } from './defaul.component';

describe('DefaulComponent', () => {
  let component: DefaulComponent;
  let fixture: ComponentFixture<DefaulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
