import { Dish } from "../interfaces/Dish";

class Barbecue implements Dish {
  preparationTime = 30;

  getPreparationTime(): number {
    return this.preparationTime;
  }
}

export default Barbecue;
