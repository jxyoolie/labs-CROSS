import { Transport } from './transport';
import { Boat } from './boat';

describe ('Boat Testing', () =>{
  let boat:Boat;
  beforeEach(() =>
  {
    boat = new Boat("Boat", 13)
  }
  )
  fit("Створення екземпляру класу", ()=>{
    expect(boat).toBeTruthy();
  })
  fit("Перевірка getPrice() для k = 13", ()=>{
    let price = 13*13*5;
    expect(boat.getPrice()).toBe(price);
  })
  fit("Перевірка getName()", ()=>{
    expect(boat.getName()).toBe("Boat");
  })
  fit("Перевірка show()", ()=>{
    expect(boat.show()).toBe("Назва = " + "Boat");
  })
});
