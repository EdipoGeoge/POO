"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aviao_1 = require("./teste2/aviao");
var barco_1 = require("./teste2/barco");
var brinquedo_1 = require("./teste2/brinquedo");
var brinquedo = new brinquedo_1.Brinquedo(100);
var aviao = new aviao_1.Aviao();
var barco = new barco_1.Barco(300);
function movimentarBrinquedo(b) {
    b.mover();
}
movimentarBrinquedo(brinquedo);
//movimentarBrinquedo();
movimentarBrinquedo(barco);
