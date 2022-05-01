const ctx4 = document.getElementById('myChart4').getContext('2d');


fetch('https://api.coincap.io/v2/assets')
    .then(res => res.json())
    .then(({ data }) => {
        const myChart2 = new Chart(ctx4, {
            type: 'polarArea',
            data: {
                labels: [data[0].id, data[1].id, data[2].id, data[3].id, data[4].id, data[5].id],
                datasets: [{
                    label: '#Crypto',
                    data: [data[0].marketCapUsd, data[1].marketCapUsd, data[3].marketCapUsd, data[4].marketCapUsd, data[5].marketCapUsd],

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
        });
    })