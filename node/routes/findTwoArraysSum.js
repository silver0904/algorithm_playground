const express = require('express');
const router = express.Router();
const {performance} = require('perf_hooks');

const bruteForce = require('../algo/findTwoArraysSum/bruteForce');
const startGreedy = require('../algo/findTwoArraysSum/greedy');

router.post('/bruteForce', (req,res)=>{
    let arr1 = req.body.arr1;
    let arr2 = req.body.arr2;
    let sum = req.body.sum;

    var t0 = performance.now();
    const result = bruteForce(arr1, arr2, sum);
    var t1 = performance.now();
    const execTime = t1-t0

    res.send({ result: result, time: execTime });
});

router.post('/greedy', (req,res)=>{
    let arr1 = req.body.arr1;
    let arr2 = req.body.arr2;
    let sum = req.body.sum;

    var t0 = performance.now();
    const result = startGreedy(arr1, arr2, sum);
    var t1 = performance.now();
    const execTime = t1-t0

    res.send({ result: result, time: execTime });
});




module.exports = router;