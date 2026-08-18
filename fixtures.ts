import { test as base } from '@playwright/test';
import { PaymentMethodPage } from './pages/paymentMethod.page';
import { MainPage } from './pages/mainPage/main.page';

type CustomFixtures = {
  mainPage: MainPage;
  paymentMethodPage: PaymentMethodPage;
};

export const test = base.extend<CustomFixtures>({
  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },
  paymentMethodPage: async ({ page }, use) => {
    await use(new PaymentMethodPage(page));
  },
});

export { expect } from '@playwright/test';
