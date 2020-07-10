package com.samplecum.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
public class Hooks {
	
 static WebDriver driver;
   @Before
	public void beforescenerio() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Admin\\workspace\\samplecucum\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://www.demo.guru99.com/telecom/");
		
		System.out.println("executed before every scenerio");
	}

	@After
	public void afterscenerio() {
		
		driver.close();
		System.out.println("executed after every scenerio");
	}
}
