const swap = require('../../helper/swap');

function partition(arr, p, r){
    const pivot = arr[r];
    let i = p-1;
    for (j=p; j< r; j++){
        if (arr[j]<= pivot){
            i++;
            swap(arr,i,j);
        }
    }
    swap(arr, i+1,r);
    return i+1;
}

function quicksort(arr, p, r){
    if (p>= r) return;
    let q = partition(arr,p,r);
    quicksort(arr, p, q -1);
    quicksort(arr, q+1, r);
}
module.exports = quicksort;
