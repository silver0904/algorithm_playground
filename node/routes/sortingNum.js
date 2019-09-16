const express = require('express');
const router = express.Router();
const {performance} = require('perf_hooks');

const bruteForceSort = require('../algo/sortingNum/bruteForceSort');
const quicksort = require('../algo/sortingNum/quicksort')


router.post('/bruteForce',(req,res)=>{
    const oldArr = req.body.arr;
    let arr = req.body.arr;

    var t0 = performance.now();
    bruteForceSort(arr);
    var t1 = performance.now();
    const execTime = t1-t0


    res.send({recieved:oldArr, result: arr, time: execTime });

});

router.post('/quicksort',(req,res)=>{
    const oldArr = req.body.arr;
    let arr = req.body.arr;
    let r = arr.length-1;
    var t0 = performance.now();
    quicksort(arr,0,r);
    var t1 = performance.now();
    const execTime = t1-t0

    res.send({recieved:oldArr, result: arr, time: execTime });
})


module.exports = router;