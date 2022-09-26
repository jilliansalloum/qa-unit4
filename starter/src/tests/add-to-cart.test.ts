import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'

const chromedriver = require('chromedriver')

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()


test('add backpack to cart', async () => {
    await driver.get('https://www.saucedemo.com/inventory.html')
    await driver.wait(until.elementLocated(By.id('item_4_title_link')))
    await driver.findElement(By.id('item_4_title_link'))
    await driver.findElement(By.id('add-to-cart-sauce-labs-backpack')).click()
    await driver.manage().setTimeouts( { implicit: 2000 } );
    let value = await driver.getCurrentUrl()
    expect(value).toBe('https://www.saucedemo.com/inventory.html')
})
afterAll(async () => {
    await driver.quit()
})