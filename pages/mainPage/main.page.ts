import { Page } from '@playwright/test';
import { BasePage } from '../base.page';
import { ChoosePlanFormComponent } from './choosePlanForm.component';

export class MainPage extends BasePage {
  protected readonly path = '/';

  readonly choosePlanForm = new ChoosePlanFormComponent(this.page);

  constructor(page: Page) {
    super(page);
  }
}
