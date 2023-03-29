import "mocha";
import { expect } from "chai";
import { FilterMapDivReduce } from "../src/filtermapdivreduce"

const list = [1, 2, 3, 4, 5, 6]
const list2 = [ 2, 4, 5, 7]
const list3 = [1, 3, 4, 6, 8]

new FilterMapDivReduce().reduce(list, 1);

describe('function run test', () => {
  it('FilterMapDivReduce().run(list) should return 0.009523809523809523', () => {
    expect(new FilterMapDivReduce().run(list)).to.equal(0.009523809523809523);
  });
  it('FilterMapDivReduce().run(list2) should return 8', () => {    
    expect(new FilterMapDivReduce().run(list2)).to.equal(0.06666666666666667);
   
  });
  it('FilterMapDivReduce().run(list3) should return 21', () => {
    expect(new FilterMapDivReduce().run(list3)).to.equal(0.003174603174603175);
  });
});