  var ctx = document.getElementById('myChart').getContext('2d');
  var gradient2 = ctx.createLinearGradient(0, 0, 0, 280);
    
      gradient2.addColorStop(0, 'rgba(7, 255, 255, 0.5)');
      gradient2.addColorStop(1, 'rgba(24, 54, 153, 0.5)');

  Chart.defaults.global.defaultFontColor = "#fff";

  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ['0', '50', '100', '150', '200', '250'], 
          datasets: [{
              label: '1',
              backgroundColor: gradient2,
              borderColor: 'transparent',
              data: [{
                  x: 0,
                  y: 80
              }, {
                  x: 25,
                  y: 94
              }, {
                  x: 50,
                  y: 85
              }, {
                  x: 75,
                  y: 92
              }, {
                  x: 100,
                  y: 100

              }, {
                  x: 125,
                  y: 94
              }]
          }]
      },

      // Configuration options go here
      options: {
        layout: {
          padding: {
            left: -10,
            right: -10,
            top: 0,
            bottom: 0
          }
        },
        legend: {
          display: false,
        },
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              max: 250,
              min: 0,
              stepSize: 50,
              padding: -40
            }

          }],
          yAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              max: 100,
              min: 0,
              stepSize: 25,
              padding: -34
            },
          }]
        }
      },

    });









var connectSlider = document.getElementById('slider-connect');

noUiSlider.create(connectSlider, {
    start: 40,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 100
    }
});