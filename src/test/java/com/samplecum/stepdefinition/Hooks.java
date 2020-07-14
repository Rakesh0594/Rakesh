package com.samplecum.stepdefinition;
import com.telecom.resources.commonactions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
public class Hooks extends commonactions{
	
	commonactions ka = new commonactions();
	
   @Before
	public void beforescenerio() {
		
	    ka.launch("http://www.demo.guru99.com/telecom/");
		System.out.println("executed before every scenerio");
	}

	@After
	public void afterscenerio() {
		
		driver.close();
		System.out.println("executed after every scenerio");
	}
}
