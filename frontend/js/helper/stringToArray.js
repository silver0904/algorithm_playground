function stringToArray(string){
    var trimed = string.trim();
    var arr = trimed.split(/[ ,]/).map((item)=>{
        var num = parseInt(item, 10);
        if ((typeof(num) === NaN)) return
        else return num
    });
    return arr;
}