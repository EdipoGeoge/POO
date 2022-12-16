import { Aviao } from "./teste2/aviao";
import { Barco } from "./teste2/barco";
import { Brinquedo } from "./teste2/brinquedo";

let brinquedo = new Brinquedo(100);
let aviao = new Aviao(900);
let barco = new Barco(300);

function movimentarBrinquedo(b: Brinquedo){
    b.mover();
}



movimentarBrinquedo(brinquedo);
movimentarBrinquedo(aviao);
movimentarBrinquedo(barco);