import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

type Props = {
  data: { date: string; commits: number }[];
};

export const CommitsChart = ({ data }: Props) => (
  <div className="h-64 mt-6">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data.slice(-30)}>
        <XAxis dataKey="date" hide />
        <YAxis />
        <Tooltip />
        <Bar dataKey="commits" fill="#4f46e5" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
