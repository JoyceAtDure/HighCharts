// AXIOS GLOBALS
axios.defaults.headers.common['X-Auth-Token'] =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

let recover;
  axios
    .get('https://api.covid19api.com/country/india/status/confirmed/live?from=2021-04-05T12:00:00Z&to=2021-04-06T00:00:00Z', {
      timeout: 8000
    })
    .then(res => showOutputnow(res)
      
    )
    .catch(err => console.error(err));


  axios
    .get('https://api.covid19api.com/total/country/india?from=2021-04-05T12:00:00Z&to=2021-04-06T00:00:00Z', {
      timeout: 5000
    })
    .then(res => showOutputDeath(res)
      
    )
    .catch(err => console.error(err));

  

  axios
    .get('https://api.covid19api.com/total/country/india?from=2021-04-05T12:00:00Z&to=2021-04-06T00:00:00Z', {
      timeout: 5000
    })
    .then(res => showOutputRecovered(res)
      
    )
    .catch(err => console.error(err));


// Show output in browser now
function showOutputnow(res) {
  document.getElementById('res1').innerHTML = `
  <div class="card mt-3">
  <div class="card-body">
  <p>${JSON.stringify(res.data[0].Cases
  
  )}</p>
  </div>
</div>
`;
}

// Show output in browser.map(d =>d.Deaths)
function showOutputDeath(res) {
  document.getElementById('res2').innerHTML = `
  <div class="card mt-3">
    <div class="card-body">
      <p>${JSON.stringify(res.data[0].Deaths)}</p>
    </div>
  </div>

`;
}

// Show output in browser
function showOutputRecovered(res) {
    recover = JSON.stringify(res.data[0].Recovered);
    console.log(recover);
  document.getElementById('res3').innerHTML = `
  
  <div class="card mt-3">
    <div class="card-body">
      <p>
      
     ${JSON.stringify(res.data[0].Recovered)}</p>
    </div>
  </div>

`;
}







Highcharts.chart('container-1', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in January, 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Recover',
            y:recover,
            sliced: true,
            selected: false
        }, {
            name: 'Active',
            y: 6.84
        }, {
            name: 'Death',
            y: 1.61
        }]
    }]
});









// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['in-py', 0],
    ['in-ld', 1],
    ['in-wb', 2],
    ['in-or', 3],
    ['in-br', 4],
    ['in-sk', 5],
    ['in-ct', 6],
    ['in-tn', 7],
    ['in-mp', 8],
    ['in-2984', 9],
    ['in-ga', 10],
    ['in-nl', 11],
    ['in-mn', 12],
    ['in-ar', 13],
    ['in-mz', 14],
    ['in-tr', 15],
    ['in-3464', 16],
    ['in-dl', 17],
    ['in-hr', 18],
    ['in-ch', 19],
    ['in-hp', 20],
    ['in-jk', 21],
    ['in-kl', 22],
    ['in-ka', 23],
    ['in-dn', 24],
    ['in-mh', 25],
    ['in-as', 26],
    ['in-ap', 27],
    ['in-ml', 28],
    ['in-pb', 29],
    ['in-rj', 30],
    ['in-up', 31],
    ['in-ut', 32],
    ['in-jh', 33]
];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/in/in-all'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/in/in-all.js">India</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: data,
        name: 'Random data',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});
