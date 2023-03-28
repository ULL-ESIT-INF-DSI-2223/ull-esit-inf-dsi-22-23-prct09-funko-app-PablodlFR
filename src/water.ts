import { Pokemon } from "./pokemon";
import { PokemonType, ColorType, EvolutionType } from "./types";

/**
 * Class for concrete the pokemon type, implements the pokemon interface.
 */
export class Water implements Pokemon {
  private type: PokemonType = 'Agua';
  /**
   * Pokemon water type constructor.
   * @param name Pokemon's name.
   * @param color Pokemon's color.
   * @param evolution Pokemon's evolution.
   */
  constructor(private name: string, private color: ColorType, private evolution: EvolutionType) {    
  }

  /**
   * Get the pokemon's name.
   * @returns the pkemon's name in a string.
   */
  getName() {
    return this.name;
  }

  /**
   * Get the pokemon's color.
   * @returns the pokemon's color.
   */
  getColor() {
    return this.color;
  }

  /**
   * Get the pokemon's type.
   * @returns The pokemon element type.
   */
  getType() {
    return this.type;
  }

  /**
   * Get which pokemon evolution is.
   * @returns the pokemon evolution.
   */
  getEvolution(): EvolutionType {
    return this.evolution;
  }
}
