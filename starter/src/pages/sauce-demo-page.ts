import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
  } from "selenium-webdriver";
  
  // this is standard "boilerplate" code.
  const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

export class shoppingPage {
    driver: WebDriver; 
    url: string = 'https://www.saucedemo.com/inventory.html'
    bikeLight: By = By.id('item_0_title_link')
    backpack: By = By.id('item_4_title_link')
    bpAddToCart: By = By.id('add-to-cart-sauce-labs-backpack')
    fleece: By = By.id('item_5_title_link')
    shoppingCart: By = By.id('shopping_cart_container')
    constructor(driver: WebDriver, url: string) {
        this.driver = driver 
        this.url = url 
    }
    async navigate() {
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.bikeLight))
    }
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy))
        let element = await this.driver.findElement(elementBy)
        await this.driver.wait(until.elementIsVisible(element))
        return element
    }
    async setInput(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy)
        await input.clear()
        return input.sendKeys(keys);
    }
    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy))
        return driver.findElement(elementBy).sendKeys(keys)
    }
    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).getText()
    }
    async addProducts() {
        await this.driver.wait(until.elementLocated(this.backpack))
        return driver.findElement(this.bpAddToCart).click()
    }
    async getResults() {
        return this.getText(this.results)
    }
}

driver.findElement(WebDriver.By.id('login-button')).then(function(webElement) {
    console.log('Element exists');
}, function(err) {
    if (err.state && err.state === 'no such element') {
        console.log('Element not found');
    } else {
        WebDriver.Promise.rejected(err);
    }
});