// Boolean
var x = true;
// Number
var idade = 20;
var nota = 12.3;
// Strings
var nome = 'Matheus';
// Template String
console.log(nome + " tem " + idade + " anos");
// Arrays
var notas = [8, 6, 10];
// Tuple
var aluno = ['Matheus', 10];
console.log(aluno[1]);
// Enum
var Cor;
(function (Cor) {
    Cor[Cor["vermelho"] = 0] = "vermelho";
    Cor[Cor["verde"] = 1] = "verde";
    Cor[Cor["azul"] = 2] = "azul";
})(Cor || (Cor = {}));
var corFundo = Cor.azul;
console.log(corFundo);
