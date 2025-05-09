const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.getByRole('searchbox', { name: 'Search in Daraz' });
    this.searchSuggestion = page.getByRole('link', { name: 'Electronics', exact: true });
  }

  async navigate() {
    await this.page.goto('https://www.daraz.pk/#?');
  }

  async searchForProduct(productName) {
    await this.searchBox.click();
    await this.searchBox.fill(productName);
    await this.searchSuggestion.click();
  }
}

module.exports = { HomePage };