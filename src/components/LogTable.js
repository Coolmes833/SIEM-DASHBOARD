import logs from '../logData';

const LogTable = () => (
    <div className="bg-gray-800 p-6 rounded-lg shadow overflow-x-auto">
        <h3 className="text-2xl font-semibold mb-4">Timestamp</h3>
        <table className="min-w-full text-left text-l">
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
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
export default LogTable;
