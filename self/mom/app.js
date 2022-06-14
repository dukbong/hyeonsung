const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const dotenv = require("dotenv");

dotenv.config();
const By = webdriver.By;

const driver = new webdriver.Builder().forBrowser("chrome").build();
const url = `https://www.ansanuc.net/homenew/10903/30014/member/login.do`;

driver.get(url);
let day = [];
const pack = async ()=>{
    const id = driver.findElement(By.id("memberId"));
    const pwd = driver.findElement(By.id("memberPwd"));
    await id.sendKeys(process.env.ID);
    await pwd.sendKeys(process.env.PWD);
    await driver.findElement(By.id("loginBtn")).click();
    let url = `https://www.ansanuc.net/homenew/12129/30010/online/facility/applyRegist.do?searchBigCategoryIdx=2&searchMiddleCategoryIdx=16&searchDate=2022-07-30`;
    driver.get(url);
    const title_name = driver.findElement(By.id("title"));
    const person_N = driver.findElement(By.id("usePersonNo"));
    // 문제 : a태그 클릭
    // 시간을 클릭해야한다.
    setTimeout(async ()=>{
        await title_name.sendKeys("우먼파워");
        await person_N.sendKeys("12");
    });

    // await driver
    //   .findElement(By.className("icon_circle ico5 heightIcon"))
    //   .click();
    // const pick = driver.findElement(By.id("#searchMiddleCategoryIdx > option:nth-child(11)"));
    // pick.click();
    // for (let i = 0 ;  i < 4; i++){

    // }
}
pack();

