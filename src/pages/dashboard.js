import React from 'react';
import MapComponent from '../components/MapComponent'
import { Pie, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // pie chart üzerine sayısal değer için
import logs from '../logData' // timestamp tablosu için logData.js içinde fake üretildi.
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels); // plug in , grafik üstüne % ve yazı için


// ilk harfi "D" küçük olursa html zannetti!, ilk harf componentler için daima BÜYÜK! 
// "function()" yerine artık arrow function yani "=>" , yeni ES6 ile gelen güncelleme.
const Dashboard = () => {
    return (
        <div>
            <nav className='flex items-center justify-center bg-gray-800 px-10 py-5'>
                <div className='flex items-center space-x-4'>
                    <img
                        src="/sulh_logo.ico"
                        alt="logo yüklenemedi"
                        className="h-10 w-10"

                    />
                    <span className='text-3xl font-bold'>SULH Dashboard</span>
                </div>
            </nav>

            {/* Dashboard içerik */}
            <div className="p-8 bg-black">
                <div className="bg-gray-800 min-w-full py-2 mb-6 rounded-lg ">
                    <nav className="flex items-center justify-between bg-gray-800 px-6 py-3 shadow">
                        <div className="flex items-center rounded-lg space-x-6 pb-25">
                            <span className="text-3xl font-semibold text-white">SIEM</span>
                        </div>
                    </nav>
                </div>
                {/* ÜST GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

                    {/* GeoIP Map */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow h-[400px] overflow-hidden">
                        <h3 className="text-lg font-semibold mb-4">GeoIP Map</h3>
                        <MapComponent />
                    </div>

                    {/* Pie Chart */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow h-[400px]">
                        <h3 className="text-lg font-semibold mb-4">Classification by Machine Learning</h3>
                        <div className="h-[330px] mb-5">
                            <Pie
                                data={{
                                    labels: ['Attack', 'Normal', 'Anomaly'],
                                    datasets: [
                                        {
                                            data: [19.5, 11, 55.6],
                                            backgroundColor: ['#EF4A3C	', '#F4B53F', '#1E7774'],
                                        },
                                    ],
                                }}
                                options={{
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: {
                                            position: 'bottom',
                                            labels: { color: '#fff', padding: 20 },

                                        },
                                        datalabels: {
                                            color: '#fff',
                                            formatter: (value) => `${value.toFixed(1)}%`,
                                            font: {
                                                weight: 'bold',
                                                size: 14,
                                            },
                                        }
                                    },
                                }}

                            />
                        </div>

                    </div>

                    {/* Accuracy Bar Chart */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow h-[400px]">
                        <h3 className='text-lg font-semibold mb-4'> Accuracy </h3>
                        <Bar
                            data={{
                                labels: ['Random Forest', 'XGBoost', 'CNN'],
                                datasets: [
                                    {
                                        data: [72.4, 61.3, 45.8],
                                        backgroundColor: ['#1E7774'],
                                    },
                                ],
                            }} options={{
                                indexAxis: 'y',
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: { display: false },
                                    datalabels: {
                                        color: '#fff',
                                        formatter: (value) => `${value.toFixed(1)}%`,
                                        font: {
                                            weight: 'bold',
                                            size: 14,
                                        },
                                    }
                                },
                                scales: {
                                    x: {
                                        ticks: {
                                            color: '#fff', padding: 25, font: {
                                                size: 15,
                                            },
                                        },
                                        grid: { color: '#333' },
                                        max: 100
                                    },
                                    y: {
                                        ticks: { color: '#fff' },
                                        grid: { color: '#333' },
                                    },
                                },
                            }}
                        />

                    </div>
                </div>
                {/* Timestamp Tablee*/}
                <div className="bg-gray-800 p-6 rounded-lg shadow overflow-x-auto">
                    <h3 className="text-lg font-semibold mb-4">Timestamp</h3>
                    <table className="min-w-full text-left text-sm">
                        <thead className="border-b border-gray-600">
                            <tr>
                                <th className="py-2">Timestamp</th>
                                <th className="py-2">Source IP</th>
                                <th className="py-2">Destination IP</th>
                                <th className="py-2">ML Classification</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            {logs.map((log, index) => (
                                <tr key={index}>
                                    <td className="py-2">{log.timestamp}</td>
                                    <td className="py-2">{log.sourceIP}</td>
                                    <td className="py-2">{log.destIP}</td>
                                    <td className="py-2">{log.ML_classification}</td>
                                    <td
                                    >
                                        {log.classification}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>


            </div>
        </div>
    );
};

export default Dashboard; // componenti dışarı aktarmak için
