const { expect } = require('@playwright/test');

class ProductPage {
  constructor(page) {
    this.page = page;
    this.freeShippingIndicator = page.locator('div').filter({ hasText: /^Standard DeliveryGet by/ });
  }

  async hasFreeShipping() {
    const shippingText = await this.freeShippingIndicator.textContent();
    return shippingText.includes('Free Shipping') || shippingText.includes('Rs. 0');
  }
}

module.exports = { ProductPage };