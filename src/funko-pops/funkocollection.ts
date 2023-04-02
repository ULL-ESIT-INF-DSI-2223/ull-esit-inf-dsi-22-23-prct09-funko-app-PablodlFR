import { Funko } from "./funko";
import { Collection } from "./collection";
//import { Franchise } from "./funko";
import { Type } from "./funko";
import { Genre } from "./funko";

/**
 * Funko collection extended from abstract class Colection.
 */
export class FunkoCollection extends Collection<Funko> {
  /**
   * Constructor's class.
   * @param funkos array of funkos.
   */
  constructor(funkos: Funko[]) {
    super(funkos);
  }

  // addFunko() {
  //   if
  // }

  // checkId(num: number) {
  //   if(this.items.find(num))
  // }



}

// const a = new Franchise("Detective Conan");
// const b = new Franchise("Detective Conan");
// console.log(a.getFranchiseId())
// console.log(b.getFranchiseId())

// const c = new Franchise("Pokémon");
// console.log(c.getFranchiseId())

// const f1 = new Funko(1, "Conan", "descripción", Type.POP, Genre.ANIME, "Detective Conan", true, "nada", 1);
// console.log(f1);

//const a: FunkoCollection =