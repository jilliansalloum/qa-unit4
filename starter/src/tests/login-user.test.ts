import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'

const chromedriver = require('chromedriver')

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()


test('login the user on the login page', async () => {
    await driver.get('https://www.saucedemo.com/')
    await driver.wait(until.elementLocated(By.id('login-button')))
    await driver.findElement(By.id('user-name')).sendKeys('standard_user')
    await driver.findElement(By.id('password')).sendKeys('secret_sauce')
    await driver.findElement(By.id('login-button')).click()
    await driver.manage().setTimeouts( { implicit: 2000 } );
    let value = await driver.findElement(By.className('inventory_item_desc')).isDisplayed();
    expect(value).toBeTruthy()
})
afterAll(async () => {
    await driver.quit()
})