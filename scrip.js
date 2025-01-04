const resultbox=document.querySelector('#result')
const clearbtn=document.querySelector('.spantwo')
const deletebtn=document.querySelector('.deletebtnn')
const dividebtn=document.querySelector('.divide')
const mulltiplybtn=document.querySelector('.multiply')
const substractionbtn=document.querySelector('.substraction')
const additionbtn=document.querySelector('.addition')
const equalbtn=document.querySelector('#spanone')
const numberbtns=document.querySelectorAll(".num")
const decimalbtn=document.querySelector('#decimal')

// initsialsing variables 
let result='';
let operation='';
let previousoperand=0;


//function for appendnumber in display
const appendNumber=(num)=>{
    if (num ==='.'&& result.includes('.')) return;// to add decimal one time
    result+=num 
updatedisplay();
}

//function to update display
const updatedisplay= ()=> {
    if(operation){
        resultbox.innerText=`${previousoperand}  ${operation}  ${result}`;
    }
    else{
    resultbox.innerText=result;
}
}
//function to select operator
const selectoperator =(operatorvalue) => {
    if (result === '')return;

    if(operation !=='' && previousoperand !==''){
        calculateresult();
    }
    operation = operatorvalue;
    previousoperand = result;
    result ='';
    updatedisplay();
}


//function to calculate result
const calculateresult=()=>{
let evalutedresult;
const prev=previousoperand;
const current=result;

if (isNaN(prev) || isNaN(current)) return;
switch (operation) {
   case '+':
  evalutedresult=prev + current;
        break; 

  case '-': 
 evalutedresult=prev-current;
     break; 

 case '*' :
 evalutedresult=prev * current;
  break;

 case '/' :
 evalutedresult=prev / current;
    break; 

    default:
    return;

}

result=evalutedresult.toString();
operation='';
previousoperand='';

}


//adding eventlistener to nmbers button

numberbtns.forEach(button => {
    button.addEventListener('click',()=>{
    appendNumber(button.innerText);
})    
});

//function to clearscreen
const cleardisplay=()=>{
    result='';
    previousoperand='';
    operation='';
    updatedisplay();
}
//function to delete last digit
const deletelastdigit=()=>{
    if (result==='')return;
    result=result.slice(0,-1);
    updatedisplay()
}
decimalbtn.addEventListener("click",()=>appendNumber("."));
additionbtn.addEventListener("click",()=>selectoperator("+"));
substractionbtn.addEventListener("click",()=>selectoperator("-"))
mulltiplybtn.addEventListener("click",()=>selectoperator("*"));
dividebtn.addEventListener("click",()=>selectoperator("/"));

equalbtn.addEventListener('click',() => {
//    if (result === ' ')return;

     calculateresult();

     updatedisplay();
    })
clearbtn.addEventListener('click',cleardisplay)
deletebtn.addEventListener('click',deletelastdigit)
