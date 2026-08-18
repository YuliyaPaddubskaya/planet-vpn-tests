import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class PaymentMethodPage extends BasePage {
  protected readonly path = '/payment';
  readonly creditCardOption: Locator = this.page.locator('label:has(#qa-radio-gateway-stripe) b');
  readonly cryptoOption: Locator = this.page.locator('label:has(#qa-radio-gateway-crypto) b');
  readonly termsCheckbox: Locator = this.page.locator('label:has(#qa-checkbox-terms) span').first();
  readonly payButton: Locator = this.page.getByTestId('qa-btn-submit-step2');

  constructor(page: Page) {
    super(page);
  }

  async selectPaymentMethod(methodName: 'Credit Card' | 'Cryptocurrency') {
    const option = methodName === 'Credit Card' ? this.creditCardOption : this.cryptoOption;
    await option.click();
  }

  async acceptTerms() {
    await this.termsCheckbox.click();
  }

  async submit() {
    await this.payButton.click();
  }
}
