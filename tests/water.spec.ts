import "mocha";
import { expect } from "chai";
import { Water } from "../src/water";


const test = new Water('Squirtle', 'Azul', '1ª')

describe("getName() function test", () => {
  it("getName() returns Squirtle", () => {
    expect(test.getName()).to.be.eql('Squirtle');
  });  
});

describe("getColor() function test", () => {
  it("getColor() returns Azul", () => {
    expect(test.getColor()).to.be.eql('Azul');
  });  
});

describe("getEvolution() function test", () => {
  it("getEvolution() returns 1ª", () => {
    expect(test.getEvolution()).to.be.eql('1ª');
  });  
});

describe("getType() function test", () => {
  it("getType() returns Agua", () => {
    expect(test.getType()).to.be.eql('Agua');
  });  
});