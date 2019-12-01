"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Kata_1 = require("../../src/client/Kata");
describe("KataTests", function () {
    it("AddTest", function () {
        // Arrange
        var expected = 10;
        // Act
        var actual = Kata_1.default.Add(5, 5);
        // Assert
        expect(actual).toEqual(expected);
    });
});
