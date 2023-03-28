import { PokemonCreator } from "./pokemoncreator";
import { ColorType, EvolutionType } from "./types";
import { Grass } from "./grass";
import { Pokemon } from "./pokemon";

/**
 * Class for create pokemon grass type that inherits from PokemonCreator.
 */
export class GrassCreator extends PokemonCreator {
  /**
   * Constructor for grass creator class.
   * @param name grass pokemon's name.
   * @param color grass pokemon's color.
   * @param evolution grass pokemon's evolution.
   */
  constructor(private name: string, private color: ColorType, private evolution: EvolutionType){
    super();
  }

  /**
   * Specify the abstract factory method from Pokemon Creator.
   * @returns the pokemon of grass type.
   */
  public factoryMethod(): Pokemon {
    return new Grass(this.name, this.color, this.evolution)
  }
}