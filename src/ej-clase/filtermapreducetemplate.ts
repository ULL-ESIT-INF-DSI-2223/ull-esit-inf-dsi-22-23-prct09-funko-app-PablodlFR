import { addOne } from "./functions";
import { isPar } from "./functions";

/**
 * Abstract class for Template Method.
 */
export abstract class FilterMapReduceTemplate {
  /**
   * Abstract method that will be implemented in subclasses.
   * @param list List of numbers.
   * @param initialValor Initial accumulator valor.
   */
  protected abstract reduce(list: number[], initialValor): number;

  /**
   * Filter's method.
   * @param list List of numbers.
   * @param callback function to filter.
   * @returns Filtered number list.
   */
  public filter(list: number[], callback: (num: number) => boolean) {
    const result: number[] = [];
    
    for (let i = 0; i < list.length; i++) {
      if (callback(list[i]) === true) {
        result.push(list[i])
      }
    }
    return result;
  }

  /**
   * Map's method.
   * @param list List of numbers.
   * @param callback function to map.
   * @returns Maped number list.
   */
  public map(list: number[], callback) {
    const result: number[] = []
    for (let i = 0; i < list.length; i++) {
      result.push(callback(list[i]));
    }
    return result;
  } 

  /**
   * Hook's method before map.
   * @param list List of numbers.
   */
  protected beforeMap(list: number[]) {
    console.log(`Lista antes de Map: ${list}`)
  }

  /**
   * Hook's method after map.
   * @param list List of numbers.
   */
  protected afterMap(list: number[]) {
    console.log(`Lista después de Map: ${list}`)
  }

  /**
   * Hook's method before filter.
   * @param list List of numbers.
   */
  protected beforeFilter(list: number[]) {
    console.log(`Lista antes de Filter: ${list}`)
  }

  /**
   * Hook's method after filter.
   * @param list List of numbers.
   */
  protected afterFilter(list: number[]) {
    console.log(`Lista después de Filter: ${list}`)
  }

  /**
   * Hook's method before reduce.
   * @param list List of numbers.
   */
  protected beforeReduce(list: number[]) {
    console.log(`Lista antes del Reduce: ${list}`)
  }

  /**
   * Hook's method after reduce.
   * @param num Number that reduced the list.
   */
  protected afterReduce(num: number) {
    console.log(`Lista después del Reduce: ${num}`)
  }

  /**
   * Skeleton algorithm.
   * @param list List of numbers.
   */
  public run(list: number[]) {
    let red = 0;

    this.beforeFilter(list);
    list = this.filter(list, isPar)
    this.afterFilter(list);
    this.beforeMap(list);
    list = this.map(list, addOne)
    this.afterMap(list);     
    this.beforeReduce(list);
    red = this.reduce(list, 0);
    this.afterReduce(red);

    return red;
  }
}