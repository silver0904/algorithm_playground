module.exports = function bruteForce(arr1, arr2, sum){
    result = 0;
    for (i=0; i<arr1.length; i++){
        for (j=0;j< arr2.length; j++){
            if (arr1[i]+ arr2[j]==sum){
                result++;
            }
        }
    }
    return result;
}