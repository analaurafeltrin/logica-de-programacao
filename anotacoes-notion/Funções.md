# 🪜 Funções

---

- São um jeito de juntar um monte de coisas que queremos fazer e depois dizer para o computador executar tudo de uma vez
- Estamos fazendo função a todo momento. É uma ação que é realizada no código.

```jsx
torrar() // precisamos chamar a função

function torrar(){
	console.log("torrando pão")
	injetarPao() // podemos chamar função dentro de outra função
}

function injetarPao(){
	console.log("preparando para injetar o pão")
	console.log("finalizado")
}
```

- Cuidados ao criar funções:
    - Não deve começar com números.
    - Não deve ter espaços.
    - Criar com verbos, afinal, são ações.
    - É importante que cada função execute apenas uma coisa, para ser mais fácil a manutenção.
    - É importante indentar corretamente o código (o `tab` que damos de espaçamento nas chaves).
    - Também chamamos funções de métodos (como objetos, etc).
    - `function main:` função para chamar todas as outras funções ao mesmo tempo. Exemplo:
    
    ```jsx
    mainSaveData()
    
    function mainSaveData(){
    	getData()
    	checkValues()
    	sendToDatabase()
    	
    function getData(){
    	...
    }
    
    function checkValues(){
    	...
    }
    
    function sendToDataBase(){
    	...
    }
    ```
    

---

## Funções com parâmetros

---

- São como instruções especiais que damos para as funções no JavaScript.
- No exemplo abaixo, a variável “pão” é um parâmetro.
- `let / const` → só leria uma declaração dentro do escopo
- `var`→ é global, todos enxergariam, não é recomendado

```jsx
torrar("pão de forma")
torrar("pão integral") // podemos chamar +1 vez a mesma função

function torrar(pao){
	console.log`torrada feita com ${pao}`)
}
```

## Funções com retorno

---

- Existem funções que te devolvem algum valor.
- Possuem alguma saída.
- Para retornar um valor, precisamos atribuir a alguma variável.
    - No exemplo abaixo, atribuímos o retorno como a somatória dos números, e depois chamamos a função (com o retorno) na variável *resultado*.

```jsx
function somar(numero1, numero2) {
  return numero1 + numero2;
}

let resultado = somar(5, 3); // A função vai dar de retorno 5 + 3 = 8
console.log(`A soma é: ${resultado}`); // Vai mostrar A soma é: 8

```

- Exemplo de função com retorno no dia-a-dia:

```jsx
let userName = getFirstName("Ana Laura Feltrin")

console.log(`Seja bem vindo ${userName}!`)

function getFirstName(name){
	let firstName = name.split(" ")[0] // quebrar o texto quando encontrar um espaço
	// pegar o nome da posição zero	
	return firstName
}
```

---