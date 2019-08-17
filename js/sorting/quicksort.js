
function quicksort(arr, p, r){
    if (p>= r) return;
    let q = partition(arr,p,r);
    quicksort(arr, p, q -1);
    quicksort(arr, q+1, r);
}

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
function swap(arr,i,j){
    let x = arr[i];
    arr[i]= arr[j];
    arr[j] = x;
}

function startQuicksort(arr, elementId){
    const oldArr = [...arr];
    let r = arr.length-1;
    var t0 = performance.now();
    quicksort(arr,0,r);
    var t1 = performance.now();
    var message = `Input array: ${oldArr}<br/>
        Sorted array: ${arr}<br/>
        Execution Time: ${t1-t0}`
    document.getElementById(elementId).innerHTML = message;
}