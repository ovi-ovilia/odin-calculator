// DUMB ASS DESIGN. THE DOM SHOULDNT INFLUENCE THE RESULTS BUT THE OTHER WAY AROUND
// MAKE SURE THAT NEXT TIME YOU USE OBJECT AND CALL FUNCTIONS TO THEM INFLUENCE THE DOM
// FFS IM DUMB BUT AT LEAST IT'S (KIND OF) DONE

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
    else if(id == 'float'){
        float()
    }
}


function run(a, b ,operation){
    if(visor.innerHTML == ''){return}
    if(a ==  null){ a = parseFloat(visor.innerHTML)}
    switch (operation){
        // When a has no value the functions still run. Returning NaN
      case add :
        add(a, b);
        operator.innerHTML = '';
        break
      case subtract :
        subtract(a,b);
        operator.innerHTML = '';
        break
      case multiply :
        multiply(a,b);
        operator.innerHTML = '';
        break 
      case divide :
        divide(a,b)
        operator.innerHTML = '';
        break
    }
}


function addButton(){
    // Check if it has any prior input. Runs the operation if so
    if(second != null && visor.innerHTML != ''){
        first = parseFloat(visor.innerHTML);
        run(first,second, add);
        operator.innerHTML = '';
    } else if(second != null && visor.innerHTML == ''){
        operation = add;
        operator.innerHTML = '+';
        first = null
    }else{    
        second = parseFloat(visor.innerHTML)
        smolVisor.innerHTML = second;
        visor.innerHTML = ''
        operator.innerHTML = '+';
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
        if(second != null && visor.innerHTML != ''){

            first = parseFloat(visor.innerHTML);
            run(first,second, subtract);
            operator.innerHTML = '';
        } else if(second != null && visor.innerHTML == ''){

            operation = subtract;
            operator.innerHTML = '-';
            first = null;
        }else{    

            second = parseFloat(visor.innerHTML)
            smolVisor.innerHTML = second;
            visor.innerHTML = ''
            operator.innerHTML = '-';
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
    if(second != null && visor.innerHTML != ''){
        first = parseFloat(visor.innerHTML);
        run(first,second, multiply);
        operator.innerHTML = '';
    } else if(second != null && visor.innerHTML == ''){
        operation = multiply;
        operator.innerHTML = 'x';
        first = null;
    }else{    
        second = parseFloat(visor.innerHTML)
        smolVisor.innerHTML = second;
        visor.innerHTML = ''
        operator.innerHTML = 'x';
        operation = multipply;
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
    if(second != null && visor.innerHTML != ''){
        first = parseFloat(visor.innerHTML);
        run(first,second, divide);
        operator.innerHTML = '';
    } else if(second != null && visor.innerHTML == ''){
        operation = divide;
        operator.innerHTML = '/';
        first = null;
    }else{    
        second = parseFloat(visor.innerHTML)
        smolVisor.innerHTML = second;
        visor.innerHTML = ''
        operator.innerHTML = '/';
        operation = divide;
    }
}


function divide(a,b){
    if(a == 0){alert('haha!! You cannot divide by 0'), clearButton(); return}
    let product = b/a;
    visor.innerHTML = '';
    second = Number(product.toFixed(2));
    operation = null;
    smolVisor.innerHTML = Number(product.toFixed(2)); 
}

function clearButton(){
    first = null;
    second = null;
    operation = null;
    smolVisor.innerHTML = '';
    visor.innerHTML = '';
    operator.innerHTML = '';
}

function backSpace(){
    let toBackspace = visor.innerHTML;
    visor.innerHTML = toBackspace.replace(toBackspace[toBackspace.length -1], '')
}

function float(){
    let x = visor.innerHTML;
    visor.innerHTML = Number.parseFloat(x).toFixed(0);
    
}


buttons.forEach((button) =>{
    button.addEventListener('click', () =>{
        buttonInput(button.id)
    })
})


