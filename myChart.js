var cdata = [10,15,12,1];
var clabel = ["0", "1", "2", "3"];
var mdata = [10,15,12,1];
var mlabel = ["0", "1", "2", "3"];
var ddata = [10,15,12,1];
var dlabel = ["0", "1", "2", "3"];

var ctx = document.getElementById("cpu").getContext('2d');
    var cpuChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: clabel,
            datasets: [{
                data: cdata,
                borderColor: 'rgba(93, 188, 210, 1)',
                backgroundColor: 'rgba(93, 188, 210, 0.2)',
                borderWidth:1,
                pointRadius:0.5,
            }]
        },
        options: {            
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,  //{}
                    }
                }],
                xAxes: [{
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 5,
                        maxRotation: 0,
                    }
                }]                
            },
            legend:{
                display: false
            },
        },
    });

var ctx = document.getElementById("mem").getContext('2d');
    var memChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: mlabel,
            datasets: [{
                data: mdata,
                borderColor: 'rgba(205,157,218, 1)',
                backgroundColor: 'rgba(205,157,218, 0.2)',
                borderWidth:1,
                pointRadius:0.5,
            }]
        },
        options: {            
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,  //{}
                    }
                }],
                xAxes: [{
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 5,
                        maxRotation: 0,
                    }
                }]                   
            },
            legend:{
                display: false
            },
        },
    });

var ctx = document.getElementById("dbtrend").getContext('2d');
    var dbChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dlabel,
            datasets: [{
                data: ddata,
                borderColor: 'rgba(175,215,145, 1)',
                backgroundColor: 'rgba(175,215,145, 0.2)',
                borderWidth:1,
                pointRadius:0.5,
            }]
        },
        options: {            
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,  //{}
                    }
                }],
                xAxes: [{
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 5,
                        maxRotation: 0,
                    }
                }]                   
            },
            legend:{
                display: false
            },
        },
    });


function getNewData(chart, src){
    axios({
        method: 'get',
        // baseURL: window.location.origin,
        url: 'http://127.0.0.1:8000/'+src,

        // responseType: 'json',
    })

    .then(function (getresponse){
        //console.log(response);
        var d = new Date();
        chart.data.datasets[0].data.push(getresponse.data);
        chart.data.labels.push(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds());
        chart.update();
    })

    .catch(function (error) {
        console.log(' error=', error.message);

        //dbChart.data.datasets[0].data.push(response.data);
        //dbChart.data.labels.push(new Date().getSeconds());
        //dbChart.update();
        //console.log(response);
    });
};

function setInitDate(){
    var d = new Date();
    cpuChart.data.datasets[0].data.unshift(0);
    cpuChart.data.labels.unshift(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds());
    cpuChart.update();

    memChart.data.datasets[0].data.unshift(0);
    memChart.data.labels.unshift(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds());
    memChart.update();

    dbChart.data.datasets[0].data.unshift(0);
    dbChart.data.labels.unshift(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds());
    dbChart.update();
};

// function updateChart(chart, data){
//     chart.data.datasets[0].data.push(data);
//     chart.data.labels.push(new Date().getSeconds());
//     chart.update();
// };
setInitDate();

setInterval(function() {
        getNewData(cpuChart,"cpu");
        getNewData(memChart,"mem");
        getNewData(dbChart,"db");
        //updateChart(memChart, getNewData("mem"));
        // updateChart(dbChart, getNewData("db"));
    }, 60000
);
