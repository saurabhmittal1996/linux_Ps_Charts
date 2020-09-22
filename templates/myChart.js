function cpuChart(data, labels, ele) {
    var ctx = document.getElementById(ele).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }]
        },
        options: {            
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }]                
            },
            legend:{
                display: false
            },
        },
    });
}

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