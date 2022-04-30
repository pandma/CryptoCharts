const ctx = document.getElementById('myChart').getContext('2d');


fetch('http://api.coinlayer.com/api/live?access_key=5ddbb53273b1a43516d71dc973f37520')
    .then(res => res.json())
    .then((crypto) => {
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Bitcoin', 'Etherium', ],
                datasets: [{
                    label: '#Crypto',
                    data: [crypto.rates.BTC, crypto.rates.ETH],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },

        });
    })