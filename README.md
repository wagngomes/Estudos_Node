# Estudos Node — Masterclass JavaScript (Rodrigo Branas)

Repositório com exemplos práticos implementados durante a Masterclass de JavaScript do [Rodrigo Branas](https://github.com/rodrigobranas).

## Conteúdo

| Arquivo | Tópico |
|---|---|
| [functions.js](functions.js) | Funções: declaration vs expression, higher-order functions, `arguments` e rest operator |
| [arrowFunctions.js](arrowFunctions.js) | Arrow functions: sintaxe, comportamento do `this` e ausência de `arguments` |
| [this.js](this.js) | O operador `this`: métodos de objeto, getters e setters |
| [contextEx.js](contextEx.js) | Contexto de execução: problema do `this` em funções aninhadas e solução com arrow function |
| [call_apply.js](call_apply.js) | `call`, `apply` e `bind`: alteração do contexto de execução |
| [new.js](new.js) | Palavra-chave `new`: funções construtoras, prototype e implementação manual de `_new` |
| [instanceOf.js](instanceOf.js) | Operador `instanceof`: cadeia de protótipos e implementação manual de `_instanceof` |
| [closures.js](closures.js) | Closures: escopo léxico estático, referências compartilhadas e IIFE com `bind` |

## Tópicos abordados

- **Funções** — declaration vs expression, hoisting, funções de ordem superior, objeto `arguments`, rest operator (`...args`)
- **Arrow Functions** — sintaxe concisa, herança léxica do `this`, retorno implícito de objetos
- **`this`** — comportamento em métodos, getters/setters, e contexto global
- **Contexto de execução** — perda do `this` em funções internas, padrão `that = this`, solução com arrow function
- **`call` / `apply` / `bind`** — invocação com contexto explícito; diferença entre argumentos individuais e array
- **Funções construtoras e `new`** — criação de objetos via factory function, `Object.setPrototypeOf`, prototype compartilhado e simulação do `new`
- **`instanceof`** — verificação da cadeia de protótipos e implementação recursiva manual
- **Closures** — escopo léxico estático, referências compartilhadas entre funções, IIFE e uso de `bind` para capturar o estado do loop

## Como executar

```bash
node <arquivo>.js
# exemplo:
node functions.js
```

Requer [Node.js](https://nodejs.org) instalado.
