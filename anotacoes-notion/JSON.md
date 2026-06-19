# 📄 JSON

---

- JavaScript Object Notation
- Objeto simples, composto por chave e valor
- Estrutura que agrupa dados de maneira mais organizada
- Objetivo de transferir dados de um lugar para outro
- Funciona para qualquer linguagem

```jsx
let invoice = { // chave
	name: "felipe", // valores
    age: 28,
    products: {
    	0: ["mouse 2xwm", 29.90],
        1: ["Teclado mecânico", 129.99],
        2: ["Monitor", "899.99"],
        3: ["TV 100 polegadas", "10000.90"]
    },
    taxes: "98.90"
}

generateInvoice(invoice)

function generateInvoice(invoice){
	console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("------------")
    
    for(let index in invoice.products){
    	let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }    
}
```

- Diferença entre objetos JS e objetos JSON:

|  | Objeto JS | JSON |
| --- | --- | --- |
| **Tipo** | Estrutura em memória | Texto (string) |
| **Chaves** | Com ou sem aspas | Sempre com aspas duplas `"` |
| **Funções** | ✅ permitido | ❌ não existe |
| **`undefined`** | ✅ permitido | ❌ não existe |
| **Comentários** | ✅ permitido | ❌ não existe |
| **Uso** | Lógica da aplicação | Comunicação (APIs, arquivos) |

```jsx
const obj = { nome: "Ana", idade: 25 } // -> obj JS normal

// Objeto → JSON (para enviar para uma API, por exemplo)
const jsonString = JSON.stringify(obj)
// '{"nome":"Ana","idade":25}'  ← transformou em texto

// JSON → Objeto (ao receber dados de uma API)
const objDeVolta = JSON.parse(jsonString)
// { nome: 'Ana', idade: 25 }  ← virou objeto JS de novo
```

---