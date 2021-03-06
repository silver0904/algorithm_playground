function startfindSubArraySumBF(arr, sum, elementId){
    const url = 'http://localhost:3000/api/findSubArraySum/bruteForce';
    const data = JSON.stringify({arr,sum});
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
            var message = `Result subarrays: ${result}<br/>Execution Time: ${time}`
            document.getElementById(elementId).innerHTML = message;
        });
    
}

function startfindSubArraySumDR(arr, sum, elementId){
    const url = 'http://localhost:3000/api/findSubArraySum/dataReuse';
    const data = JSON.stringify({arr,sum});
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
            var message = `Result subarrays: ${result}<br/>Execution Time: ${time}`
            document.getElementById(elementId).innerHTML = message;
        });
}