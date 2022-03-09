import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDefultComponent } from './home-defult.component';

describe('HomeDefultComponent', () => {
  let component: HomeDefultComponent;
  let fixture: ComponentFixture<HomeDefultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDefultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDefultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
