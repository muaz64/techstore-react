import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const salesData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [{
    label: 'Sales ($)',
    data: [12000, 19000, 15000, 24000],
    borderColor: 'rgb(59, 130, 246)',
    backgroundColor: 'rgba(59, 130, 246, 0.5)',
  }],
};

const trafficData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Website Visitors',
      data: [6500, 5900, 8000, 8100, 7600, 9500],
      fill: true,
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.3
    }],
};

const Dashboard = () => {
  return (
    <section id="dashboard" className="container mx-auto px-4 md:px-12 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">📊 Data Dashboard</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Quarterly Sales Performance</h3>
          <Bar data={salesData} />
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Monthly Website Traffic</h3>
          <Line data={trafficData} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;