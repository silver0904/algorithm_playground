function randomNumbers(size,low,high){
    let numbers = "";
    let num;
    for (i=0;i<size;i++){
        num = Math.floor(Math.random() * high - low); 
        numbers = numbers.concat(num.toString());
        numbers = numbers.concat(' ');
        
    }
    return numbers;
}

function fillRandomNumbers(size, low, high, elementId){
    numbers = randomNumbers(size,low, high);
    document.getElementById(elementId).value = numbers
}