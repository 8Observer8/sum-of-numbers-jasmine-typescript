import Kata from "../../src/client/Kata";

describe("KataTests", () =>
{
    it("AddTest", () =>
    {
        // Arrange
        let expected = 10;

        // Act
        let actual = Kata.Add(5, 5);

        // Assert
        expect(actual).toEqual(expected);
    });
});
