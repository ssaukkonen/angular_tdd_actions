import { TestBed } from '@angular/core/testing';

import { CatsService } from './cats.service';
import { CatDisplay } from './catdisplay';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of CatDisplays', () => {
    let result: CatDisplay[];
    result = service.getAllCatDisplays();
    expect(result).toEqual(service.catDisplayList);
  });

  it('should return CatDisplay with name', () => {
    let result: any
    result = service.getCatDisplayById(0);
    expect(result).toEqual(service.catDisplayList[0]);
  });
});
