"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brinquedo = void 0;
var Brinquedo = /** @class */ (function () {
    function Brinquedo(_velocidade) {
        this._velocidade = _velocidade;
    }
    Brinquedo.prototype.mover = function () {
        console.log("Mover Brinquedo...");
    };
    return Brinquedo;
}());
exports.Brinquedo = Brinquedo;
