# Módulo 01 - Instalando e Entendendo

## Aula 01 - O que é Typescript
É uma liguagem desenvolvida pela microsoft, com base no Javascript para tronar o desenvolvimento mais claro e seguro.

## Aula 02 - Exemplo da necessidado do Typescript
### Exemplificando o problema:
```js
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const btnCalc = document.getElementById("calc");
const res = document.getElementById("resultado");

const somar = (n1, n2) => n1 + n2;

btnCalc.addEventListener('click', () => {
    res.innerHTML = somar(n1.value, n2.value);
});
```
**Problema: tipagem nos inputs.**
Observe que os inputs, mesmo que sendo do tipo "number" no HTML, no JS são do tipo `string`.
Então, se por exemplo:
`n1 = 10 e n2 = 10, o resultado será 1010`, pois o operador + entre dias strings no JS concatena elas (Observe no código acima)

### Resolvendo o problema com JS
```js
const somar = (n1, n2) => {
    if (typeof n1 == 'number' && typeof n2 == 'number') 
        return n1 + n2;
    else {
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        return n1 + n2;
    }
};
```