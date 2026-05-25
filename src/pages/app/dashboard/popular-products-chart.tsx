import { RechartsDevtools } from '@recharts/devtools';
import { BarChart } from 'lucide-react';
import { LabelList, Pie, PieChart, ResponsiveContainer } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { CustomLabel, CustomPie, renderCustomizedLabel } from './pie-customs';

const mockData = [
  { product: 'Pizza Frango c/Catupiry Familia', amount: 58 },
  { product: 'Pizza Calabresa Familia', amount: 30 },
  { product: 'Pizza Banana Nevada', amount: 26 },
  { product: 'Pizza Chocolate', amount: 22 },
  { product: 'Pizza Sabor Doideira', amount: 17 },
];

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <BarChart className="text-muted-foreground h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer
          width="100%"
          height={240}
        >
          <PieChart
            data={mockData}
            style={{ fontSize: 12 }}
          >
            <Pie
              data={mockData}
              dataKey="amount"
              nameKey="product"
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
              labelLine={false}
              fill="var(--color-emerald-500)"
              shape={CustomPie}
              label={(props) => renderCustomizedLabel(mockData, props)}
            >
              <RechartsDevtools />
              <LabelList content={CustomLabel} />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
