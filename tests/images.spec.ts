import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/cloudinary/images');
  
  await expect(page).toHaveTitle('Vite + React + TS');
});

test('search form submission updates URL', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/cloudinary/images');

  await page.getByRole('searchbox').fill('cats');
  await page.getByRole('button', { name: '🔍' }).click();

  await expect(page).toHaveURL('http://127.0.0.1:5173/cloudinary/images?q=cats');
});
