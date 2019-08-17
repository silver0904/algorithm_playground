
function bruteForceSort(arr){
    var smallest ;
    for (i=0; i< arr.length; i++){
        for(j=i; j<arr.length; j++){
            if (i==j){
                smallest = i;
                continue;
            }
            if(arr[j] < arr[smallest]){
                smallest = j;
            }
        }
        swap(arr,i,smallest);
    }
}

function startBruteForceSort(arr, elementId){
    const oldArr = [...arr];

    var t0 = performance.now();
    bruteForceSort(arr);
    var t1 = performance.now();
    var message = `Input array: ${oldArr}<br/>
        Sorted array: ${arr}<br/>
        Execution Time: ${t1-t0}`
    document.getElementById(elementId).innerHTML = message;
}

function swap(arr,i,j){
    let x = arr[i];
    arr[i]= arr[j];
    arr[j] = x;
}