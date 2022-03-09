import { TestBed } from '@angular/core/testing';

import { TodosmanagerService } from './todosmanager.service';

describe('TodosmanagerService', () => {
  let service: TodosmanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosmanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
