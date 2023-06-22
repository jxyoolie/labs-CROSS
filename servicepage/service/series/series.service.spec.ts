import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });
  fit("Сума ряду для значення x = 0.1 y = 0.1",() => {
    let x = 0.1;
    let y = 0.1;
    let xy = service.getTab(x);
    let y1:number | undefined = 5;
    y1 = xy.get(x);
    if(y1 !== undefined){
      expect(y.toFixed(4)).toBe(y1.toFixed(4));
    }
});
});
