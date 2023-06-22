import { Worker } from './worker';
import { Team } from './team';
import { Engineer} from './engineer';
import { Admin } from './admins';

describe('Team', () => {
  let worker: Worker ;
  let eng: Engineer;
  let admin: Admin;
  let team: Team;
  beforeEach(() => {
    worker = new Worker ("Ольга Васильчук");
    eng = new Engineer("Василь Інженер");
    admin = new Admin("Ігор Адмін");
    teaml = new Team();
  })
  fit("Creating Worker ", () => {
    expect(worker).toBeTruthy();
  })
  fit("Creating Engineer", () => {
    expect(eng).toBeTruthy();
  })
  fit("Creating Admin", () => {
    expect(admin).toBeTruthy();
  })
  fit("Creating Team", () => {
    expect(team).toBeTruthy();
  })
});
