$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features1/AddCus.feature");
formatter.feature({
  "name": "Add Customer",
  "description": "  User creating new account",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Rakeshkumar"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into add customer page",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_navigates_into_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Hardcoded2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Rakeshkumar"
    },
    {
      "name": "@Rakesh"
    },
    {
      "name": "@venu"
    }
  ]
});
formatter.step({
  "name": "User enters all the fields",
  "keyword": "When "
});
formatter.match({
  "location": "AddCumSteps.user_enters_all_the_fields()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-46R444P\u0027, ip: \u0027192.168.43.183\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51442}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: e2e756d51b9513b99f58b10bd893cd94\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat com.telecom.resources.commonactions.button(commonactions.java:24)\r\n\tat com.samplecum.stepdefinition.AddCumSteps.user_enters_all_the_fields(AddCumSteps.java:43)\r\n\tat ✽.User enters all the fields(src/test/resources/Features1/AddCus.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCumSteps.user_should_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into add customer page",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_navigates_into_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "one dimensional list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Rakeshkumar"
    },
    {
      "name": "@Rakesh"
    },
    {
      "name": "@venu"
    }
  ]
});
formatter.step({
  "name": "User enters all the fields by using 1dim list",
  "rows": [
    {
      "cells": [
        "Rakesh",
        "venu",
        "dk@gmail.com",
        "Thiruvallur",
        "9684622544"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCumSteps.user_enters_all_the_fields_by_using_1dim_list(DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//a[text()\u003d\u0027Add Customer\u0027])[1]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-46R444P\u0027, ip: \u0027192.168.43.183\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51509}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 8f947312a5a93f9a1aaa84424cdd0326\n*** Element info: {Using\u003dxpath, value\u003d(//a[text()\u003d\u0027Add Customer\u0027])[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat com.telecom.resources.commonactions.button(commonactions.java:24)\r\n\tat com.samplecum.stepdefinition.AddCumSteps.user_enters_all_the_fields_by_using_1dim_list(AddCumSteps.java:58)\r\n\tat ✽.User enters all the fields by using 1dim list(src/test/resources/Features1/AddCus.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCumSteps.user_should_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into add customer page",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_navigates_into_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "two dimensional map",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Rakeshkumar"
    },
    {
      "name": "@Rakesh"
    }
  ]
});
formatter.step({
  "name": "User enters all the fields by using 2dim map",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "mail",
        "add",
        "phno"
      ]
    },
    {
      "cells": [
        "Rakesh",
        "venu",
        "dk@gmail.com",
        "Thiruvallur",
        "9876543210"
      ]
    },
    {
      "cells": [
        "akash",
        "sundar",
        "akash@gmail.com",
        "Thiruvallur",
        "8765432109"
      ]
    },
    {
      "cells": [
        "ravi",
        "chandran",
        "ravi@gmail.com",
        "Thiruvallur",
        "7654321098"
      ]
    },
    {
      "cells": [
        "gopi",
        "madan",
        "gopi@gmail.com",
        "Thiruvallur",
        "6543210987"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCumSteps.user_enters_all_the_fields_by_using_2dim_map(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCumSteps.user_should_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-46R444P\u0027, ip: \u0027192.168.43.183\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat com.samplecum.stepdefinition.Hooks.afterscenerio(Hooks.java:20)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.uri("src/test/resources/Features1/AddTraffPlan.feature");
formatter.feature({
  "name": "Add Tariff Plan",
  "description": "  User creating new tariff plan",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Hardcoded Info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Rakesh"
    },
    {
      "name": "@venu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into tariff plan page",
  "keyword": "And "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_navigates_into_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills all the fields",
  "keyword": "When "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_fills_all_the_fields()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Add Tariff Plan\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-46R444P\u0027, ip: \u0027192.168.43.183\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51724}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 52d6ef0fde3fd74d181c34a2c38a543d\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Add Tariff Plan\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat com.telecom.resources.commonactions.button(commonactions.java:24)\r\n\tat com.samplecum.stepdefinition.AddTrafficPlanStep.user_fills_all_the_fields(AddTrafficPlanStep.java:42)\r\n\tat ✽.User fills all the fields(src/test/resources/Features1/AddTraffPlan.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on Tariff submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_click_on_Tariff_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is displayed with the message tariff plan created",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_is_displayed_with_the_message_tariff_plan_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "one dim map",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Rakesh"
    },
    {
      "name": "@venu"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into tariff plan page",
  "keyword": "And "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_navigates_into_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills all the fields by using 1dim map",
  "rows": [
    {
      "cells": [
        "rental",
        "1000"
      ]
    },
    {
      "cells": [
        "local_minutes",
        "5000"
      ]
    },
    {
      "cells": [
        "inter_minutes",
        "200"
      ]
    },
    {
      "cells": [
        "sms_pack",
        "100"
      ]
    },
    {
      "cells": [
        "minutes_charges",
        "2"
      ]
    },
    {
      "cells": [
        "inter_charges",
        "50"
      ]
    },
    {
      "cells": [
        "sms_charges",
        "1"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_fills_all_the_fields_by_using_1dim_map(DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Add Tariff Plan\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-46R444P\u0027, ip: \u0027192.168.43.183\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51766}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 93214639dcdbf77aaaf4c0d6bfa75a8f\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Add Tariff Plan\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat com.telecom.resources.commonactions.button(commonactions.java:24)\r\n\tat com.samplecum.stepdefinition.AddTrafficPlanStep.user_fills_all_the_fields_by_using_1dim_map(AddTrafficPlanStep.java:73)\r\n\tat ✽.User fills all the fields by using 1dim map(src/test/resources/Features1/AddTraffPlan.feature:24)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on Tariff submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_click_on_Tariff_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is displayed with the message tariff plan created",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_is_displayed_with_the_message_tariff_plan_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "using outline",
  "description": "   s",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Rakesh"
    }
  ]
});
formatter.step({
  "name": "User navigates into tariff plan page",
  "keyword": "And "
});
formatter.step({
  "name": "User fills all the fields \"\u003crental\u003e\",\"\u003clocal_minutes\u003e\",\"\u003cinter_minutes\u003e\",\"\u003csms_pack\u003e\",\"\u003cminutes_charges\u003e\",\"\u003cinter_charges\u003e\",\"\u003csms_charges\u003e\",",
  "keyword": "When "
});
formatter.step({
  "name": "User click on Tariff submit button",
  "keyword": "And "
});
formatter.step({
  "name": "User is displayed with the message tariff plan created",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "rental",
        "local_minutes",
        "inter_minutes",
        "sms_pack",
        "minutes_charges",
        "inter_charges",
        "sms_charges"
      ]
    },
    {
      "cells": [
        "1000",
        "5000",
        "200",
        "100",
        "2",
        "50",
        "1"
      ]
    },
    {
      "cells": [
        "900",
        "4500",
        "300",
        "200",
        "3",
        "40",
        "2"
      ]
    },
    {
      "cells": [
        "800",
        "4000",
        "400",
        "300",
        "4",
        "30",
        "3"
      ]
    },
    {
      "cells": [
        "700",
        "3500",
        "500",
        "400",
        "5",
        "20",
        "4"
      ]
    }
  ]
});
formatter.scenario({
  "name": "using outline",
  "description": "   s",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Rakesh"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into tariff plan page",
  "keyword": "And "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_navigates_into_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills all the fields \"1000\",\"5000\",\"200\",\"100\",\"2\",\"50\",\"1\",",
  "keyword": "When "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_fills_all_the_fields(String,String,String,String,String,String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027rental\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-46R444P\u0027, ip: \u0027192.168.43.183\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51837}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 70e346926fcb4edc63778c096d451e89\n*** Element info: {Using\u003dname, value\u003drental}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.samplecum.stepdefinition.AddTrafficPlanStep.user_fills_all_the_fields(AddTrafficPlanStep.java:118)\r\n\tat ✽.User fills all the fields \"1000\",\"5000\",\"200\",\"100\",\"2\",\"50\",\"1\",(src/test/resources/Features1/AddTraffPlan.feature:62)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on Tariff submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_click_on_Tariff_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is displayed with the message tariff plan created",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_is_displayed_with_the_message_tariff_plan_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "using outline",
  "description": "   s",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Rakesh"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into tariff plan page",
  "keyword": "And "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_navigates_into_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills all the fields \"900\",\"4500\",\"300\",\"200\",\"3\",\"40\",\"2\",",
  "keyword": "When "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_fills_all_the_fields(String,String,String,String,String,String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027rental\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-46R444P\u0027, ip: \u0027192.168.43.183\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51911}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 910172d71a06bc7a15802d9f9c49efaf\n*** Element info: {Using\u003dname, value\u003drental}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.samplecum.stepdefinition.AddTrafficPlanStep.user_fills_all_the_fields(AddTrafficPlanStep.java:118)\r\n\tat ✽.User fills all the fields \"900\",\"4500\",\"300\",\"200\",\"3\",\"40\",\"2\",(src/test/resources/Features1/AddTraffPlan.feature:62)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on Tariff submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_click_on_Tariff_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is displayed with the message tariff plan created",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_is_displayed_with_the_message_tariff_plan_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "using outline",
  "description": "   s",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Rakesh"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into tariff plan page",
  "keyword": "And "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_navigates_into_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills all the fields \"800\",\"4000\",\"400\",\"300\",\"4\",\"30\",\"3\",",
  "keyword": "When "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_fills_all_the_fields(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Tariff submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_click_on_Tariff_submit_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression ((//input[@type\u003d\u0027submit\u0027])[1] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027((//input[@type\u003d\u0027submit\u0027])[1]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-46R444P\u0027, ip: \u0027192.168.43.183\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51974}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 77d07f71052e899a1405dc9c6eea2d01\n*** Element info: {Using\u003dxpath, value\u003d((//input[@type\u003d\u0027submit\u0027])[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat com.telecom.resources.commonactions.button(commonactions.java:24)\r\n\tat com.samplecum.stepdefinition.AddTrafficPlanStep.user_click_on_Tariff_submit_button(AddTrafficPlanStep.java:130)\r\n\tat ✽.User click on Tariff submit button(src/test/resources/Features1/AddTraffPlan.feature:63)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User is displayed with the message tariff plan created",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_is_displayed_with_the_message_tariff_plan_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "using outline",
  "description": "   s",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Rakesh"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into tariff plan page",
  "keyword": "And "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_navigates_into_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills all the fields \"700\",\"3500\",\"500\",\"400\",\"5\",\"20\",\"4\",",
  "keyword": "When "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_fills_all_the_fields(String,String,String,String,String,String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027rental\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-46R444P\u0027, ip: \u0027192.168.43.183\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52069}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3634de38d17929944ce8236fc85fd577\n*** Element info: {Using\u003dname, value\u003drental}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.samplecum.stepdefinition.AddTrafficPlanStep.user_fills_all_the_fields(AddTrafficPlanStep.java:118)\r\n\tat ✽.User fills all the fields \"700\",\"3500\",\"500\",\"400\",\"5\",\"20\",\"4\",(src/test/resources/Features1/AddTraffPlan.feature:62)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on Tariff submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_click_on_Tariff_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is displayed with the message tariff plan created",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_is_displayed_with_the_message_tariff_plan_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});