import { FilterMapReduceTemplate } from "./filtermapreducetemplate";

/**
 * Class that implements the reduce abtract's method of superclass for division.
 */
export class FilterMapDivReduce extends FilterMapReduceTemplate {
  /**
   * Reduce's division method.
   * @param list List of numbers.
   * @param initialValor Initial accumulator valor.
   * @returns The reduced valor.
   */
  public reduce(list: number[], initialValor): number {
    if (initialValor === 0) {
      initialValor = 1;
    }
    let cont = initialValor;
    for (let i = 0; i < list.length; i++) {
      cont /= list[i];
    }
    return cont;
  }
}