function getHistory(){
    return document.getElementById("history-value").innerText;

}
function printHistory(num){
    document.getElementById('history-value').innerText=num;
}
function getOutput(){
    return document.getElementById('output-value').innerText;

}
function printOutput(num){
    if(num==""){
        document.getElementById('output-value').innerText=num;
    }else{
        document.getElementById('output-value').innerText=getFormattedNum(num);
    }
    
}

function getFormattedNum(num){
    if(num=='-'){
        return "";
    }
    var n = Number(num);
    var val = n.toLocaleString("en");
    return val;
}

//for comma separated to normal number feasible of being operated

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
// alert(reverseNumberFormat(getOutput()));


let operator = document.getElementsByClassName('operator');
for(let i = 0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        // alert('pressed'+this.id);
        if(this.id=='clear'){
            printHistory("");
            printOutput("");
        }
        else if(this.id == 'backspace'){
            let output = reverseNumberFormat(getOutput()).toString();
            if(output){//if has a valuue
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            let output = getOutput();
            let history = getHistory();
            // alert(this.id);
            if(output=="" &&history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substring(0,history.length-1);
                }
            }
            if(output!="" || history!=""){
                output = output==""?output:reverseNumberFormat(output);
                history = history + output ;
                if(this.id == "="){
                    var result = eval(history);
                    console.log(result);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    })
}

let number = document.getElementsByClassName('number');
for(let i = 0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        let output = reverseNumberFormat(getOutput());
        if(output!=NaN){// when output is a number
            output=output+this.id;
            printOutput(output);
        }
    })
}