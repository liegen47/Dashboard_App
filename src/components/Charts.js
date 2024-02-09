import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

import "./scss/Charts.scss";

const Charts = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://dummy.restapiexample.com/api/v1/employees"
    );
    const json = await res.json();
    setData(json.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="charts-container">
      <h1>Employee Salaries</h1>
      <div className="chart">
        <PieChart width={800} height={500}>
          <Pie
            dataKey="employee_salary"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={160}
            fill="#8884d8"
            label="employee_salaries"
          />
          <Tooltip />
        </PieChart>
      </div>
      <div className="chart">
        <BarChart
          width={800}
          height={400}
          data={data}
          margin={{ top: 30, right: 50, left: 50, bottom: 5 }}
        >
          <XAxis dataKey="employee_name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="employee_salary" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default Charts;
