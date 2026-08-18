import { Page } from '@playwright/test';

export abstract class BasePage {
  protected abstract readonly path: string;

  constructor(protected readonly page: Page) {}

  async open() {
    await this.page.goto(this.path);
  }

  async waitForURL(urlPattern: RegExp | string) {
    await this.page.waitForURL(urlPattern, { timeout: 15000 });
  }
}
