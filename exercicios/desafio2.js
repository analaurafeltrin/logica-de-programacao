let vitorias = 90
let derrotas = 10

function classificarVitorias(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas
  let nivel
  if (vitorias < 10) {
    nivel = 'ferro'
  } else if (vitorias <= 20) {
    nivel = 'bronze'
  } else if (vitorias <= 50) {
    nivel = 'prata'
  } else if (vitorias <= 80) {
    nivel = 'ouro'
  } else if (vitorias <= 90) {
    nivel = 'diamante'
  } else if (vitorias <= 100) {
    nivel = 'lendário'
  } else {
    nivel = 'imortal'
  }

  return `O herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`
}

console.log(classificarVitorias(vitorias, derrotas))
