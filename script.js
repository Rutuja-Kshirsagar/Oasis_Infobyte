

var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');

// for calculating the result
var operand1 = null;
var operand2 = null;
var operator = null;

for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', calculate);
}

function calculate(){
    var value = this.getAttribute('data-value') ;
    var text = display.innerHTML.trim();
    // console.log(value);

    // if value is an operator
    if(value == '+' || value == '-' || value == '*' || value == '/'){
    //  read whatever was there in the display
    //  and store it in operator1
    //  also take the button pressed as your operator

        operand1 = parseFloat(text);
        display.innerHTML = "";
        operator = value;
        
    }

    // if value is allclear
    else if(value == 'ac'){
        display.innerHTML = "";
    }

    // if the value is negate sign
    else if(value == 'sign'){
        var existingText = text;
        existingText = -1 * existingText;
        display.innerHTML = existingText;
    }

    // if value is percent
    else if(value == '%'){
        var existingText = text;
        existingText = existingText/100;
        display.innerHTML = existingText;
    }

    // if value is decimal
    else if(value == '.'){
        if(!text.includes('.')){
            var existingText = text;
            display.innerHTML = existingText + '.';
        }
    }

    // if value is equals
    else if(value =='='){
        operand2 = parseFloat(text);
        // calculate the result
        // evalute 2 + 9
        var result = eval(operand1 +' '+ operator +' '+ operand2);
        console.log(result);
        display.innerHTML = result;
        operand1 = result;
        operand2 = null;
        operator = null;
        
    }

    // if value is number
    else{
        display.innerHTML += value;
    }
}