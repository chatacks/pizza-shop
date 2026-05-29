import { RechartsDevtools } from '@recharts/devtools';
import { useQuery } from '@tanstack/react-query';
import { BarChart } from 'lucide-react';
import { LabelList, Pie, PieChart, ResponsiveContainer } from 'recharts';

import { getPopularProducts } from '@/api/get-popular-products';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Spinner } from '@/components/ui/spinner';

import { CustomLabel, CustomPie, renderCustomizedLabel } from './pie-customs';

export function PopularProductsChart() {
  const { data: popularProducts } = useQuery({
    queryKey: ['metrics', 'popular-products'],
    queryFn: getPopularProducts,
  });

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
        {popularProducts ? (
          <ResponsiveContainer
            width="100%"
            height={240}
          >
            <PieChart
              data={popularProducts}
              style={{ fontSize: 12 }}
            >
              <Pie
                data={popularProducts}
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
                label={(props) => renderCustomizedLabel(popularProducts, props)}
              >
                <RechartsDevtools />
                <LabelList content={CustomLabel} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-60 items-center justify-center">
            <Spinner className="text-muted-foreground size-10" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
