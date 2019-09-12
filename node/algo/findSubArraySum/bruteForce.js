module.exports = function findSubArraySumBF(arr, sum){
    var result = [];
    
    for (i=0; i<arr.length; i++){
        subSum = 0;
        subResult = [];
        for (j=i; j< arr.length; j++){
            subSum += arr[j];
            subResult.push(arr[j]);
            if(subSum > sum) j=arr.length;
            else if(subSum == sum){
                result.push(JSON.stringify(subResult));
                j=arr.length
            }
        }
    }
    return result;
}