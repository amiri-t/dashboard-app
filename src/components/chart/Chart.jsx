import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "November",
    investments: 2600,
    incomes: 5400,
    sales: 2100,
  },
  {
    name: "December",
    investments: 4200,
    incomes: 3100,
    sales: 1200,
  },
  {
    name: "January",
    investments: 2000,
    incomes: 2400,
    sales: 1400,
  },
  {
    name: "February",
    investments: 3000,
    incomes: 1598,
    sales: 1210,
  },
  {
    name: "March",
    investments: 2000,
    incomes: 6800,
    sales: 1290,
  },
  {
    name: "April",
    investments: 2780,
    incomes: 2908,
    sales: 1400,
  },
  {
    name: "May",
    investments: 1890,
    incomes: 4800,
    sales: 1681,
  },
  {
    name: "June",
    investments: 2390,
    incomes: 3800,
    sales: 1300,
  },
  {
    name: "July",
    investments: 3490,
    incomes: 7300,
    sales: 1800,
  },
];
const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" height="100%" aspect={aspect}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="investments"
            stroke="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
