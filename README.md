# Práctica 9 - Aplicación de registro de Funko Pops
Esta práctica consiste en la elaboración de una aplicación que nos permita registar las colecciones de Funko Pops de los usuarios, haciendo estas persistentes gracias a la API síncrona de Node.js para trabajar con el sistema de ficheros. Además se mostrará el ejercicio realizado en la hora de prácticas (PE101).
\
\
El código fuente de ambos ejercicios se encuentra organizado en diferentes directorios y se hace uso de sintaxis ES para importar/exportar las distintas entidades.
## Ejercicio de clase
El ejercicio de clase consiste en implementar un algoritmo haciendo uso del patrón _Template Method_ con los pasos indicados en el enunciado.
\
\
La clase abstracta que actúa de plantilla (_FilterMapReduceTemplate_) es la siguiente:
```TypeScript
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
```
Como podemos ver se implementan los métodos _map_ y _filter_ sin hacer uso de sus homónimos en TypeScript y se ha declarado _reduce_ como un método abstracto, tal y como es indicado en el enunciado. Además también se han implementado varios métodos _hook_ antes y despúes de las operaciones anterioremente mencionadas. Finalmente se crea el esqueleto del algoritmo que contiene todas las operaciones y los métodos _hook_ en los lugares correspondientes.
\
\
A continuación se han desarrollado cuatro subclases que heredan de la clase anteriormente mencionada (_FilterMapAddReduce_, _FilterMapSubReduce_, _FilterMapProdReduce_, _FilterMapDivReduce_) las cuales concretan el método _reduce_ anteriormente declarado como abstracto. Estas clases son las siguientes:
\
\
_FilterMapAddReduce_:
```TypeScript
/**
 * Class that implements the reduce abtract's method of superclass for add.
 */
export class FilterMapAddReduce extends FilterMapReduceTemplate {
  /**
   * Reduce's add method.
   * @param list List of numbers.
   * @param initialValor Initial accumulator valor.
   * @returns The reduced valor.
   */
  public reduce(list: number[], initialValor): number {
    let cont = initialValor;
    for (let i = 0; i < list.length; i++) {
      cont += list[i];
    }
    return cont;
  }
}
```
_FilterMapSubReduce_:
```TypeScript
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
```
_FilterMapProdReduce_:
```TypeScript
/**
 * Class that implements the reduce abtract's method of superclass for product.
 */
export class FilterMapProdReduce extends FilterMapReduceTemplate {
  /**
   * Reduce's product method.
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
      cont *= list[i];
    }
    return cont;
  }
}
```
_FilterMapDivReduce_:
```TypeScript
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
```
Además se han creado dos funciones con el fin de pasarlas por parámetro a la hora de probar el método _map_ y _filter_.
\
\
_AddOne_ (Suma 1 a cada uno de los números de la lista):
```TypeScript
/**
 * Add one to a number.
 * @param num Number that will be added.
 * @returns The result's number.
 */
export function addOne(num: number) {
  return num + 1;
}
```
_isPar_ (Comprueba si un número es par):
```TypeScript
/**
 * Check if a number is par.
 * @param num Number that will be checked.
 * @returns True if is par.
 */
export function isPar(num: number) {
  if (num % 2 === 0) {
    return true;
  }
}
```
Por último se han realizado las pruebas pertinentes en la traza de cada una de las cuatro subclases anteriormente mencionadas, siendo dichas pruebas y su encubrimiento los siguientes:
```
  ✔ FilterMapAddReduce().run(list) should return 15
  ✔ FilterMapAddReduce().run(list2) should return 8
  ✔ FilterMapAddReduce().run(list3) should return 21

  ✔ FilterMapSubReduce().run(list) should return 15
  ✔ FilterMapSubReduce().run(list2) should return 8
  ✔ FilterMapSubReduce().run(list3) should return 21

  ✔ FilterMapProdReduce().run(list) should return 105
  ✔ FilterMapProdReduce().run(list2) should return 15
  ✔ FilterMapProdReduce().run(list3) should return 315

  ✔ FilterMapDivReduce().run(list) should return 0.009523809523809523
  ✔ FilterMapDivReduce().run(list2) should return 8
  ✔ FilterMapDivReduce().run(list3) should return 21

----------------------------|---------|----------|---------|---------|-------------------
File                        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------------|---------|----------|---------|---------|-------------------
All files                   |     100 |      100 |     100 |     100 |                   
 filtermapaddreduce.ts      |     100 |      100 |     100 |     100 |                   
 filtermapdivreduce.ts      |     100 |      100 |     100 |     100 |                   
 filtermapprodreduce.ts     |     100 |      100 |     100 |     100 |                   
 filtermapreducetemplate.ts |     100 |      100 |     100 |     100 |                   
 filtermapsubreduce.ts      |     100 |      100 |     100 |     100 |                   
 functions.ts               |     100 |      100 |     100 |     100 |                   
----------------------------|---------|----------|---------|---------|-------------------
```
## Ejercicio de guion
[![Tests](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-PablodlFR/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-PablodlFR/actions/workflows/node.js.yml)
[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-PablodlFR/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-PablodlFR?branch=main)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-PablodlFR&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-PablodlFR)
