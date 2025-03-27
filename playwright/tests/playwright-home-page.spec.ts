import { test, expect } from "@playwright/test";

test("Has logo exist", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);
  // get image by alt text
  const logo = page.getByAltText("Playwright logo").first();

  await expect(logo).toBeVisible();
});

test("Has heading exist", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);
  // Locate heading one by locator tag name
  const headingTitle = page.locator("h1");
  // Log in the test results located element value
  console.log((await headingTitle.innerText()).valueOf());

  await expect(headingTitle).toBeVisible();
});

test("Have nav links exist", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);

  // Locate nav link Docs by role and text
  const docsLink = page.getByRole("link", { name: "Docs" });
  const apiLink = page.getByRole("link", { name: "API" });

  await expect(docsLink).toBeVisible();
  await expect(apiLink).toBeVisible();
});

test("Click community link and check the path", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);

  // Locate nav link Community by role and text
  const communityLink = page.getByRole("link", { name: "Community" });
  // Click the located element
  await communityLink.click();

  // Expect the current page to have passed URL
  await expect(page).toHaveURL("https://playwright.dev/community/welcome");

  const headingTwo = page.getByRole("heading", { name: "Ambassadors" });
  await expect(headingTwo).toBeVisible();
});

test("Test if UL exist", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);

  // Locate logos list by locator class name syntax
  const logosListItems = page.locator("ul.logosList_zAAF li");
  // Expect the count of list items
  await expect(logosListItems).toHaveCount(9);
});
