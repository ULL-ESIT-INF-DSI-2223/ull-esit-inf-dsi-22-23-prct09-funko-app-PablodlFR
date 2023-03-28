import { PokemonCreator } from "./pokemoncreator";
import { ColorType, EvolutionType } from "./types";
import { Water } from "./water";
import { Pokemon } from "./pokemon";

/**
 * Class for create pokemon water type that inherits from PokemonCreator.
 */
export class WaterCreator extends PokemonCreator {
  /**
   * Constructor for water creator class.
   * @param name water pokemon's name.
   * @param color water pokemon's color.
   * @param evolution water pokemon's evolution.
   */
  constructor(private name: string, private color: ColorType, private evolution: EvolutionType){
    super();
  }

  /**
   * Specify the abstract factory method from Pokemon Creator.
   * @returns the pokemon of water type.
   */
  public factoryMethod(): Pokemon {
    return new Water(this.name, this.color, this.evolution)
  }
}