"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vaiculo_1 = require("./vaiculo");
//let c = new Carro("FIAT", "Uno", "Branco","FDS-9876", 4);
//let a = new Automovel("Ford", "KA", "Azul", "QWE-0908", 2);
//c.numPortas = -1;
//console.log(c.fabricante)
//c.exibirInformacoes()
var veiculo = new vaiculo_1.Veiculo(2000);
//veiculo.motor.potencia = 1000;
veiculo.direcao.cor = "Azul";
console.log("Motor ".concat(veiculo.motor.potencia, ", Dire\u00E7\u00E3o = ").concat(veiculo.direcao.cor));
