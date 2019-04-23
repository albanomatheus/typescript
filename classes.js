var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.aprensentar = function () {
        return "Ol\u00E1, eu sou o " + this.nome + " e tenho " + this.idade;
    };
    return Pessoa;
}());
var p = new Pessoa('Matheus', 19);
console.log(p.aprensentar());
