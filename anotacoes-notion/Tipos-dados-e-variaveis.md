# 🔤 Tipos de dados e variáveis

## Declarando variáveis

- Variam no código.
- *LET*

```jsx
console.log("Digita o nome do seu jogador")

//declara uma variável
let nickname = "Maria mestra do Pikachu"

//concantenando uma mensagem fixa + uma variável
console.log("Bem vinda " + nickname) 
// Ou
console.log(`${nickname} entrou no servidor`)
```

## Declarando constantes

- Não variam no código.
- *CONST*

```jsx
const notificacao = "Pokemon Go diz: "

//saida
console.log(notificacao + "tem um novo pokemon na região")
console.log(`${notificacao} você foi derrotado por um líder`)
```

### Tipos variáveis

---

`string` - são variáveis que armazenam texto

`number` - são variáveis que armazenam números

`boolean` - são variáveis lógicas, que armazenam o valor de ligado ou desligado (true/false)

```jsx
//pokemon
let nomePokemon = "pikachu"
let pokemonSexo = "M"

let nivelPokemon = 20
let pontosDeVidaPokemon = 45

let selecionavel = false
```

Outros tipos de variáveis

> 💡 No JavaScript, não são tão utilizadas. Mas em outras linguagens, sim, precisa declarar.


| **Tipo de Variável** | **Descrição** |
| --- | --- |
| Variáveis numéricas | São usadas para armazenar valores numéricos. |
| Inteiro | Armazena números inteiros, como 1, 10, -5. |
| Ponto flutuante ou decimal | Armazena números com casas decimais, como 3.14, -0.5. |
| Números complexos | Armazena números complexos, como 2+3j. |
| Variáveis de texto | Usadas para armazenar sequências de caracteres. |
| String | Armazena uma sequência de caracteres, como "Olá, mundo!" |
| Caractere | Armazena um único caractere, como 'a', 'X', '@'. |
| Variáveis lógicas | Usadas para armazenar valores de verdadeiro ou falso. |
| Booleano | Armazena os valores True ou False. |
| Variáveis de data e hora | Utilizadas para representar datas e horários. |
| Data | Armazena datas, no formato AAAA-MM-DD. |
| Hora | Armazena horários, no formato HH:MM:SS. |
---