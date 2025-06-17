import { test, expect } from "@playwright/test";

test("fills out and submits the contact form", async ({ page }) => {
  await page.goto("http://localhost:4321/contact"); // Change if your Astro app uses a different route or port

  await page.fill('input[name="name"]', "Jane Doe");
  await page.fill('input[name="phone"]', "0400123456");
  await page.fill('input[name="email"]', "jane@example.com");
  await page.fill('input[name="event-date"]', "2025-12-31");
  await page.fill('input[name="total-people-makeup"]', "3");
  await page.fill('input[name="total-people-hair"]', "2");
  await page.fill('input[name="time-to-finish-by"]', "10:00 AM");
  await page.fill('input[name="address-for-service"]', "123 Beauty St, Sydney");
  await page.fill('textarea[name="additional-information"]', "Looking for a natural look for everyone.");

  // Fill dropdown (assumes <select> element with options exists inside <DropdownInput>)
  await page.selectOption('select[name="service"]', { index: 1 }); // Or use .value = 'desired_value' if known

  // Submit the form
  await Promise.all([
    // page.waitForNavigation({ waitUntil: 'networkidle' }), // optional, remove if page doesn't navigate
    page.click('button[type="submit"]'),
  ]);
});
