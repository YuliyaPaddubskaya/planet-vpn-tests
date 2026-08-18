export function getRandomEmail(): string {
  const domains = [
    'gmail.com',
    'outlook.com',
    'yahoo.com',
    'icloud.com',
    'protonmail.com',
    'zoho.com',
    'gmx.com',
    'yandex.com',
    'mail.com',
    'aol.com',
  ];
  return `test_qa_${Date.now()}@${domains[Math.floor(Math.random() * domains.length)]}`;
}
