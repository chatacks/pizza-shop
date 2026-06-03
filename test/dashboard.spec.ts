import { expect, test } from '@playwright/test';

test('display orders amount metrics day, month', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const totalReceiptText = page.getByText('R$ 100,00');
  const monthOrders = page.getByText('10', { exact: true });
  const dayOrders = page.getByText('20', { exact: true });
  const canceledMonth = page.getByText('100', { exact: true });

  expect(totalReceiptText).toBeVisible();
  expect(monthOrders).toBeVisible();
  expect(dayOrders).toBeVisible();
  expect(canceledMonth).toBeVisible();
});
