let history = document.getElementById('history-value');
let output = document.getElementById('output-value');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('#clear');
let backspace = document.querySelector('#backspace');
let equal = document.querySelector('#equal');


buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        history.innerText += value;
    })
})
equal.addEventListener('click',function(){
    let output_value = eval(history.innerText);
    output.innerText = output_value.toLocaleString("en");
})
clear.addEventListener('click', function(){
    output.innerText = "";
    history.innerText= "";
})
backspace.addEventListener('click', function(){
  let deleteLast = history.innerText.substring(history.innerText.length-1,0);
  history.innerText = deleteLast;
  output.innerText = eval(history.innerText);
 if(history.innerText === ""){
     output.innerText = "";
 }
})