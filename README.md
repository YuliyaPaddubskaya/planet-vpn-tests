# Planet VPN Tests

Automated end-to-end testing project built with **Playwright**, **TypeScript**, and **Allure Reporting**, fully integrated with **GitHub Actions** for CI/CD and automated deployment to GitHub Pages.

Test framework for automating user scenario testing (including critical payment scenarios and payment gateway integration). The project is built using modern automated testing approaches with a focus on stability, readability, and scalability.

## 🏗 Architecture and Design Patterns

The project is designed in compliance with **SOLID** principles and industrial automation standards:

- **Page Object Model (POM) / Component-Based Approach (Composition):**
  - UI interaction logic is separated into logical pages (`pages/`) and reusable UI components (such as plan selection forms in `pages/mainPage/choosePlanForm.component.ts`), leveraging composition. This eliminates code duplication and simplifies maintenance when layout changes.
- **Playwright Fixtures:**
  - Custom fixtures (`fixtures.ts`) are used to initialize pages and the test environment. This rids tests of extra boilerplate code and automates browser lifecycle management.
- **Test Isolation:**
  - Each test runs in an isolated browser context with clean cookies and local storage, preventing tests from affecting one another.
- **Linters and Code Quality Tools:**
  - **ESLint (`.eslintrc.json`):** static code analysis to find and fix code quality and syntax issues.
  - **Prettier (`.prettierrc`):** automated code formatting to maintain a consistent style across the entire project.
- **CI/CD:** GitHub Actions (automatic test execution in an isolated Ubuntu environment on pushes/manually, report generation and saving as artifacts).

---

## 📂 Project Structure

```text
├── .github/
│   └── workflows/
│       └── playwright.yml    # CI/CD configuration for GitHub Actions
├── helpers/                  # Helper utilities (e.g., utils.ts)
├── pages/                    # Page Object models and components
│   ├── mainPage/
│   │   ├── choosePlanForm.component.ts
│   │   └── main.page.ts
│   ├── base.page.ts          # Base class for pages
│   └── paymentMethod.page.ts
├── tests/                    # Directory with test cases (e.g., planPayment.spec.ts)
├── allure-report/            # Generated Allure HTML report
├── allure-results/           # Raw data for Allure (generated automatically)
├── playwright-report/        # Built-in Playwright HTML report
├── test-results/             # Test execution artifacts (traces, videos, screenshots)
├── .eslintrc.json            # ESLint configuration for code linting
├── .prettierrc               # Prettier configuration for code formatting
├── .gitignore                # Git ignore rules
├── playwright.config.ts      # Playwright configuration file
├── fixtures.ts               # Custom project fixtures
├── package.json              # Dependencies and npm scripts
├── tsconfig.json             # TypeScript settings
└── README.md                 # Project documentation

## Prerequisites

Ensure you have the following installed on your local machine:

- **Node.js** (v24.19.0 or higher recommended)
- **npm** (comes packaged with Node.js)

## Installation & Setup

1. **Clone the repository:**

   git clone https://github.com/YuliyaPaddubskaya/planet-vpn-tests.git
   cd planet-vpn-tests

2. **Install project dependencies:**

   npm ci

3. **Install Playwright browsers:**

   npx playwright install chromium --with-deps

## Running Tests

- **Run all tests in headless mode:**

  npm run test

- **Run tests with UI mode (interactive):**

  npm run test:ui

- **Run tests in headed browser mode:**

  npm run test:headed

- **Run tests in debug mode:**

  npm run test:debug

## Allure Reports

### Local Generation

- **Run tests, generate, and open Allure report in a single command:**

  npm run test:allure

- **Show standard Playwright HTML report:**

  npm run report:html

- **Generate Allure report manually:**

  npm run allure:generate

- **Open generated Allure report in browser:**

  npm run allure:open

- **Clean previous Allure results and reports locally:**

  npm run allure:clear

### CI/CD & GitHub Pages

The project features a fully automated workflow (`.github/workflows/playwright.yml`) triggered on pushes to `feature/**` branches, and can also be triggered manually via GitHub Actions.:

- Automatically installs dependencies and caches Playwright binaries for speed
- Executes the test suite
- Generates the Allure report
- Deploys the interactive report directly to GitHub Pages

### How to Access the Allure Report

- **Via GitHub Actions UI:**
  The direct live URL of the published report is displayed right in the GitHub Actions workflow interface under the **"Publish to GitHub Pages"** step once the pipeline successfully completes.
- **Via GitHub Actions Artifacts:**
  You can go to the **Actions** tab on GitHub, select a completed workflow run, and download the report archive directly from the **Artifacts** section.
```
