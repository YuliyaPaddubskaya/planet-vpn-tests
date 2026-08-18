import { test, expect } from '../fixtures';

test.describe('Payment Methods Coverage Tests', () => {
  const paymentMethods = [
    {
      name: 'Credit Card' as const,
      expectedGatewayUrl: /checkout\.stripe\.com/,
    },
    {
      name: 'Cryptocurrency' as const,
      expectedGatewayUrl: /new-pay\.heleket\.com\/pay\//,
    },
  ];

  test.beforeEach(async ({ mainPage, page }) => {
    await mainPage.open();
    await mainPage.choosePlanForm.selectMonthlyOrYearlyPlan();
    await mainPage.choosePlanForm.fillEmail();
    await mainPage.choosePlanForm.submitPayment();
    await page.waitForURL(/\/payment\//);
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/\/payment\//);
  });

  for (const method of paymentMethods) {
    test(`Should successfully initiate payment via ${method.name}`, async ({
      paymentMethodPage,
      page,
    }) => {
      await paymentMethodPage.selectPaymentMethod(method.name);
      await paymentMethodPage.acceptTerms();
      await paymentMethodPage.submit();
      await page.waitForLoadState('domcontentloaded');
      await expect(page).not.toHaveURL(/\/payment\//);
      expect(page.url()).toMatch(method.expectedGatewayUrl);
    });
  }
});
