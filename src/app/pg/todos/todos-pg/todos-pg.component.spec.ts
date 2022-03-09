import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosPgComponent } from './todos-pg.component';

describe('TodosPgComponent', () => {
  let component: TodosPgComponent;
  let fixture: ComponentFixture<TodosPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosPgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
