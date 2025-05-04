// Exemplo 1
function mensagem() {
console.log("Seja bem-vindo(a)!")
console.log("É um prazer tê-lo aqui.")
console.log("Aproveite")
}
mensagem()

// Exemplo 2 Função com parâmetros
function somarNumeros(valor1, valor2) {
    let soma = valor1 + valor2
    console.log(soma)
}

console.log(soma)
somarNumeros(15, 27)

// Exemplo 3 Função com parâmetros
function boasVindas(nome, cargo) {
    console.log('Seja bem-vindo(a) ${cargo} ${nome}!')
}

boasVindas("Marcio", "professor")

// Exemplo 4 Função com Return
function somar(valor1, valor2) {
    return valor1 + valor2
}

let resultado = somar(29, 32)
console.log(somar(12, 12))

console.log(resultado)

// Exemplo 5 Função com return
function boasVindas(nome, cargo) {
    return 'Seja bem-vindo(a) ${cargo} ${noma}!'
}

let mensagem = boasVindas("Marcio", "professor")

console.log(mensagem)

// Exemplo 6 Função condicional sem else
function parImpar(valor) {
    if (valor % 2 === 0) {
        return "par"
    } else {
        return "impar"
    }
}

let verificao = parImpar(13)

console.log9(verificao)

