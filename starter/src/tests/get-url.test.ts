import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'

const chromedriver = require('chromedriver')

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()


test('check the url after logging in', async () => {
    await driver.get('https://www.saucedemo.com/')
    await driver.wait(until.elementLocated(By.id('login-button')))
    await driver.findElement(By.id('user-name')).sendKeys('standard_user')
    await driver.findElement(By.id('password')).sendKeys('secret_sauce')
    await driver.findElement(By.id('login-button')).click()
    await driver.manage().setTimeouts( { implicit: 2000 } );
    let value = await driver.getCurrentUrl()
    expect(value).toBe('https://www.saucedemo.com/inventory.html')
})
afterAll(async () => {
    await driver.quit()
})