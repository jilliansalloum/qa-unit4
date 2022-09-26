import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'

const chromedriver = require('chromedriver')

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()


test('add backpack to cart', async () => {
    await driver.get('https://www.saucedemo.com/')
    await driver.wait(until.elementLocated(By.id('login-button')))
    await driver.findElement(By.id('user-name')).sendKeys('standard_user')
    await driver.findElement(By.id('password')).sendKeys('secret_sauce')
    await driver.findElement(By.id('login-button')).click()
    await driver.manage().setTimeouts( { implicit: 2000 } );
    await driver.wait(until.elementLocated(By.id('item_4_title_link')))
    await driver.findElement(By.id('item_4_title_link'))
    await driver.findElement(By.id('add-to-cart-sauce-labs-backpack')).click()
    await driver.manage().setTimeouts( { implicit: 5000 } );
    await driver.findElement(By.className('shopping_cart_link')).click()
    let value = await driver.getCurrentUrl()
    expect(value).toBe('https://www.saucedemo.com/cart.html')
})

test('go to bike light page and see add to cart button', async () => {
    await driver.findElement(By.id('continue-shopping')).click()
    await driver.wait(until.elementLocated(By.id('item_0_title_link')))
    await driver.findElement(By.id('item_0_title_link')).click()
    await driver.manage().setTimeouts( { implicit: 2000 } );
    await driver.findElement(By.id('add-to-cart-sauce-labs-bike-light')).click()
    let value = await driver.findElement(By.id('remove-sauce-labs-bike-light')).isDisplayed()
    expect(value).toBeTruthy()
})

test('see 2 items in cart', async () => {
    await driver.findElement(By.className('shopping_cart_badge'))
    let value = await driver.findElement(By.className('shopping_cart_badge')).getText()
    expect(value).toContain('2')
})
test('add t-shirt to cart', async () => {
    await driver.findElement(By.id('back-to-products')).click()
    await driver.manage().setTimeouts( { implicit: 2000 } );
    await driver.findElement(By.id('add-to-cart-sauce-labs-bolt-t-shirt')).click()
    let value = await driver.findElement(By.className('shopping_cart_badge')).getText()
    expect(value).toContain('3')
})


afterAll(async () => {
    await driver.quit()
})