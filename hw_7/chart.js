let ctx = document.getElementById('myChart').getContext('2d');

Chart.plugins.unregister(ChartDataLabels);


let data = {
    labels:['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [{
            data: [0, 1.5, 2.5, 1, 4, 3, 2],
            backgroundColor: [
                'rgba(225, 225, 225, 0)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)'
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)'
            ],
            borderWidth: 3
        }]
};

let customTooltips = function(tooltip) {
    // Tooltip Element
    let tooltipEl = document.getElementById('tooltip');

    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'tooltip';
        tooltipEl.innerHTML = '<table></table>';
        this._chart.canvas.parentNode.appendChild(tooltipEl);
    }

    // Hide if no tooltip
    if (tooltip.opacity === 0) {
        tooltipEl.style.opacity = 0;
        return;
    }

    // tooltipEl.classList.remove('above', 'below', 'no-transform');
    if (tooltip.yAlign) {
        tooltipEl.classList.add(tooltip.yAlign);
    } else {
        tooltipEl.classList.add('no-transform');
    }

    function getBody(bodyItem) {
        return bodyItem.lines;
    }

    // Set Text
    if (tooltip.body) {
        let titleLines = tooltip.title || [];
        let bodyLines = tooltip.body.map(getBody);

        let innerHtml = '<thead>';

        bodyLines.forEach(function(title) {
            innerHtml += '<tr><th>' + title + ' h' + '</th></tr>';
        });
        innerHtml += '</thead><tbody>';

     

        let tableRoot = tooltipEl.querySelector('table');
        tableRoot.innerHTML = innerHtml;
    }

    let positionY = this._chart.canvas.offsetTop;
    let positionX = this._chart.canvas.offsetLeft;

    // Display, position, and set styles for font
    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = positionX + tooltip.caretX + -30 + 'px';
    tooltipEl.style.top = positionY + tooltip.caretY + -60 + 'px';
    tooltipEl.style.fontFamily = tooltip._bodyFontFamily;
    tooltipEl.style.fontSize = tooltip.bodyFontSize + 'px';
    tooltipEl.style.fontStyle = tooltip._bodyFontStyle;
    // tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
};



let config = {
    responsive : true,
    plugins: [ChartDataLabels],
    animation: true,
    type: 'line',
          data: data,
    options: {
        plugins: {
            datalabels: {
                backgroundColor: '#000',
                borderColor: 'red',
                borderRadius: 4,
                color: '#fff',
                offset: '50',
            }
        },
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    min:0,
                    max: 5,
                    fontColor: 'rgba(0,0,0,1)'
                },
                gridLines: {
                    color: "rgba(245, 245, 247, 1)",
                    zeroLineColor: 'rgba(255, 255, 255, 0)'
              }
            }],
            xAxes: [{
                     ticks: {
                       fontColor: "rgba(0,0,0,1)"
                     },
                     gridLines: {
                       color: "rgba(0, 0, 0, 0)",
                       zeroLineColor: 'rgba(245, 245, 247, 1)'
                     },
                     display: true,
                     scaleLabel: {
                     display: true,
                }
             }],
        },
        tooltips: {
            enabled: false,
            titleAlign: 'center',
            bodyAlign: 'center',
            custom: customTooltips
        }
    }
};



let myLineChart = new Chart(ctx,config);

