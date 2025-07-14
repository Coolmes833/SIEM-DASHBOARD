import 'chart.js/auto'; //globalde en az 1 kere cagırılmalı.
import LogTable from '../components/LogTable';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';
import GeoMapCard from '../components/MapComponent';


const Dashboard = () => {
    return (
        <div>
            <nav className='flex items-center justify-left bg-gray-800 px-10 py-5'>
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
                <div className="bg-gray-800 min-w-full py-2 mb-8 rounded-lg ">
                    <nav className="flex items-center justify-between bg-gray-800 px-6 py-3 shadow">
                        <div className="flex items-center justify-between rounded-lg w-full px-4">
                            <span className="text-3xl font-semibold text-white">SIEM</span>
                            <span className="text-2xl font-semibold text-white"> menü buraya eklenecek  ☰ </span>
                        </div>
                    </nav>
                </div>
                {/* ÜST GRID 3'lü*/}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                    <GeoMapCard />
                    <PieChart />
                    <BarChart />
                </div>
            </div>
            <div className='grid grid-cols-1 px-8'>
                <LogTable />
            </div>
        </div>
    );
};

export default Dashboard; // componenti dışarı aktarmak için
