package com.samplecum.stepdefinition;

import java.util.List;


import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;

import com.samplecum.stepdefinition.Hooks;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;


public class AddCumSteps {
	
@Given("User navigates into add customer page")
	public void user_navigates_into_add_customer_page() {
		
		Hooks.driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
}

    /*public void handleFrame() throws InterruptedException {
	
	Thread.sleep(10000);
	Hooks.driver.switchTo().frame("flow_close_btn_iframe");
	Hooks.driver.findElement(By.xpath("//div[@id='closeBtn']")).click();
	Hooks.driver.switchTo().defaultContent();
 }*/

    @When("User enters all the fields")
	public void user_enters_all_the_fields() throws InterruptedException {
	    
			//handleFrame();
			
			Hooks.driver.findElement(By.xpath("(//label[@for='done'])[1]")).click();
			Hooks.driver.findElement(By.id("fname")).sendKeys("Rakesh");
			Hooks.driver.findElement(By.id("lname")).sendKeys("venu");
			Hooks.driver.findElement(By.id("email")).sendKeys("dk@gmail.com");
			Hooks.driver.findElement(By.name("addr")).sendKeys("Thiruvallur");
			Hooks.driver.findElement(By.id("telephoneno")).sendKeys("9684622544");

	}

@When("User enters all the fields by using 1dim list")
public void user_enters_all_the_fields_by_using_1dim_list(DataTable datas) throws InterruptedException {
   
	//handleFrame();
	List<String> cusDetails = datas.asList();

	Hooks.driver.findElement(By.xpath("(//label[@for='done'])[1]")).click();
	Hooks.driver.findElement(By.id("fname")).sendKeys(cusDetails.get(0));
	Hooks.driver.findElement(By.id("lname")).sendKeys(cusDetails.get(1));
	Hooks.driver.findElement(By.id("email")).sendKeys(cusDetails.get(2));
	Hooks.driver.findElement(By.name("addr")).sendKeys(cusDetails.get(3));
	Hooks.driver.findElement(By.id("telephoneno")).sendKeys(cusDetails.get(4));
}

@When("User enters all the fields by using 1dim map")
public void user_enters_all_the_fields_by_using_1dim_map(DataTable datas) throws InterruptedException {

	//handleFrame();

	Map<String, String> cusDetails = datas.asMap(String.class, String.class);
	
	Hooks.driver.findElement(By.xpath("(//label[@for='done'])[1]")).click();
	Hooks.driver.findElement(By.id("fname")).sendKeys(cusDetails.get("fname"));
	Hooks.driver.findElement(By.id("lname")).sendKeys(cusDetails.get("lname"));
	Hooks.driver.findElement(By.id("email")).sendKeys(cusDetails.get("mail"));
	Hooks.driver.findElement(By.name("addr")).sendKeys(cusDetails.get("add"));
	Hooks.driver.findElement(By.id("telephoneno")).sendKeys(cusDetails.get("phno"));
}

@When("User enters all the fields by using 2dim list")
public void user_enters_all_the_fields_by_using_2dim_list(DataTable datas) {
	
	//handleFrame();
	List<List<String>> cusDetails = datas.asLists();

	Hooks.driver.findElement(By.xpath("(//label[@for='done'])[1]")).click();
	Hooks.driver.findElement(By.id("fname")).sendKeys(cusDetails.get(0).get(0));
	Hooks.driver.findElement(By.id("lname")).sendKeys(cusDetails.get(1).get(3));
	Hooks.driver.findElement(By.id("email")).sendKeys(cusDetails.get(2).get(2));
	Hooks.driver.findElement(By.name("addr")).sendKeys(cusDetails.get(3).get(1));
	Hooks.driver.findElement(By.id("telephoneno")).sendKeys(cusDetails.get(3).get(4));
}

@When("User enters all the fields by using 2dim map")
public void user_enters_all_the_fields_by_using_2dim_map(DataTable datas) {

	//handleFrame();

	List<Map<String, String>> cusDetails = datas.asMaps();
	
	Hooks.driver.findElement(By.xpath("(//label[@for='done'])[1]")).click();
	Hooks.driver.findElement(By.id("fname")).sendKeys(cusDetails.get(0).get("fname"));
	Hooks.driver.findElement(By.id("lname")).sendKeys(cusDetails.get(2).get("lname"));
	Hooks.driver.findElement(By.id("email")).sendKeys(cusDetails.get(3).get("mail"));
	Hooks.driver.findElement(By.name("addr")).sendKeys(cusDetails.get(1).get("add"));
	Hooks.driver.findElement(By.id("telephoneno")).sendKeys(cusDetails.get(3).get("phno"));
}

@When("User enters all the fields {string},{string},{string},{string},{string}")
public void user_enters_all_the_fields(String fname, String lname, String mail, String add, String phno) throws InterruptedException {
	
	//handleFrame();

	Hooks.driver.findElement(By.xpath("(//label[@for='done'])[1]")).click();
	Hooks.driver.findElement(By.id("fname")).sendKeys(fname);
	Hooks.driver.findElement(By.id("lname")).sendKeys(lname);
	Hooks.driver.findElement(By.id("email")).sendKeys(mail);
	Hooks.driver.findElement(By.name("addr")).sendKeys(add);
	Hooks.driver.findElement(By.id("telephoneno")).sendKeys(phno);
}
@When("User click on submit button")
public void user_click_on_submit_button() {
   
	Hooks.driver.findElement(By.xpath("(//input[@type='submit'])")).click();
}
	
@Then("User should be displayed customer id is generated")
	public void user_should_be_displayed_customer_id_is_generated() throws InterruptedException {
	    
		//handleFrame();
		
		Assert.assertTrue(Hooks.driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
		Hooks.driver.quit();
	}

}
