import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'

const chromedriver = require('chromedriver')

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

test('make sure login button is on the page', async () => {
    await driver.get('https://www.saucedemo.com/')
    await driver.wait(until.elementLocated(By.id('login-button')))
    let value = await driver.findElement(By.id('login-button')).isDisplayed();
    expect(value).toBeTruthy()})
afterAll(async () => {
    await driver.quit()
})