const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

jest.setTimeout(30000); // เพิ่ม timeout ให้ยาวหน่อยเพื่อความชัวร์

describe('BSK Reading Test', () => {
    let driver;

    beforeAll(async () => {
        try {
            driver = await new Builder().forBrowser('chrome').build();
        } catch (error) {
            console.error('Failed to initialize the browser driver:', error);
        }
    });

    afterAll(async () => {
        if (driver) {
            try {
                await driver.quit();
            } catch (error) {
                console.error('Failed to quit the driver:', error);
            }
        } else {
            console.error('Driver is undefined');
        }
    });

    test('should open BSK Reading and check title', async () => {
        if (!driver) {
            console.error('Driver was not initialized.');
            return;
        }

        await driver.get('http://localhost:3000');
        const pageTitle = await driver.getTitle();
        expect(pageTitle).toBe('BSK Reading');
    });

    test('should open sidebar menu when menu button is clicked', async () => {
        if (!driver) {
            console.error('Driver was not initialized.');
            return;
        }

        await driver.get('http://localhost:3000');

        const menuBtn = await driver.findElement(By.className('menu-btn'));
        await menuBtn.click();

        const menu = await driver.findElement(By.className('menu'));
        const menuClass = await menu.getAttribute('class');
        expect(menuClass).toContain('active');
    });

    test('should submit form and display "Top Hits This Month"', async () => {
        if (!driver) {
            console.error('Driver was not initialized.');
            return;
        }

        await driver.get('http://localhost:3000');

        const emailField = await driver.findElement(By.id('email'));
        const passwordField = await driver.findElement(By.id('password'));
        const submitBtn = await driver.findElement(By.css('button[type="submit"]'));

        await emailField.sendKeys('123@gmail.com');
        await passwordField.sendKeys('123');
        await submitBtn.click();

        // รอ URL เปลี่ยน (สำคัญมาก!)
        await driver.wait(until.urlContains('/homePage'), 10000);

        // จากนั้นค่อยรอหาคำ "Top Hits This Month"
        const topHits = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Top Hits This Month')]")), 10000);
        expect(await topHits.getText()).toContain('Top Hits This Month');
    });

    test('should display correct header text', async () => {
        if (!driver) {
            console.error('Driver was not initialized.');
            return;
        }

        await driver.get('http://localhost:3000');

        const header = await driver.findElement(By.tagName('h2'));
        const headerText = await header.getText();
        expect(headerText).toBe('BSK READING');
    });
    
    test('should navigate to signup page when "Sign up here" link is clicked', async () => {
        if (!driver) {
            console.error('Driver was not initialized.');
            return;
        }

        await driver.get('http://localhost:3000');

        const signupLink = await driver.findElement(By.linkText('Sign up here.'));
        await signupLink.click();

        // รอให้ URL เปลี่ยน
        await driver.wait(until.urlContains('/signup'), 10000);

        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).toContain('/signup');
    });



});
