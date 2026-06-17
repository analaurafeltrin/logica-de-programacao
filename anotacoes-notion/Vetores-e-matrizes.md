# 📊 Manipulando vetores e matrizes

---

```jsx
const nomesPokemon = ["Pikachu" , "Chamander", "Bulbassaur"]
const timePokemon = [
["pikachu", "M", 1],
["Chamander", "F", 3]
]

console.log(" O pokemon " + timePokemon[1][0] + " é do sexo " +  timePokemon[1][1] +
" e está no nível " + timePokemon[1][2] )
```

- Aqui estamos armazenando variáveis em um lugar só. Ou seja, em um `[array]`.
    - É como se estivéssemos guardando toda a coleção em uma gaveta.
- Na programação, quando lidamos com vetores, todas começam com 0.
    - No exemplo, 0 = pikachu / 1 = charmander…
- Utilizamos métodos para manipular os arrays.
    - `pokemon.pop( )` → vai remover o último elemento do array
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array → Documentação do JavaScript onde mostra todos os métodos de manipulação de arrays.
- Utilizando propriedades.
    - `nomesPokemon.length` → vai dar o tamanho da matriz / vetor / array
    - São características

![exemplo.png](/anotacoes-notion/assets/images/exemplo.png)

> 💡 Informação simples (1 string, 1 number…) = variável
> Coleção de informações do mesmo tipo = vetor
> Coleção de informações de diferentes tipos = matriz

---