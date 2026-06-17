const nomeDoHeroi = 'Feltrinha'

let xp = '7589'

if (xp < 1000) {
  nivel = 'ferro'
} else if (xp <= 2000) {
  nivel = 'bronze'
} else if (xp <= 5000) {
  nivel = 'prata'
} else if (xp <= 7000) {
  nivel = 'ouro'
} else if (xp <= 8000) {
  nivel = 'platina'
} else if (xp <= 9000) {
  nivel = 'ascendente'
} else if (xp <= 10000) {
  nivel = 'Imortal'
} else {
  nivel = 'radiante'
}

console.log(`O herói de nome ${nomeDoHeroi} está no nível ${nivel}`)

/* e se eu quisesse fazer isso de forma a não repetir o if else várias vezes?

    estrutura de repetição: for (porque sabemos exatamente quantas repetições o código terá. Se não soubessemos, seria o while)

        const faixas = [
    { ate: 1000, nivel: 'ferro' },
    { ate: 2000, nivel: 'bronze' },
    { ate: 5000, nivel: 'prata' },
    { ate: 7000, nivel: 'ouro' },
    { ate: 8000, nivel: 'platina' },
    { ate: 9000, nivel: 'ascendente' },
    { ate: 10000, nivel: 'Imortal' },
    ]

    let nivel = 'radiante' ->  valor padrão se passar de todas as faixas

    for (let i = 0; i < faixas.length; i++) {
    if (xp <= faixas[i].ate) {
        nivel = faixas[i].nivel
        break
    }
    }



*/
