import { Locator, Page } from '@playwright/test';
import { getRandomEmail } from '../../helpers/utils';

export class ChoosePlanFormComponent {
  private get component(): Locator {
    return this.page.locator('form[id="PPG"]');
  }
  readonly planMonthly: Locator = this.component.locator('label:has(#qa-radio-offer-1-month) i');
  readonly planYearly: Locator = this.component.locator('label:has(#qa-radio-offer-1-year) i');
  readonly emailInput: Locator = this.component.getByTestId('qa-input-email');
  readonly payButton: Locator = this.component.getByTestId('qa-btn-submit-step1');

  constructor(private readonly page: Page) {}

  async selectMonthly() {
    await this.planMonthly.click();
  }

  async selectYearly() {
    await this.planYearly.click();
  }

  async selectMonthlyOrYearlyPlan() {
    const isMonthly = Math.random() < 0.5;

    if (isMonthly) {
      console.log('Randomly selecting: Monthly plan');
      await this.selectMonthly();
    } else {
      console.log('Randomly selecting: Yearly plan');
      await this.selectYearly();
    }
  }

  async fillEmail(email: string = getRandomEmail()) {
    await this.emailInput.fill(email);
  }

  async submitPayment() {
    await this.payButton.waitFor({ state: 'visible' });
    await this.payButton.click();
  }
}
