import { Dish } from "../interfaces/Dish";

class Salad implements Dish {
  preparationTime = 5;

  getPreparationTime(): number {
    return this.preparationTime;
  }
}

export default Salad;
