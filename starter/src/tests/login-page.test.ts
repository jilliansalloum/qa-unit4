import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'

const chromedriver = require('chromedriver')

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

test('make sure login button is on the page', async () => {
    await driver.get('https://www.saucedemo.com/')
    await driver.wait(until.elementLocated(By.id('login-button')))
    let value = await driver.findElement(By.id('login-button')).isDisplayed();
    expect(value).toBeTruthy()
})

test('make sure username textbox is on the page', async () => {
    await driver.wait(until.elementLocated(By.id('user-name')))
    let value = await driver.findElement(By.id('user-name')).isDisplayed();
    expect(value).toBeTruthy()})

test('make sure password textbox is on the page', async () => {
    await driver.wait(until.elementLocated(By.id('password')))
    let value = await driver.findElement(By.id('password')).isDisplayed();
    expect(value).toBeTruthy()
})

test('login the user on the login page', async () => {
    await driver.findElement(By.id('user-name')).sendKeys('standard_user')
    await driver.findElement(By.id('password')).sendKeys('secret_sauce')
    await driver.findElement(By.id('login-button')).click()
    await driver.manage().setTimeouts( { implicit: 2000 } );
    let value = await driver.findElement(By.className('inventory_item_desc')).isDisplayed();
    expect(value).toBeTruthy()
})

test('check the url after logging in', async () => {
    let value = await driver.getCurrentUrl()
    expect(value).toBe('https://www.saucedemo.com/inventory.html')
})

    afterAll(async () => {
    await driver.quit()
})