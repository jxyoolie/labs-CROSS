import { TestBed } from '@angular/core/testing';

import { ValidatorPhoneServiceService } from './phone-validator.service';

describe('ValidatorPhoneServiceService', () => {
  let service: ValidatorPhoneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorPhoneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Right +380505687552', () => {
    let s = service.validateMobileNumber("+380505687552")
    expect(s).toBe(true);
  })
  it('Wrong +555503658496', () => {
    let s = service.validateMobileNumber("+555503658496")
    expect(s).toBe(false);
  })
  it('Wrong кейс 57555', () => {
    let s = service.validateMobileNumber("57555")
    expect(s).toBe(false);
  })
});