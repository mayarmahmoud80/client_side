import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosFormsComponent } from './todos-forms.component';

describe('TodosFormsComponent', () => {
  let component: TodosFormsComponent;
  let fixture: ComponentFixture<TodosFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
