import { expect, test } from '@playwright/test';

test('update restaurant profile succesfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const restaurantProfileButton = page.getByRole('button', {
    name: 'Pizza Shop',
  });
  await restaurantProfileButton.click();

  const menuProfile = page.getByRole('menuitem', { name: /Perfil da loja/i });
  await menuProfile.click();

  const nameInputProfile = page.getByRole('textbox', { name: 'Nome' });
  const descriptionInputProfile = page.getByRole('textbox', {
    name: 'Descrição',
  });
  const buttonUpdateProfile = page.getByRole('button', { name: 'Salvar' });

  await nameInputProfile.fill('Pizza Doida');
  await descriptionInputProfile.fill('Pizza Doideira');
  await buttonUpdateProfile.click();

  const buttonClose = page.getByRole('button', { name: /Close/i });
  await buttonClose.click();

  expect(page.getByText('Perfil atualizado com sucesso!')).toBeVisible();
  expect(page.getByRole('button', { name: /Pizza Doida/i })).toBeVisible();
});
