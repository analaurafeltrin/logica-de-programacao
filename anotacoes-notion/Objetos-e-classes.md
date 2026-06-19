# 📦 Objetos e Classes

---

- Classes:
    - Padronizam o formato de uma estrutura de dados
- Objetos:
    - Mantém a padronização das classes e implementa seus valores das propriedades.
    - Tem métodos inteligentes (funções próprias)
    - Também pode guardar funções
- JSON é mais utilizado entre aplicações, e o objeto é utilizado para trafegar na aplicação.
- Instanciar um objeto:
    - Criar um novo objeto com base na classe.

```jsx
class formaDeBolo{
	constructor(saborDaMassa, saborRecheio){ 
	// padrão. Precisa ter esse nome ao criar uma classe
		this.saborDaMassa  = saborDaMassa // variável criada pra receber o parâmetro
		this.saborRecheio = saborRecheio
	} 
	
	escrever(){ // função nova criada, não precisa escrever function aqui
	console.log(`Um delicioso bolo de ${saborDaMassa} com recheio de ${saborRecheio}`)
	}
}

let boloFesta = new formaDeBolo("chocolate", "mousse")
// new -> utilizar o constructor (a classe)
let boloPremium = new formaDeBolo("baunilha", "morango")

boloFesta.escrever()
boloPremium.escrever()
```

---