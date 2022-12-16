var StringUtils;
(function (StringUtils) {
    var tamanhoMaximo = 10;
    function maiuscula(texto) {
        return texto.toUpperCase();
    }
    StringUtils.maiuscula = maiuscula;
    function minuscula(texto) {
        return texto.toLowerCase();
    }
    StringUtils.minuscula = minuscula;
    function validaTexto(texto) {
        return texto.length <= tamanhoMaximo;
    }
    StringUtils.validaTexto = validaTexto;
})(StringUtils || (StringUtils = {}));
/// Reference path = "StringUtils.ts" />
//let mensagem = "Oi!"
var Texto;
(function (Texto) {
    function imprimir(texto) {
        console.log(texto);
    }
    Texto.imprimir = imprimir;
    function contarTexto(texto) {
        return texto.length;
    }
    Texto.contarTexto = contarTexto;
})(Texto || (Texto = {}));
//Texto.imprimir("Emerson");
//console.log(Texto.contarTexto("Emerson"));
console.log(StringUtils.minuscula("GEOOOGE"));
console.log(StringUtils.maiuscula("ufrn"));
console.log(StringUtils.validaTexto("1234567891"));
//let mensagem: string = "Tudo bem"
