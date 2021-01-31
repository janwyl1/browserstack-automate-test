require('dotenv').config();
var webdriver = require('selenium-webdriver');

      
var userName = process.env.USERNAME
var accessKey = process.env.ACCESSKEY
var browserstackURL = 'https://' +  userName + ':' + accessKey + '@hub-cloud.browserstack.com/wd/hub';

// Input capabilities
var capabilities = {
  
  'browserName': 'iPhone',
  'device': 'iPhone XS',
  'realMobile': 'true',
  'os_version': '14',
  'browserstack.debug': 'true',
  'name' : "Example Test Name"

}

var driver = new webdriver.Builder().
  usingServer(browserstackURL).
  withCapabilities(capabilities).
  build();

driver.get('http://www.google.com').then(function(){
  driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack').then(function(){
    driver.getTitle()
    .then(function(title) {
      console.log(title);
    })
    .then(function(x){
        driver.sleep(5000);
        driver.quit();
    });
  });
});