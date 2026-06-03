import { expect, test } from '@playwright/test';

test('sign up succesfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' });

  const newRestaurantInput = page.getByRole('textbox', {
    name: /Nome do estabelecimento/i,
  });
  const nameInput = page.getByRole('textbox', { name: 'Seu nome' });
  const phoneInput = page.getByRole('textbox', { name: 'Seu celular' });
  const emailInput = page.getByRole('textbox', { name: 'Seu e-mail' });

  await newRestaurantInput.fill('Pizza Shop');
  await nameInput.fill('John Doe');
  await phoneInput.fill('2196631497');
  await emailInput.fill('johndoe@email.com');

  const buttonSubmit = page.getByRole('button', {
    name: /Finalizar cadastro/i,
  });
  await buttonSubmit.click();

  const toast = page.getByText('Restaurante cadastrado com sucesso!');

  expect(toast).toBeVisible();
});

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' });

  const newRestaurantInput = page.getByRole('textbox', {
    name: /Nome do estabelecimento/i,
  });
  const nameInput = page.getByRole('textbox', { name: 'Seu nome' });
  const phoneInput = page.getByRole('textbox', { name: 'Seu celular' });
  const emailInput = page.getByRole('textbox', { name: 'Seu e-mail' });

  await newRestaurantInput.fill('Invalid Name');
  await nameInput.fill('John Doe');
  await phoneInput.fill('2196631497');
  await emailInput.fill('johndoe@email.com');

  const buttonSubmit = page.getByRole('button', {
    name: /Finalizar cadastro/i,
  });
  await buttonSubmit.click();

  const toast = page.getByText('Erro ao cadastrar restaurante');

  expect(toast).toBeVisible();
});

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' });

  const navigateToNewRestaurant = page.getByRole('link', {
    name: /Fazer login/i,
  });
  await navigateToNewRestaurant.click();

  const input = page.getByRole('textbox', { name: /Seu e-mail/i });

  expect(input).toBeVisible();
  expect(page.url()).toContain('/sign-in');
});
