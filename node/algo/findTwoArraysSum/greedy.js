const quicksort = require('../sortingNum/quicksort');


module.exports = function startGreedy(arr1, arr2, sum){
    result = 0;

    quicksort(arr1, 0, arr1.length-1);
    quicksort(arr2, 0, arr2.length-1);
    let startIndex1= arr1.length-1; 
    while(arr1[startIndex1] > sum) startIndex1--;


    result = greedy(startIndex1, 0, arr1, arr2, sum);
    return result;
}

function greedy (i, j, arr1, arr2, sum){
    result = 0;
    const value = arr1[i]+arr2[j];
    if (i <0 || j>=arr2.length) return 0;

    if (value == sum){
        result++;
        result += checkArr2Repeat(arr2[j], arr2, j+1);
        result += greedy(i-1,j,arr1,arr2,sum);

    }
    else if (value > sum){
        result +=greedy(i-1,j, arr1, arr2, sum);
    }
    else{
        result += greedy(i,j+1,arr1,arr2,sum);
    }
    return result;
}

function checkArr2Repeat(currValue, arr2, index){
    result =0
    if (index >= arr2.length) return result;
    if (arr2[index] ==currValue){
        result ++;
        result += checkArr2Repeat(currValue,arr2,index+1)
    }
    return result;
    
}