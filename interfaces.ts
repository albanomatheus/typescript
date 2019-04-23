interface Pessoa {
	nome: string;
	idade?: number;
}

function falaOi(p: Pessoa) {
	console.log("Oi " + p.nome);
}

let p = {nome: "Matheus"}

falaOi(p);