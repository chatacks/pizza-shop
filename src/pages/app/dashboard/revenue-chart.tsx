import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import { useMemo, useState } from 'react';
import type { DateRange } from 'react-day-picker';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

import { getDailyRevenueInPeriod } from '@/api/get-daily-revenue-in-period';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DateRangePicker } from '@/components/ui/date-range-picker';

export function RevenueChart() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  });

  const { data: dailyRevenueInPeriod } = useQuery({
    queryKey: ['metrics', 'daily-revenue-in-period', dateRange],
    queryFn: () =>
      getDailyRevenueInPeriod({
        from: dateRange?.from,
        to: dateRange?.to,
      }),
  });

  const chartData = useMemo(() => {
    return (
      dailyRevenueInPeriod &&
      dailyRevenueInPeriod.map((revenue) => {
        return {
          date: revenue.date,
          receipt: revenue.receipt / 100,
        };
      })
    );
  }, [dailyRevenueInPeriod]);

  return (
    <Card className="col-span-6">
      <CardHeader className="flex items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>

        <div className="flex items-center gap-3">
          <DateRangePicker
            date={dateRange}
            onDateChange={setDateRange}
            label="Período"
          />
        </div>
      </CardHeader>
      <CardContent>
        {chartData && (
          <ResponsiveContainer
            width="100%"
            height={240}
          >
            <LineChart
              data={chartData}
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
                dataKey="receipt"
                stroke="var(--color-sky-700)"
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
