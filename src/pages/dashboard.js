import React from 'react';
import MapComponent from '../components/MapComponent'
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';



// ilk harfi "D" küçük olursa html zannetti!, ilk harf componentler için daima BÜYÜK! 
// "function()" yerine artık arrow function yani "=>" , yeni ES6 ile gelen güncelleme.
const Dashboard = () => {
    return (
        <div>
            <nav className='flex items-center justify-between bg-gray-800 px-6 py-4'>
                <div className='flex items-center space-x-4'>
                    <img
                        src="/sulh_logo.ico"
                        alt="logo yüklenemedi"
                        className="h-10 w-10"

                    />
                    <span className='text-xl font-bold text-gray-100'>SULH Dashboard</span>
                </div>
            </nav>

            {/* Dashboard içerik */}
            <div className="p-8">
                {/* Başlık */}
                <h1 className="text-3xl font-bold mb-8">SIEM</h1>
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
                                    labels: ['A', 'B', 'C'],
                                    datasets: [
                                        {
                                            data: [10, 20, 30],
                                            backgroundColor: ['#f00', '#0f0', '#00f'],
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

                                    },
                                }}

                            />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard; // componenti dışarı aktarmak için
