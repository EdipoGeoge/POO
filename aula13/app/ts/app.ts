/// Reference path = "StringUtils.ts" />

//let mensagem = "Oi!"

namespace Texto{
    export function imprimir(texto: string){
        console.log(texto);
    }

    export function contarTexto(texto: string): number{
        return texto.length;
    }

}

//Texto.imprimir("Emerson");
//console.log(Texto.contarTexto("Emerson"));

console.log(StringUtils.minuscula("GEOOOGE"));
console.log(StringUtils.maiuscula("ufrn"));
console.log(StringUtils.validaTexto("1234567891"));