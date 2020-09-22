function cpuChart(data, labels, ele) {
    
}

var cdata = [10,15,12,1];
var clabel = ["12:00", "12:01", "12:02", "12:03"];

var ctx = document.getElementById("cpu").getContext('2d');
    var myChart1 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: clabel,
            datasets: [{
                data: cdata,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }]
        },
        options: {            
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,  //{}
                    }
                }]                
            },
            legend:{
                display: false
            },
        },
    });
    function updateCpu(){
    axios({
    method: 'get',
    // baseURL: window.location.origin,
    url: 'http://127.0.0.1:8000/cpu',

    // responseType: 'json',
})
    .then(function (response) {
       
        myChart1.data.datasets[0].data.push(response.data);
        myChart1.data.labels.push(new Date().getSeconds());
        myChart1.update();
        console.log(response);
    })

    .catch(function (error) {
        console.log(' error=', error.message);
    });
};


var ctx = document.getElementById("mem").getContext('2d');
    var myChart2 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: clabel,
            datasets: [{
                data: cdata,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }]
        },
        options: {            
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,  //{}
                    }
                }]                
            },
            legend:{
                display: false
            },
        },
    });
    function updateMem(){
    axios({
    method: 'get',
    // baseURL: window.location.origin,
    url: 'http://127.0.0.1:8000/cpu',

    // responseType: 'json',
})
    .then(function (response) {
       
        myChart2.data.datasets[0].data.push(response.data);
        myChart2.data.labels.push(new Date().getSeconds());
        myChart2.update();
        console.log(response);
    })

    .catch(function (error) {
        console.log(' error=', error.message);
    });
};

var ctx = document.getElementById("dbtrend").getContext('2d');
    var myChart3 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: clabel,
            datasets: [{
                data: cdata,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }]
        },
        options: {            
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,  //{}
                    }
                }]                
            },
            legend:{
                display: false
            },
        },
    });
    function updateDB(){
    axios({
    method: 'get',
    // baseURL: window.location.origin,
    url: 'http://127.0.0.1:8000/cpu',

    // responseType: 'json',
})
    .then(function (response) {
       
        myChart3.data.datasets[0].data.push(response.data);
        myChart3.data.labels.push(new Date().getSeconds());
        myChart3.update();
        console.log(response);
    })

    .catch(function (error) {
        console.log(' error=', error.message);
    });
};

    setInterval(function() {
        updateCpu();
        updateMem();
        updateDB();
        
    }, 1000
        );

$("#cpuBtn").click(
    function () {
        data = [20, 14, 12, 15, 18, 70, 65];
        labels =  ["12:00","12:01","12:02", "12:03", "12:04", "12:05", "12:06"];
        cpuChart(data, labels, "cpu");
    }
);

$("#memBtn").click(
    function () {
        data = [20, 14, 12, 15, 18, 70, 65];
        labels =  ["12:00","12:01","12:02", "12:03", "12:04", "12:05", "12:06"];
        cpuChart(data, labels,"mem");
    }
);

$("#dbBtn").click(
    function () {
        data = [20, 14, 12, 15, 18, 70, 65];
        labels =  ["12:00","12:01","12:02", "12:03", "12:04", "12:05", "12:06"];
        cpuChart(data, labels,"dbtrend");
    }
);