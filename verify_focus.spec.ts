import { test, expect } from '@playwright/test';

test('verify wizard focus states', async ({ page }) => {
  await page.goto('http://localhost:3003/wizard');

  // Wait for animations
  await page.waitForTimeout(2000);

  // The first step should be current
  const step1 = page.locator('button[aria-current="step"]');
  await expect(step1).toBeVisible();

  // Tab to the first step
  await page.keyboard.press('Tab');
  // Usually the logo or nav links are first. Let's tab until we find a button in the wizard nav
  let focused = false;
  for(let i=0; i<10; i++) {
    await page.keyboard.press('Tab');
    const isWizardBtn = await page.evaluate(() => {
        const active = document.activeElement;
        return active && active.closest('nav[aria-label="Progress"]');
    });
    if(isWizardBtn) {
        focused = true;
        break;
    }
  }

  // Capture screenshot of focus
  await page.screenshot({ path: '/home/jules/verification/focus_state.png' });
});
