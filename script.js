let num1 = 0; // when the user inputs the first number
let num2 = 0; // when the user inputs the second number
let para = "";
let ans =0;
let opera = "";
let check = 0 ; //checks if any operator has been clicked
const answer = document.getElementById("answer-space")

// C button
function reset(){
    // location.reload()
    ans
}

//
for(let i=0; i<10; i++){
    const buttonId = document.getElementById("btn-" + i)
    buttonId.addEventListener ("click", function(){
        para= para + i;
        answer.innerHTML = para;
    })
}

function operate (operator){
    num1=Number(para);
    para="";
    check+=1;
    opera=operator;
}

function add(){
    operater("+")
}
function sub(){
    operater("-")
}
function division(){
    operater("/")
}
function mul(){
    operater("*")
}