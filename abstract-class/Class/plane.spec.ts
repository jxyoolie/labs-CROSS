import { Plane } from './plane';

describe('Plane testing', () => {
  let plane:Plane;
  beforeEach(() =>
  {
    plane = new Plane("Plane", 13)
  }
  )
  fit("Створення екземпляру класу", ()=>{
    expect(plane).toBeTruthy();
  })
  fit("Перевірка getPrice() для h=10, v=10", ()=>{
    let price = Math.ceil(100 * 10 * 10);
    expect(plane.getPrice()).toBe(price);
  })
  fit("Перевірка getName()", ()=>{
    expect(plane.getName()).toBe("Plane");
  })
  fit("Перевірка show()", ()=>{
    expect(plane.show()).toBe("Назва = " + "Plane");
  })
});
