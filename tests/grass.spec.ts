import "mocha";
import { expect } from "chai";
import { Grass } from "../src/grass";


const test = new Grass('Ivysaur', 'Verde', '2ª')

describe("getName() function test", () => {
  it("getName() returns Ivysaur", () => {
    expect(test.getName()).to.be.eql('Ivysaur');
  });  
});

describe("getColor() function test", () => {
  it("getColor() returns Verde", () => {
    expect(test.getColor()).to.be.eql('Verde');
  });  
});

describe("getEvolution() function test", () => {
  it("getEvolution() returns 2ª", () => {
    expect(test.getEvolution()).to.be.eql('2ª');
  });  
});

describe("getType() function test", () => {
  it("getType() returns Planta", () => {
    expect(test.getType()).to.be.eql('Planta');
  });  
});