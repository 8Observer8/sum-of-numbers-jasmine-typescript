define(["require", "exports", "./Output", "./Kata"], function (require, exports, Output_1, Kata_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            var result = Kata_1.default.Add(5, 6);
            Output_1.Output.Instance.Print("result: " + result);
        };
        return Program;
    }());
    // Debug Version
    Program.Main();
});
// Release Version
// window.onload = () => Program.Main();
//# sourceMappingURL=Program.js.map