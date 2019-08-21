function findSubArraySumDR(arr, sum){
    var result = [];
    if(typeof(sum) === NaN) return result;
    
    subSum = 0;
    subResult = [];
    pointer = 0;
    for (i=0; i<arr.length; i++){
        for (j=pointer; j< arr.length; j++){
            subSum += arr[j];
            subResult.push(arr[j]);
            if(subSum > sum) {
                pointer = j;
                //remove the frist element, reuse the known data
                subSum-= arr[i];
                subResult.shift();
                j=arr.length;
            }
            else if(subSum == sum){
                result.push(JSON.stringify(subResult));
                j=arr.length;
            }
        }
    }
    return result;
}

function startfindSubArraySumDR(arr, sum, elementId){
    var t0 = performance.now();
    var result = findSubArraySumBF(arr,sum)
    var t1 = performance.now();

    var message = `Input array: ${arr}<br/>
        Result subarrays: ${result}<br/>
        Execution Time: ${t1-t0}`
    document.getElementById(elementId).innerHTML = message;
}