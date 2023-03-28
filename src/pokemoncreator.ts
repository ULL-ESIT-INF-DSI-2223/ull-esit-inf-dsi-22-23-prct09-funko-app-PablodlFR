import { Pokemon } from "./pokemon";

/**
 * Abstract class Pokemon Creator.
 */
export abstract class PokemonCreator {
  /**
   * Abstract factory method function.
   */
  public abstract factoryMethod(): Pokemon

  /**
   * Get the  pokemon attributes.
   * @returns a string with the pokemon's description.
   */
  public logic(): string {
    const pokemon = this.factoryMethod();
    return `Soy un ${pokemon.getName()}, ` +
           `soy de color ${pokemon.getColor()}, ` +
           `mi tipo es el ${pokemon.getType()}` +
           `y estoy en mi ${pokemon.getEvolution()} evolución.`
  }
}