import { FilterMapReduceTemplate } from "./filtermapreducetemplate";

/**
 * Class that implements the reduce abtract's method of superclass for sub.
 */
export class FilterMapSubReduce extends FilterMapReduceTemplate {
  /**
   * Reduce's sub method.
   * @param list List of numbers.
   * @param initialValor Initial accumulator valor.
   * @returns The reduced valor.
   */
  public reduce(list: number[], initialValor): number {
  let cont = initialValor;
  for (let i = 0; i < list.length; i++) {
    cont -= list[i];
  }
  return cont;
}
}