document.addEventListener('DOMContentLoaded', function() {
    // Data for the chart
    const monthlyData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Profile Visits',
            data: [5, 15, 25, 15, 20, 15, 28, 15, 7, 15, 28, 15],
            fill: true,
            backgroundColor: 'rgba(66, 133, 244, 0.1)',
            borderColor: '#4285f4',
            tension: 0.4,
            pointBackgroundColor: '#4285f4',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 4
        }]
    };

    // Chart configuration
    const config = {
        type: 'line',
        data: monthlyData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#f0f0f0'
                    },
                    ticks: {
                        stepSize: 5
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    };

    // Initialize the chart
    const ctx = document.getElementById('visitsChart').getContext('2d');
    new Chart(ctx, config);
});