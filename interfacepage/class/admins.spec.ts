import { Admin } from './admins';

describe('Admin', () => {
  it('should create an instance', () => {
    expect(new Admin("")).toBeTruthy();
  });
});
