import { http, HttpResponse } from 'msw';

import type { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period';

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2026', receipt: 20000 },
    { date: '02/01/2026', receipt: 10000 },
    { date: '03/01/2026', receipt: 60000 },
    { date: '04/01/2026', receipt: 90000 },
    { date: '05/01/2026', receipt: 80000 },
    { date: '06/01/2026', receipt: 85230 },
    { date: '07/01/2026', receipt: 71249 },
  ]);
});
