import "mocha";
import { expect } from "chai";
import { FilterMapSubReduce } from "../src/ej-clase/filtermapsubreduce"

const list = [1, 2, 3, 4, 5, 6]
const list2 = [ 2, 4, 5, 7]
const list3 = [1, 3, 4, 6, 8]

describe('function run test', () => {
  it('FilterMapSubReduce().run(list) should return 15', () => {
    expect(new FilterMapSubReduce().run(list)).to.equal(-15);
  });
  it('FilterMapSubReduce().run(list2) should return 8', () => {    
    expect(new FilterMapSubReduce().run(list2)).to.equal(-8);
   
  });
  it('FilterMapSubReduce().run(list3) should return 21', () => {
    expect(new FilterMapSubReduce().run(list3)).to.equal(-21);
  });
});