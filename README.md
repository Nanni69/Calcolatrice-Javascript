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

const add_ = function (a, b) {
    return a + b;
}



const sub_ = function (a, b) {
    return a - b;
}



const mul_ = function (a, b) {
    return a * b;
}


const div_ = function (a, b) {
    return a / b;
}

const add2 = (a, b) => {
    return a + b;
}

const sub2 = (a, b) => {
    return a - b;
}

const mul2 = (a, b) => {
    return a * b;
}

const div2 = (a, b) => {
    return a / b;
}

const calc2 = (a, b, op) => {
    return op(a,b);
}






function calc() {
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
    
}

function calc_() {
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
             res = add_(op1, op2);
            console.log(`${op1} + ${op2} = ${res} `)
            break;
        case'-':
            res = sub_(op1, op2);
            console.log(`${op1} - ${op2} = ${res} `)
            break;
        case'*':
            res = mul_(op1, op2);
            console.log(`${op1} * ${op2} = ${res} `)
            break;
        case'/':
            res = div_(op1, op2);
            console.log(`${op1} / ${op2} = ${res} `)
            break;
    }
    
}

function calc2() {
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
             res = add2(op1, op2);
            console.log(`${op1} + ${op2} = ${res} `)
            break;
        case'-':
            res = sub2(op1, op2);
            console.log(`${op1} - ${op2} = ${res} `)
            break;
        case'*':
            res = mul2(op1, op2);
            console.log(`${op1} * ${op2} = ${res} `)
            break;
        case'/':
            res = div2(op1, op2);
            console.log(`${op1} / ${op2} = ${res} `)
            break;
    }
    
}


let res1 = calc(a, b, add_);
console.log(res1);
let res2 = calc(a, b, sub_);
console.log(res2);
let res3 = calc(a, b, mul_);
console.log(res3);
let res4 = calc(a, b, div_);
console.log(res4);




let res4 = add2(a, b);
console.log(res4);
let res5 = sub2(a, b);
console.log(res5);
let res6 = mul2(a, b);
console.log(res6);
let res7 = div2(a, b);
console.log(res7);





