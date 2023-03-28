import { PokemonCreator } from "./pokemoncreator";
import { ColorType, EvolutionType } from "./types";
import { Fire } from "./fire";
import { Pokemon } from "./pokemon";

/**
 * Class for create pokemon fire type that inherits from PokemonCreator.
 */
export class FireCreator extends PokemonCreator {
  /**
   * Constructor for fire creator class.
   * @param name fire pokemon's name.
   * @param color fire pokemon's color.
   * @param evolution fire pokemon's evolution.
   */
  constructor(private name: string, private color: ColorType, private evolution: EvolutionType){
    super();
  }

  /**
   * Specify the abstract factory method from Pokemon Creator.
   * @returns the pokemon of fire type.
   */
  public factoryMethod(): Pokemon {
    return new Fire(this.name, this.color, this.evolution)
  }
}