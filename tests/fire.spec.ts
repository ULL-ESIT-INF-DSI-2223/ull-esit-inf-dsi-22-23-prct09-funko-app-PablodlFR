import "mocha";
import { expect } from "chai";
import { Fire } from "../src/fire";


const test = new Fire('Charizard', 'Rojo', '3ª')

describe("getName() function test", () => {
  it("getName() returns Charizard", () => {
    expect(test.getName()).to.be.eql('Charizard');
  });  
});

describe("getColor() function test", () => {
  it("getColor() returns Rojo", () => {
    expect(test.getColor()).to.be.eql('Rojo');
  });  
});

describe("getEvolution() function test", () => {
  it("getEvolution() returns 3ª", () => {
    expect(test.getEvolution()).to.be.eql('3ª');
  });  
});

describe("getType() function test", () => {
  it("getType() returns Fuego", () => {
    expect(test.getType()).to.be.eql('Fuego');
  });  
});