let num1 = 0; // when the user inputs the first number
let num2 = 0; // when the user inputs the second number
let para = "";
let ans =0;
let opera = "";
let check = 0 ; //checks if any operator has been clicked
const answer = document.getElementById("answer-space")

// C button
function reset(){
    location.reload() 
    // (this will allow the user reload the page )
    // answer.textContent =0;
}

// this allows the user input numbers frm 0-9
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

// create functions for the operators
function add(){
    operate("+")
}
function sub(){
    operate("-")
}
function division(){
    operate("/")
}
function mul(){
    operate("*")
}

// answer button
function answerBtn(){
    if (check === 1){
        num2=Number(para);
        switch(opera){
            case "+":
                ans= num1 + num2;
                para=""
                check=0
                break;
            case "-":
                ans= num1 - num2;
                para=""
                check=0
                break;
            case "/":
                ans= (num1 / num2).toFixed(3);
                para=""
                check=0
                break;
            case "*":
                ans= num1 * num2;
                para=""
                check=0
                break;
        }
    }
    answer.textContent = ans;
}

// decimal part
function dot(){

}