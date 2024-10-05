import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import "../../css/dashboard.css";

const statusData = [
  { name: "Completed", value: 2 },
  { name: "Pending", value: 1 },
  { name: "Canceled", value: 1 },
];

const spendingsData = [
  { name: "June", Spendings: 0 },
  { name: "July", Spendings: 687.94 },
  { name: "August", Spendings: 230.95 },
  { name: "September", Spendings: 1200.99 },
  { name: "October", Spendings: 0 },
  { name: "November", Spendings: 0 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

function Dashboard() {
  return (
    <div className="orders-content-test">
      <div className="order-card-test">
        <h3 className="order-text">Status of your orders last 6 months</h3>
        <PieChart width={800} height={400}>
          <Pie
            data={statusData}
            cx="60%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {statusData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            align="right"
            verticalAlign="middle"
            layout="vertical"
            wrapperStyle={{
              marginRight: "10%",
            }}
            formatter={(value, entry) => (
              <span style={{ color: entry.color }}>{value}</span>
            )}
          />
        </PieChart>
      </div>

      <div className="order-container-card-test">
        <h3 className="order-text">Spendings in the last 6 months</h3>
        <LineChart
          width={800}
          height={400}
          data={spendingsData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Spendings"
            stroke="orange"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </div>
  );
}

export default Dashboard;
