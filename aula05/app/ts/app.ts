//import { Automovel } from './automovel';
import{Carro} from './carro';
import { Veiculo } from './vaiculo';

//let c = new Carro("FIAT", "Uno", "Branco","FDS-9876", 4);

//let a = new Automovel("Ford", "KA", "Azul", "QWE-0908", 2);



//c.numPortas = -1;
//console.log(c.fabricante)
//c.exibirInformacoes()

let veiculo = new Veiculo(2000);

//veiculo.motor.potencia = 1000;
veiculo.direcao.cor = "Azul"
console.log(`Motor ${veiculo.motor.potencia}, Direção = ${veiculo.direcao.cor}`);
