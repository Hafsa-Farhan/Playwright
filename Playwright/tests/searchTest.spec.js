const { test, expect } = require('@playwright/test');
const { HomePage } = require('../Pages/homePage');
const { SearchResultsPage } = require('../Pages/searchResultsPage');

test('Search for electronics with filters and verify results', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchResultsPage = new SearchResultsPage(page);

  // Step 2: Navigate to Daraz.pk
  await homePage.navigate();

  // Step 3: Search for electronics
  await homePage.searchForProduct('Electronics');

  // Step 4: Choose brand filter
  await searchResultsPage.selectBrand();

  // Step 5: Apply price filter
  await searchResultsPage.applyPriceFilter(500, 5000);

  // Step 6: Verify product count
  const productCount = await searchResultsPage.getProductCount();
  expect(productCount).toBeGreaterThan(0);

  // Step 7: Select a product
  await searchResultsPage.selectFirstProduct();
});