const swap = require('../../helper/swap');

module.exports = function bruteForceSort(arr){
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