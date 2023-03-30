import "mocha";
import { expect } from "chai";
import { FilterMapAddReduce } from "../src/ej-clase/filtermapaddreduce"

const list = [1, 2, 3, 4, 5, 6]
const list2 = [ 2, 4, 5, 7]
const list3 = [1, 3, 4, 6, 8]

describe('function run test', () => {
  it('FilterMapAddReduce().run(list) should return 15', () => {
    expect(new FilterMapAddReduce().run(list)).to.equal(15);
  });
  it('FilterMapAddReduce().run(list2) should return 8', () => {    
    expect(new FilterMapAddReduce().run(list2)).to.equal(8);
   
  });
  it('FilterMapAddReduce().run(list3) should return 21', () => {
    expect(new FilterMapAddReduce().run(list3)).to.equal(21);
  });
});