
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

describe('automated tests', () => {
    test('draw button displays div with id=choices', async () => {

        //TEST 1:
        const drawBtn = await driver.findElement(By.id('draw'))
        await drawBtn.click()
        await driver.sleep(2000)
        const choicesId = await driver.findElement(By.id('choices'))
        const result = await choicesId.isDisplayed()
        expect(result).toBe(true)
        await driver.sleep(2000)
        
        //Test 2:
        const duoBtn = await driver.findElement(By.xpath("//button[@class='bot-btn']"))
        await duoBtn.click()
        await driver.sleep(2000)
        const playerId = await driver.findElement(By.id('player-duo'))
        const result2 = await playerId.isDisplayed()
        expect(result2).toBe(true)
        await driver.sleep(2000)
    })
})