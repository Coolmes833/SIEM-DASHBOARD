import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const PieChart = () => (
    <div className="bg-gray-800 p-6 rounded-lg shadow h-[400px]">
        <h3 className="text-lg font-semibold mb-4">Classification by Machine Learning</h3>
        <div className="h-[330px] mb-5">
            <Pie
                data={{
                    labels: ['Attack', 'Normal', 'Anomaly'],
                    datasets: [{ data: [19.5, 11, 55.6], backgroundColor: ['#EF4A3C', '#F4B53F', '#1E7774'] }]
                }}
                options={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom', labels: { color: '#fff', padding: 20 } },
                        datalabels: {
                            color: '#fff',
                            formatter: (value) => `${value.toFixed(1)}%`,
                            font: { weight: 'bold', size: 14 }
                        }
                    }
                }}
                plugins={[ChartDataLabels]}
            />
        </div>
    </div>
);
export default PieChart;
