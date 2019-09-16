function startBruteForceSort(arr, elementId){
    const url = 'http://localhost:3000/api/sorting/bruteForce';
    const data = JSON.stringify({arr});
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
    function startQuicksort(arr, elementId){
        const url = 'http://localhost:3000/api/sorting/quicksort';
        const data = JSON.stringify({arr});
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