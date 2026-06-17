# 🔀 Estruturas de controle

---

## Estruturas condicionais (if, else if, else)

---

- São blocos de código que só serão executados se determinada expressão for verdadeira.
- Depois do `if ()`, entre parênteses sempre ter que ser um valor booleano (true ou false)
  - Era uma vez um herói chamado João que estava em uma aventura emocionante para resgatar a princesa perdida em um mundo mágico. Mas para alcançar o castelo onde a princesa estava aprisionada, ele precisava atravessar uma floresta cheia de perigos e enigmas.
  ```jsx
  // O nosso herói João chegou a uma encruzilhada na floresta misteriosa.
  // Ele precisa decidir qual caminho seguir para continuar a sua jornada.

  if (caminhoEsquerdo === 'obstaculo') {
    // Se o caminho da esquerda tiver um obstáculo, João vai tentar o caminho da direita.
    seguirCaminhoDireito();
  } else if (caminhoEsquerdo === 'ponteQuebrada') {
    // Se o caminho da esquerda tiver uma ponte quebrada, João vai procurar outro caminho.
    procurarOutroCaminho();
  } else {
    // Se não tiver obstáculo nem ponte quebrada no caminho da esquerda, João seguirá por esse caminho.
    seguirCaminhoEsquerdo();
  }
  ```

  -

---

## Estruturas de decisão (Switch Case)

---

- Usada em paralelo do `if else`
- Em muitas situações que cabem o `if`, cabem o switch case
- Usado quando se tem muitos `if` dentro do bloco.
- Switch: diz ao computador que estamos começando a escolher com base em um valor.
  - case → “caso seja…” (opções dadas ao computador para ele escolher)
  - break → “pare o código aqui” (se não, vai executar tudo abaixo do bloco)
  - default → “caso não seja nenhuma das opções…” (semelhante ao `else`)

```jsx
let fruta = “banana”

switch (fruta) {
	case "laranja":
	console.log("suco de laranja")
	break

	case "banana":
	console.log("vitamina de banana")
	break

	case "maça":
	console.log("vitamina de maçã")
	break

	default:
	console.log("suco genérico")
}
```

---

## Estruturas de repetição (for, while, do-while)

---

- Laços de repetição
  - Conteúdo que vai se repetir, até que determinada condição seja verdadeira.
- `for` → executar um bloco de código várias vezes, de acordo com uma condição específica.

```jsx
const numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
```

- Na primeira linha, criamos um array de números.
- Dentro do laço `for`, declaramos uma variável de controle `i` e a inicializamos com `0`.
- A condição para continuar a execução é `i < numeros.length`, ou seja, enquanto `i` for menor que o tamanho do array `numeros`.
- Na última linha do loop, incrementamos `i` em `1` com `i++`.

```jsx
let pontosDeVida = 0;

for (let i = 0; i < 11; i++) {
  pontodesDeVida += 1;
  console.log('Tomou poção mágica');
}

/* vai executar do 0 ao 11, e vai executar +1 
(e será 12, pois o 0 também conta) 

Se for o caso de querer que pare no 11, colocar i 
<=11 OU < 11)
*/
```

- `while` → utilizado quando não sabemos quantas vezes precisamos executar uma ação.
  - Se não incrementar a variável contadora `(i++)`, o loop será infinito e não vai parar nunca.
  ```jsx
  let contador = 0

  while(contador < 3) {
  	console.log("ola)
  	i++
  }
  ```
- `do-while` → tipo de laço `while` que sempre executa pelo menos uma vez o bloco de código dentro do loop.
  - A diferença é que a regra `while` vem no final.
  ```jsx
  let numero;

  do {
    numero = prompt('Digite um número entre 1 e 10:');
  } while (numero < 1 || numero > 10);

  console.log(`Você digitou o número ${numero}.`);
  ```
- Na primeira linha, declaramos a variável `numero` sem inicializá-la.
- Dentro do laço `do-while`, solicitamos que o usuário digite um número com `prompt`.
- O loop continua enquanto `numero` for menor que `1` ou maior que `10`.
- Quando o usuário digita um número válido, o loop é encerrado e a mensagem é exibida no console.

---
