import "mocha";
import { expect } from "chai";
import { clientCode } from "../src/ej-clase"
import { WaterCreator } from "../src/watercreator";

describe("clientCode() function test", () => {
  it("clientCode() returns Squirtle", () => {
    expect(clientCode(new WaterCreator('Squirtle', 'Azul', '1ª'))).to.be.eql('Soy un Squirtle, soy de color Azul, mi tipo es el Aguay estoy en mi 1ª evolución.');
  });  
});
