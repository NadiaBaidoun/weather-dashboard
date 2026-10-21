import {
  CartesianGrid,
  //   Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ForecastChart = ({ forecast }) => {
  return (
    <div className="card">
      <ResponsiveContainer width="100%" height={220}>
        <LineChart responsive data={forecast}>
          <CartesianGrid stroke="var(--boder-color)" strokeDasharray="3 3" />
          <XAxis dataKey="day" tick={{ fill: "var(--text-secondary)" }} />
          <YAxis tick={{ fill: "var(--text-secondary)" }} unit="°" />
          <Tooltip
            contentStyle={{
              background: "var(--card-bg)",
              border: "1px solid var(--border-color)",
              borderRadius: "8px",
              color: "var(--text-primary)",
            }}
            labelStyle={{ color: "var(--text-primary)" }}
            cursor={{ stroke: "var(--border-color)" }}
          />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="var(--accent)"
            strokeWidth={3}
          />
          {/* <Legend position="insideTopRight" offset={20} /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForecastChart;
