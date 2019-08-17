function stringToArray(string){
    var arr = string.split(' ').map((item)=>{
        var num = parseInt(item, 10);
        if ((typeof(num) === NaN)) return
        else return num
    });
    return arr;
}