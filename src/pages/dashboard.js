import React from 'react';

// ilk harfi "D" küçük olursa html zannetti!, ilk harf componentler için daima BÜYÜK! 
// "function()" yerine artık arrow function yani "=>" , yeni ES6 ile gelen güncelleme.
const Dashboard = () => {
    return (
        <div>
            <nav className='flex items-center justify-between bg-gray-800 px-6 py-4 shadow'>
                <div className='flex items-center space-x-4'>
                    <img
                        src="/sulh_logo.ico"
                    // className="h-10 w-10" 

                    />
                    <span className='text-xl font-bold text-gray-100'>SULH Dashboard</span>
                </div>
            </nav>
        </div>
    );
};

export default Dashboard; // componenti dışarı aktarmak için
