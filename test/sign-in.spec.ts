import { expect, test } from '@playwright/test';

test('sign in succesfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' });

  const emailInput = page.getByRole('textbox', { name: /Seu e-mail/i });
  await emailInput.fill('johndoe@email.com');

  const buttonSubmit = page.getByRole('button', { name: /Acessar painel/i });
  await buttonSubmit.click();

  const toast = page.getByText(
    'Enviamos um link de autenticação para seu e-mail.',
  );

  expect(toast).toBeVisible();
});

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' });

  const emailInput = page.getByRole('textbox', { name: /Seu e-mail/i });
  await emailInput.fill('emailerrado@errado.com');

  const buttonSubmit = page.getByRole('button', { name: /Acessar painel/i });
  await buttonSubmit.click();

  const toast = page.getByText('Credenciais inválidas');

  expect(toast).toBeVisible();
});

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' });

  const navigateToNewRestaurant = page.getByRole('link', {
    name: /Novo estabelecimento/i,
  });
  await navigateToNewRestaurant.click();

  const input = page.getByRole('textbox', { name: /Nome do estabelecimento/i });

  expect(input).toBeVisible();
  expect(page.url()).toContain('/sign-up');
});
