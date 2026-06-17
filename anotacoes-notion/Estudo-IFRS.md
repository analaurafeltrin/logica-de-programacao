# 🌐 Estudo à parte - IFRS

---

## Matemática básica pra programação

---

### Variáveis

- São valores que variam (kkk)
- Exemplo:
  $$
  2x + 10 = x - 3
  $$
  - 1º → separa x de um lado, números de outro.
    $$
    2x - x = -10 -3
    $$
    $$
    x = -13
    $$
- Antes x valia 2 e agora vale -13?? Sim!
  - Afinal, x é uma variável.
  - Ou seja, x não tem valor fixo e definido.
  - A cada momento ele tem um valor diferente.
- As variáveis em um programa de computador servem para armazenar valores variados.
- Exemplo de um programa com uma variável:
  ```notion
  programa {
  	funcao inicio () {
  		inteiro x
  		x = 2
  		x = 5
  		}
  }
  ```
- Números quebrados ou não exatos, como 1,5.
  - Os números quebrados na programação são apresentados com **.** (ponto final) ao invés de **,** (vírgula).
- Além de números inteiros, podemos criar variáveis para outros tipos de informações:

  ```notion
  programa {
  	funcao inicio () {
  		inteiro idade
  		real peso
  		cadeia nome
  		logico sabenadar

  		idade = 22
  		peso = 68.5
  		nome = "Julia"
  		sabenadar = verdadeiro
  		}
  }
  ```

  - Idade → número inteiro
  - Peso → número não exato
  - Nome → palavras (precisa das “”)
  - Sabenadar → verdadeiro ou falso

---

### Saída de dados

- Permite que a informação que está dentro do programa seja apresentada para o usuário, ou seja, que possamos mostrar algo que está interno no programa.
- No *portugol: “escreva” \* No JavaScript: “*console.log”\*
- Exemplo:

```notion
programa {
	funcao inicio () {
			cadeia cor
			cor = "Azul"
			escreva("A cor é: ", cor, "\n")
			cor = "Verde"
			escreva("Agora a cor mudou para: ", cor, "\n")
		}
}
```

- 1º → inicia com a declaração de uma variável do tipo cadeia e que se chama cor.
- 2º → é atribuído o valor Azul, em formato cadeia, para a variável cor.
- 3º → é impresso, com a função escreva, a mensagem "A cor é: ", concatenada por vírgula com a variável cor, e com o texto "\n", usado para quebrar a linha.
- 4º → a variável cor recebe o valor "Verde", e é impressa a mensagem "Agora a cor mudou para: ", concatenado com vírgula com a variável cor e com o texto "\n".

### Entrada de dados

- A entrada de dados é quando uma informação externa do programa é repassada para dentro do programa.
- Ou seja, é a forma do programa de computador receber uma informação.
- Na linguagem do portugol, isso acontece através do comando “leia”

```notion
programa {
	funcao inicio () {
		cadeia nome
		escreva("Digite seu nome: ")
		leia(nome)

		escreva("O nome digitado foi: ", nome, "\n")
}
```

- 1º → inicia com a declaração da variável nome, do tipo cadeia.
- 2º → com a função escreva, é impressa a mensagem "Digite seu nome:"
- 3º → é feita a leitura do que o usuário digitou para nome, com a função leia e entre parênteses a variável que está sendo lida, no caso a variável nome.
- 4º → no final, é impressa a mensagem “O nome digitado foi:” concatenada com vírgula com a variável nome e o texto “\n”, usando a função escreva.

### Operadores aritméticos

- Soma:
  - Na programação, ele é representado pelo símbolo +
  ```notion
  inteiro valor1, valor2
  valor1 = 2
  valor2 = 5
  resultado = valor1 + valor2
  ```
- Subtração:
  - Na programação, ele é representado pelo símbolo -
  ```notion
  inteiro valor1, valor2
  valor1 = 2
  valor2 = 5
  resultado = valor1 - valor2
  ```
- Multiplicação:
  - Na programação, ele é representado pelo símbolo \*
  ```notion
  inteiro valor1, valor2
  valor1 = 2
  valor2 = 5
  resultado = valor1 * valor2
  ```
- Divisão:
  - Na programação, ele é representado pelo símbolo /
  - Se a divisão envolve números inteiros, ele retornará o valor inteiro da divisão.
  - Se for número real, ele retornará o valor da divisão com as casas decimais.
  - Já para obter o resto, utilizamos o símbolo %.
    - Lembrando que o resto sempre se dá em relação a uma divisão inteira
    - Exemplo:
  ```notion
  inteiro valor1, valor2
  valor1 = 2
  valor2 = 5
  resultado = valor1 / valor2
  resto = valor2 % valor1
  ```
- Na programação, são respeitadas as mesmas prioridades.
- _Exemplo 1:_

$$
3 + 7 * 2
$$

$$
 3  + 14 => 17
$$

- _Exemplo 2:_

$$
(3 + 7) * 2
$$

$$
10 * 2 => 20
$$

- Ou seja, realizamos sempre o que se está entre parênteses por primeiro.
- Depois, as multiplicações e divisões.
- E por fim, as somas e subtrações.
- No caso de mais de uma operação do mesmo tipo, a prioridade é da esquerda para direita.

```notion
programa {
  funcao inicio() {
    real a, b, soma, sub, mult, div

    escreva("Digite o primeiro número: ")
    leia(a)

    escreva("Digite o segundo número: ")
    leia(b)

    soma = a + b
    sub = a - b
    mult = a * b
    div = a / b

    escreva("\n A soma dos números é igual a: ", soma)
    escreva("\n A subtração dos números é igual a: ", sub)
    escreva("\n A multiplicação dos números é igual a: ", mult)
    escreva("\n A divisão dos números é igual a: ", div, "\n")
  }
}
```

- 1º → declara as variáveis a, b, soma, sub, mult, div do tipo real.
  - Pq real e não inteiro? Pq como não sabemos se o número vai vir quebrado ou não, o real amplia as possibilidades.
- 2º → são realizadas as operações aritméticas, sendo que a variável _soma_ recebe resultado de a + b, _sub_ recebe resultado de a - b, _etc._
- 3º → são impressas as variáveis.
- Outro exemplo:
  - Imagine que seu professor deu 2 provas e 1 trabalho durante o semestre letivo.
  - A primeira prova teve peso 2.
  - A segunda prova teve peso 3.
  - E o trabalho teve peso 4.
  - Agora que você é um programador, você deseja criar um programa que calcule a sua média nesse semestre.
  - Como seria este programa usando o portugol?

```notion
programa {
  funcao inicio() {
    real prova1, prova2, trabalho, notaFinal

    escreva("Digite sua nota na prova 1: ")
    leia(prova1)

    escreva("Digite sua nota na prova 2: ")
    leia(prova2)

    escreva("Digite sua nota na no trabalho: ")
    leia(trabalho)

    notaFinal = (prova1*2 + prova2*3 + trabalho*4) /(2+3+4)

    escreva("Sua média foi: ", notaFinal)

  }
}
```

---
