const { test, expect } = require('@playwright/test');
const { HomePage } = require('../Pages/homePage');
const { SearchResultsPage } = require('../Pages/searchResultsPage');
const { ProductPage } = require('../Pages/productPage');

test('Verify free shipping availability', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchResultsPage = new SearchResultsPage(page);
  const productPage = new ProductPage(page);

  // Navigate and search
  await homePage.navigate();
  await homePage.searchForProduct('Electronics');
  await searchResultsPage.selectBrand();
  await searchResultsPage.applyPriceFilter(500, 5000);
  await searchResultsPage.selectFirstProduct();

  // Step 8: Verify free shipping
  const hasFreeShipping = await productPage.hasFreeShipping();
  expect(hasFreeShipping).toBeTruthy();
});