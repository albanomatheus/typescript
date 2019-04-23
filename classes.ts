class Pessoa {
	nome: string;
	idade: number;

	constructor(nome: string, idade: number) {
		this.nome = nome;
		this.idade = idade;
	}

	aprensentar() {
		return `Olá, eu sou o ${this.nome} e tenho ${this.idade}`;
	}
}

let p = new Pessoa('Matheus', 19);
console.log(p.aprensentar());