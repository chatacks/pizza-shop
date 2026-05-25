import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const mockData = [
  { date: '05/08', revenue: 1200 },
  { date: '06/08', revenue: 1800 },
  { date: '08/08', revenue: 2800 },
  { date: '09/08', revenue: 1500 },
  { date: '10/08', revenue: 1900 },
  { date: '11/08', revenue: 1850 },
  { date: '12/08', revenue: 1726 },
];

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer
          width="100%"
          height={240}
        >
          <LineChart
            data={mockData}
            style={{ fontSize: 12 }}
          >
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              dy={16}
            />

            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-Br', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
              width={80}
            />
            <CartesianGrid
              vertical={false}
              className="stroke-muted"
            />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke="var(--color-sky-700)"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
