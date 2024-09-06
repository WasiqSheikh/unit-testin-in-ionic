import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  afterEach(() => {
    localStorage.removeItem('todos');
    //service = null;
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return an empty object', () => {
    expect(service.getTodos()).toEqual({});
  });
  it('should return 5', () => {
    const a = 2;
    const b =3;
    expect(service.add(a,b)).toEqual(5);
  } )
});
