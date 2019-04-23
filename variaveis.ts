// Boolean
let x: boolean = true;

// Number
let idade: number = 20;
let nota: number = 12.3;

// Strings
let nome: string = 'Matheus';
// Template String
console.log(`${nome} tem ${idade} anos`);

// Arrays
let notas: number[] = [8, 6, 10];

// Tuple
let aluno: [string, number] = ['Matheus', 10];
console.log(aluno[1]);

// Enum
enum Cor {vermelho, verde, azul}
let corFundo: Cor = Cor.azul;
console.log(corFundo);

// Any
let algumValor: any = 4;
algumValor = 'MATHEUS';
algumValor = false;

// Void
function alerta(): void {
	console.log("CUIDADO!")
}

// Undefined e Null
let y: undefined = undefined;
let z: null = null;

x = undefined;
x = null;
