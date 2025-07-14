import { Bar } from 'react-chartjs-2';

const BarChart = () => (
    <div className="bg-gray-800 p-6 rounded-lg shadow h-[400px]">
        <h3 className="text-lg font-semibold mb-4">Accuracy</h3>
        <Bar
            data={{
                labels: ['Random Forest', 'XGBoost', 'CNN'],
                datasets: [{ data: [72.4, 61.3, 45.8], backgroundColor: ['#1E7774'] }]
            }}
            options={{
                indexAxis: 'y',
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    datalabels: {
                        color: '#fff',
                        formatter: (value) => `${value.toFixed(1)}%`,
                        font: { weight: 'bold', size: 14 }
                    }
                },
                scales: {
                    x: { ticks: { color: '#fff', padding: 25, font: { size: 15 } }, grid: { color: '#333' }, max: 100 },
                    y: { ticks: { color: '#fff' }, grid: { color: '#333' } }
                }
            }}
        />
    </div>
);
export default BarChart;
