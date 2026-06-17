# 🛠️ Operadores

---

### Operadores Aritméticos:

| **Operador** | **Descrição** | **Exemplo** |
| --- | --- | --- |
| + | Adição | **`let result = 5 + 3;`** |
| - | Subtração | **`let result = 8 - 2;`** |
| * | Multiplicação | **`let result = 4 * 6;`** |
| / | Divisão | **`let result = 10 / 2;`** |
| % | Módulo (resto da divisão) | **`let result = 10 % 3;`** |


> 💡 Na programação, números não inteiros (102,33) é representado com ponto (102.33) 

---

### Operadores de Atribuição:

| **Operador** | **Descrição** | **Exemplo** |
| --- | --- | --- |
| = | Atribuição | **`let x = 5;`** |
| += | Adição e atribuição | **`let num = 10; num += 2;`** |
| -= | Subtração e atribuição | **`let num = 10; num -= 3;`** |
| *= | Multiplicação e atribuição | **`let num = 5; num *= 4;`** |
| /= | Divisão e atribuição | **`let num = 10; num /= 2;`** |
| %= | Módulo e atribuição | **`let num = 10; num %= 3;`** |
- Exemplo:
    
    ```jsx
    let preco = 10
    preco += 5
    console.log(preco)
    
    /* resultado será 15. Estou pedindo para que pegue
    o valor dele mesmo e some 5. Mesma coisa que: */
    
    preco = preco + 5
    ```
    

---

### Operadores de Incremento e Decremento:

| **Operador** | **Descrição** | **Exemplo** |
| --- | --- | --- |
| ++ | Incremento | **`let counter = 0; counter++;`** |
| -- | Decremento | **`let counter = 5; counter--;`** |
- Incremento: acrescentar um valor
    - `contador++` → adiciona +1
- Decremento: diminuir um valor
    - `contador--` → subtrai -1

---

### Definindo escopos

- Exemplo
    
    ```jsx
    let resultado = 2 * (5 + 5) - 10
    
    console.log(resultado)
    ```
    
- O parênteses é igual na matemática, sou seja, ele prioriza quem será calculado primeiro e muda o resultado do cálculo.

---

### Operadores Relacionais ou de Comparação:

| **Operador** | **Descrição** | **Exemplo** |
| --- | --- | --- |
| == | Igual a | **`let isEqual = (x == y);`** |
| != | Diferente de | **`let isNotEqual = (x != y);`** |
| > | Maior que | **`let isGreater = (x > y);`** |
| < | Menor que | **`let isLess = (x < y);`** |
| >= | Maior ou igual a | **`let isGreaterOrEqual = (x >= y);`** |
| <= | Menor ou igual a | **`let isLessOrEqual = (x <= y);`** |
- JavaScript: ===
    - Compara o valor e o formato do conteúdo (se é string ou number, etc).
- ==
    - Compara apenas se o número é o mesmo.
    - Exemplo:
    
    ```jsx
    let numero = “1”
    console.log(numero == 1)
    
    // vai dar true, olha apenas o número
    
    console.log(numero === 1)
    
    // vai dar false, pois é string e number 
    ```
    
- Exemplo:

```jsx
//guardar o valor em uma variável de resultado TRUE?FALSE
let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let ehCPFBloqueado = cpfUsuario === cpfBloqueado

console.log("O usuario está barrado ? " + ehCPFBloqueado)
```

---

### Operadores Lógicos:

| **Operador** | **Descrição** | **Exemplo** |
| --- | --- | --- |
| && | AND lógico | **`if (condition1 && condition2)`** |
| || | OR lógico | **`if (condition1 || condition2)`** |
| ! | NOT lógico | **`if (!condition)`** |
- Exemplo 1:
    - Verificar se a pessoa é += 18 anos E se o visto de verificado é true.

```jsx
// AND ( && )
let idade = 18
let vistoVerificado = true
let resultado =  (idade >= 18) && (vistoVerificado === true)
console.log(resultado)
```

- Exemplo 2:
    - Verificar se o boneco do jogo pode sair de casa. (Só se tiver guarda-chuva OU sem chover)

```jsx
// OR ( || ) - nosso boneco só pode sair se tiver sem chuva OU com guarda Chuva
let tempo = "chuva"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("nosso personagem pode sair ? " + podeSair)
```

- Exemplo 3:
    - Verificar se o tempo é igual a chuva.

```jsx
// NOT  ( !) - nega uma afirmação
let tempo = "chuva"
let resultado = tempo === "chuva"
console.log(!!resultado)
```

- Exemplo 4:
    - Verificar se o tempo não é chuva E o horário maior que 6 horas.

```jsx
// NOT  ( !) - nega uma afirmação
let tempo = "chuva"
let horario = 8
let resultado = !((tempo !== "chuva") && (horario > 6))
console.log(resultado)
```

---