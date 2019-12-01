(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"../../src/client/Kata":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.Add = function (a, b) {
        return a + b;
    };
    return Kata;
}());
exports.default = Kata;

},{}]},{},[1]);
