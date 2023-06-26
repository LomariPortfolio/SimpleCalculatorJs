function returnResult()
{
let a = parseFloat(document.getElementById('a').value)
let op = document.getElementById('op').value;
let b = parseFloat(document.getElementById('b').value)
let result
let errorMessage='';

switch(op){
      case '+':
        result = (a * 1000) + (b*1000);
        result = result / 1000;
        //console.log('The result is: ' + result/1000);
        //return result;
        break;
      case '-':
        result = (a * 1000) - (b*1000);
        result = result / 1000;
        //console.log('The result is: ' + result/1000);
        //return result;
        break;
      case '*':
        result = a*b*1000 ;
        result = (result / 1000);
        //console.log('The result is: ' + result/1000);
        //return result;
        break;
      case '/':
        result = (a * 1000) / (b*1000);
        //result = result / 1000;
        //console.log('The result is: ' + result/1000);
        //return result;
        break;
      case '**':
        result = Math.pow(a,b);
        //console.log('The result is: ' + result/1000);
        //return result;
        break;
      default:
        errorMessage ='Invalid operator';
    }
    if (errorMessage) {
      document.getElementById('result').textContent = '';
      document.getElementById('error').textContent = errorMessage;
    } else {
      document.getElementById('result').textContent = 'The result is: ' + result;
      document.getElementById('error').textContent = '';
    }
    //document.getElementById('result').textContent= 'The result is: ' + result;
}