const express = require('express');
const router = express.Router();
const {performance} = require('perf_hooks');

const bruteForce = require('../algo/findSubArraySum/bruteForce');
const dataReuse =  require('../algo/findSubArraySum/dataReuse');

router.post('/bruteForce',(req,res)=>{
    let arr = req.body.arr;
    let sum = req.body.sum;

    var t0 = performance.now();
    const result = bruteForce(arr,sum);
    var t1 = performance.now();
    const execTime = t1-t0


    res.send({recieved:arr, result: result, time: execTime });

});

router.post('/dataReuse',(req,res)=>{

    let arr = req.body.arr;
    let sum = req.body.sum;

    var t0 = performance.now();
    const result = dataReuse(arr,sum);
    var t1 = performance.now();
    const execTime = t1-t0

    res.send({recieved:arr, result: result, time: execTime });
})


module.exports = router;