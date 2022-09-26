import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'

const chromedriver = require('chromedriver')

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

test('make sure password textbox is on the page', async () => {
    await driver.get('https://www.saucedemo.com/')
    await driver.wait(until.elementLocated(By.id('password')))
    let value = await driver.findElement(By.id('password')).isDisplayed();
    expect(value).toBeTruthy()
})
afterAll(async () => {
    await driver.quit()
})