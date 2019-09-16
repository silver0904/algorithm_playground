function startfindTwoArraysSumBF(arr1, arr2, sum, elementId){
    const url = 'http://localhost:3000/api/findTwoArraysSum/bruteForce';
    const data = JSON.stringify({arr1, arr2,sum});
    console.log(data);
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: data
    })
        .then(response =>response.json())
        .then(json=> {
            const result = json.result;
            const time = json.time;
            var message = `Result subarray pairs: ${result}<br/>Execution Time: ${time}`
            document.getElementById(elementId).innerHTML = message;
        });
    }
    

function startfindTwoArraysSumGD(arr1, arr2, sum, elementId){
    const url = 'http://localhost:3000/api/findTwoArraysSum/greedy';
    const data = JSON.stringify({arr1, arr2,sum});
    console.log(data);
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: data
    })
        .then(response =>response.json())
        .then(json=> {
            const result = json.result;
            const time = json.time;
            var message = `Result subarray pairs: ${result}<br/>Execution Time: ${time}`
            document.getElementById(elementId).innerHTML = message;
        });
    }