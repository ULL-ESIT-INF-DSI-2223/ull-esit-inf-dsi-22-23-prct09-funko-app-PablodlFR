import "mocha";
import { expect } from "chai";
import { FilterMapProdReduce } from "../src/ej-clase/filtermapprodreduce"

const list = [1, 2, 3, 4, 5, 6]
const list2 = [ 2, 4, 5, 7]
const list3 = [1, 3, 4, 6, 8]

new FilterMapProdReduce().reduce(list, 1);

describe('function run test', () => {
  it('FilterMapProdReduce().run(list) should return 105', () => {
    expect(new FilterMapProdReduce().run(list)).to.equal(105);
  });
  it('FilterMapProdReduce().run(list2) should return 15', () => {    
    expect(new FilterMapProdReduce().run(list2)).to.equal(15);
   
  });
  it('FilterMapProdReduce().run(list3) should return 315', () => {
    expect(new FilterMapProdReduce().run(list3)).to.equal(315);
  });
});