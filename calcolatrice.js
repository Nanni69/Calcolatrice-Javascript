var prompt = require('prompt-sync')();

function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mul(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

const scelta= prompt(`
    +Add
    -Sub
    *Mul
    /Div
    `);

const op1 = Number(prompt("Primo operando: "));
const op2 = Number(prompt("Secondo operando: "));

let res;
switch(scelta){
    case '+':
         res = add(op1, op2);
        console.log(`${op1} + ${op2} = ${res} `)
        break;
    case'-':
        res = sub(op1, op2);
        console.log(`${op1} - ${op2} = ${res} `)
        break;
    case'*':
        res = mul(op1, op2);
        console.log(`${op1} * ${op2} = ${res} `)
        break;
    case'/':
        res = div(op1, op2);
        console.log(`${op1} / ${op2} = ${res} `)
        break;
}