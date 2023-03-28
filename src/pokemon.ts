import { PokemonType, ColorType, EvolutionType } from "./types";

/**
 * Interface that should follow all pokemon type.
 */
export interface Pokemon {
  getName(): string;
  getType(): PokemonType;
  getColor(): ColorType;
  getEvolution(): EvolutionType;
}