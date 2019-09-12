module.exports = function swap(arr,i,j){
    let x = arr[i];
    arr[i]= arr[j];
    arr[j] = x;
};