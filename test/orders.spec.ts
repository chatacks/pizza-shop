import { expect, test } from '@playwright/test';

test('list orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  expect(
    page.getByRole('cell', { name: 'Customer-1', exact: true }),
  ).toBeVisible();
  expect(
    page.getByRole('cell', { name: 'Customer-10', exact: true }),
  ).toBeVisible();
});

test('paginate orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  const nextPageButton = page.getByRole('button', { name: 'Próxima página' });
  await nextPageButton.click();

  expect(
    page.getByRole('cell', { name: 'Customer-11', exact: true }),
  ).toBeVisible();

  expect(
    page.getByRole('cell', { name: 'Customer-20', exact: true }),
  ).toBeVisible();

  const lastPageButton = page.getByRole('button', { name: 'Última página' });
  await lastPageButton.click();

  expect(
    page.getByRole('cell', { name: 'Customer-51', exact: true }),
  ).toBeVisible();
  expect(
    page.getByRole('cell', { name: 'Customer-60', exact: true }),
  ).toBeVisible();
});

test('filter by order id', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  const inputFilterId = page.getByRole('textbox', { name: /ID do pedido/i });
  await inputFilterId.fill('order-51');

  const filterButton = page.getByRole('button', {
    name: /Filtrar resultados/i,
  });
  await filterButton.click();

  expect(page.getByRole('cell', { name: /order-51/i })).toBeVisible();
});

test('filter by customer name', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  const inputFilterName = page.getByRole('textbox', {
    name: /Nome do cliente/i,
  });
  await inputFilterName.fill('Customer 51');

  const filterButton = page.getByRole('button', {
    name: /Filtrar resultados/i,
  });
  await filterButton.click();

  expect(page.getByRole('cell', { name: /Customer 51/i })).toBeVisible();
});

test('filter by status', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  const combobox = page.getByRole('combobox');
  await combobox.click();

  await page.waitForTimeout(1000);

  const pendentLabel = page.getByLabel('Pendente');
  await pendentLabel.click();

  const filterButton = page.getByRole('button', {
    name: /Filtrar resultados/i,
  });
  await filterButton.click();

  await page.waitForTimeout(1000);

  const tableRows = await page.getByRole('cell', { name: /Pendente/i }).all();

  expect(tableRows).toHaveLength(10);
});
