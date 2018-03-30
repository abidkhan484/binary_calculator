// parameter e is the click event
function action(e) {
    // older IE browsers have a srcElement property
    var btn = e.target || e.srcElement;
    // take the result output string
    var res = document.getElementById("res").innerHTML;
    // Get the clicked element
    document.getElementById("res").innerHTML = res + document.getElementById(btn.id).innerHTML;
}

// this function is for the conversion of decimal to binary
function decimalToBinary(num) {
    var res='', finalString='';
    // get the string which is the reverse of the required answer
	while (num!=0) {
		res += (num%2);
		num = Math.floor(num/2);
	}
    // reverse the string
    for (var idx=res.length-1; idx >= 0; idx--) 
        finalString += res[idx]
		
	return finalString;
}


function getResult(e) {
    var res = document.getElementById('res').innerHTML;

    if (res.indexOf('+') != -1) {
        let operand1, operand2;
        [operand1, operand2] = res.split('+');
        
        operand1 = parseInt(operand1, 2);
        operand2 = parseInt(operand2, 2);

        document.getElementById('res').innerHTML = decimalToBinary(operand1 + operand2);
    }
    else if (res.indexOf('-') != -1) {
        let operand1, operand2;
        [operand1, operand2] = res.split('-');
        
        operand1 = parseInt(operand1, 2);
        operand2 = parseInt(operand2, 2);

        document.getElementById('res').innerHTML = decimalToBinary(operand1 - operand2);
    } 
    else if (res.indexOf('*') != -1) {
        let operand1, operand2;
        [operand1, operand2] = res.split('*');
        
        operand1 = parseInt(operand1, 2);
        operand2 = parseInt(operand2, 2);

        document.getElementById('res').innerHTML = decimalToBinary(operand1 * operand2);
    } 
    else if (res.indexOf('/') != -1) {
        let operand1, operand2;
        [operand1, operand2] = res.split('/');
        
        operand1 = parseInt(operand1, 2);
        operand2 = parseInt(operand2, 2);

        document.getElementById('res').innerHTML = decimalToBinary(Math.floor(operand1 / operand2));
    }
}

document.getElementById('btn1').onclick = action;
document.getElementById('btn0').onclick = action;
document.getElementById('btnSum').onclick = action;
document.getElementById('btnSub').onclick = action;
document.getElementById('btnMul').onclick = action;
document.getElementById('btnDiv').onclick = action;

document.getElementById('btnClr').onclick = function clearResult() {
    document.getElementById('res').innerHTML = '';
};
document.getElementById('btnEql').onclick = getResult;

