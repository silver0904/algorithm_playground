module.exports = function dataReuse(arr, sum){
    var result = [];
    // if(typeof(sum) === NaN) return result;
    subSum = 0;
    subResult = [];
    pointer = 0;
    for (i=0; i<arr.length; i++){
        for (j=pointer; j< arr.length; j++){
            subSum += arr[j];
            subResult.push(arr[j]);
            if(subSum > sum) {
                pointer==i?pointer=j+1:pointer=j;
                while (subSum > sum){
                    subSum-= subResult[0];
                    subResult.shift();
                    
                }
                break;
            }
            else if(subSum == sum){
                pointer==i?pointer=j+1:pointer=j;
                result.push(JSON.stringify(subResult));
                
                subSum-= subResult[0];
                subResult.shift();
                break;
            }
        }
    }
    return result;
};