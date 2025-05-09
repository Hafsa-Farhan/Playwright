const { expect } = require('@playwright/test');

class SearchResultsPage {
  constructor(page) {
    this.page = page;
    this.brandFilter = page.getByRole('link', { name: 'Sanda' });
    this.minPriceField = page.getByPlaceholder('Min');
    this.maxPriceField = page.getByPlaceholder('Max');
    this.applyPriceFilter = page.locator('div').filter({ hasText: /^Price-$/ }).getByRole('button');
    this.productItems = page.locator('[data-qa-locator="product-item"]');
    this.firstProduct = page.locator('.RfADt').first();
  }

  async selectBrand() {
    await this.brandFilter.click();
    await this.page.waitForLoadState('networkidle');
  }

  async applyPriceFilter(minPrice, maxPrice) {
    await this.minPriceField.click();
    await this.minPriceField.fill(minPrice.toString());
    await this.maxPriceField.click();
    await this.maxPriceField.fill(maxPrice.toString());
    await this.applyPriceFilter.click();
    await this.page.waitForLoadState('networkidle');
  }

  async getProductCount() {
    await this.page.waitForSelector('[data-qa-locator="product-item"]');
    const count = await this.productItems.count();
    return count;
  }

  async selectFirstProduct() {
    await this.firstProduct.click();
  }
}

module.exports = { SearchResultsPage };