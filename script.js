const buttons = document.querySelectorAll('.button')
const visor = document.querySelector('#big-visor')
const smolVisor = document.querySelector('#smol-visor')

let first = null;
let second = null;
let operation = null;

function buttonInput(id){
    if(id == 'zero'){
        visor.innerHTML += 0}
    else if(id == 'one'){
        visor.innerHTML += 1}
    else if(id == 'two'){
        visor.innerHTML += 2}
    else if(id == 'three'){
        visor.innerHTML += 3}
    else if(id == 'four'){
        visor.innerHTML += 4}
    else if(id == 'five'){
        visor.innerHTML += 5}
    else if(id == 'six'){
        visor.innerHTML += 6}
    else if(id == 'seven'){
        visor.innerHTML += 7}
    else if(id == 'eight'){
        visor.innerHTML += 8}
    else if(id == 'nine'){
        visor.innerHTML += 9}
    else if(id == 'add'){
        addButton()}
    else if(id == 'equals'){
        run(first, second, operation)}
    else if(id == 'subtract'){
        subtractButton()}
    else if(id == 'multiply'){
        multiplyButton()}
    else if(id == 'divide'){
        divideButton()}
    else if(id == 'clear'){
        clearButton()}
    else if(id == 'backspace'){
        backSpace()}
}


function run(a, b ,operation){
    if(a ==  null){ a = first = parseFloat(visor.innerHTML)}
    switch (operation){
      case add :
        add(a, b)
        break
      case subtract :
        subtract(a,b)
        break
      case multiply :
        multiply(a,b)
        break 
      case divide :
        divide(a,b)
        break
    }
}


function addButton(){
    // Check if it has any prior input. Runs the operation if so
    if(second != null){
        first = parseFloat(visor.innerHTML)
        run(first,second, add)
    } else{    
        second = parseFloat(visor.innerHTML)
        smolVisor.innerHTML = second;
        visor.innerHTML = '';
        operation = add;
    }
}

function add(a,b){
    let sum = a + b;
    visor.innerHTML = '';
    second = sum;
    operation = null;
    smolVisor.innerHTML = sum;
}

function subtractButton(){
    if(second != null){
        first = parseFloat(visor.innerHTML)
        run(first,second, subtract)
    } else{    
        second = parseFloat(visor.innerHTML)
        smolVisor.innerHTML = second;
        visor.innerHTML = '';
        operation = subtract;
    }
}
function subtract(a,b){
    let diff = b - a;
    visor.innerHTML = '';
    second = diff;
    operation = null;
    smolVisor.innerHTML = diff; 
}

function multiplyButton(){
    if(second != null){
        first = parseFloat(visor.innerHTML)
        run(first,second, multiply)
    } else{    
        second = parseFloat(visor.innerHTML)
        smolVisor.innerHTML = second;
        visor.innerHTML = '';
        operation = multiply;
    }
}


function multiply(a,b){
    let product = a * b;
    visor.innerHTML = '';
    second = product;
    operation = null;
    smolVisor.innerHTML = product; 
}


function divideButton(){
    if(second != null){
        first = parseFloat(visor.innerHTML)
        run(first,second, divide)
    } else{    
        second = parseFloat(visor.innerHTML)
        smolVisor.innerHTML = second;
        visor.innerHTML = '';
        operation = divide;
    }
}


function divide(a,b){
    let product = b/a;
    visor.innerHTML = '';
    second = product;
    operation = null;
    smolVisor.innerHTML = product; 
}

function clearButton(){
    first = null;
    second = null;
    operation = null;
    smolVisor.innerHTML = '';
    visor.innerHTML = '';
}

function backSpace(){
    let toBackspace = visor.innerHTML;
    visor.innerHTML = toBackspace.replace(toBackspace[toBackspace.length -1], '')
}


buttons.forEach((button) =>{
    button.addEventListener('click', () =>{
        buttonInput(button.id)
    })
})


