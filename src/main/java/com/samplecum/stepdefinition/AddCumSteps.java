package com.samplecum.stepdefinition;

import java.util.List;


import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;

import com.samplecum.stepdefinition.AddTrafficPlanStep;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;


public class AddCumSteps {
	
@Given("User navigates into add customer page")
	public void user_navigates_into_add_customer_page() {
		
		AddTrafficPlanStep.driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
}

    /*public void handleFrame() throws InterruptedException {
	
	Thread.sleep(10000);
	AddTrafficPlanStep.driver.switchTo().frame("flow_close_btn_iframe");
	AddTrafficPlanStep.driver.findElement(By.xpath("//div[@id='closeBtn']")).click();
	AddTrafficPlanStep.driver.switchTo().defaultContent();
 }*/

    @When("User enters all the fields")
	public void user_enters_all_the_fields() throws InterruptedException {
	    
			//handleFrame();
			
			AddTrafficPlanStep.driver.findElement(By.xpath("(//label[@for='done'])[1]")).click();
			AddTrafficPlanStep.driver.findElement(By.id("fname")).sendKeys("Rakesh");
			AddTrafficPlanStep.driver.findElement(By.id("lname")).sendKeys("venu");
			AddTrafficPlanStep.driver.findElement(By.id("email")).sendKeys("dk@gmail.com");
			AddTrafficPlanStep.driver.findElement(By.name("addr")).sendKeys("Thiruvallur");
			AddTrafficPlanStep.driver.findElement(By.id("telephoneno")).sendKeys("9684622544");

	}

@When("User enters all the fields by using 1dim list")
public void user_enters_all_the_fields_by_using_1dim_list(DataTable datas) throws InterruptedException {
   
	//handleFrame();
	List<String> cusDetails = datas.asList();

	AddTrafficPlanStep.driver.findElement(By.xpath("(//label[@for='done'])[1]")).click();
	AddTrafficPlanStep.driver.findElement(By.id("fname")).sendKeys(cusDetails.get(0));
	AddTrafficPlanStep.driver.findElement(By.id("lname")).sendKeys(cusDetails.get(1));
	AddTrafficPlanStep.driver.findElement(By.id("email")).sendKeys(cusDetails.get(2));
	AddTrafficPlanStep.driver.findElement(By.name("addr")).sendKeys(cusDetails.get(3));
	AddTrafficPlanStep.driver.findElement(By.id("telephoneno")).sendKeys(cusDetails.get(4));
}

@When("User enters all the fields by using 1dim map")
public void user_enters_all_the_fields_by_using_1dim_map(DataTable datas) throws InterruptedException {

	//handleFrame();

	Map<String, String> cusDetails = datas.asMap(String.class, String.class);
	
	AddTrafficPlanStep.driver.findElement(By.xpath("(//label[@for='done'])[1]")).click();
	AddTrafficPlanStep.driver.findElement(By.id("fname")).sendKeys(cusDetails.get("fname"));
	AddTrafficPlanStep.driver.findElement(By.id("lname")).sendKeys(cusDetails.get("lname"));
	AddTrafficPlanStep.driver.findElement(By.id("email")).sendKeys(cusDetails.get("mail"));
	AddTrafficPlanStep.driver.findElement(By.name("addr")).sendKeys(cusDetails.get("add"));
	AddTrafficPlanStep.driver.findElement(By.id("telephoneno")).sendKeys(cusDetails.get("phno"));
}

@When("User enters all the fields by using 2dim list")
public void user_enters_all_the_fields_by_using_2dim_list(DataTable datas) {
	
	//handleFrame();
	List<List<String>> cusDetails = datas.asLists();

	AddTrafficPlanStep.driver.findElement(By.xpath("(//label[@for='done'])[1]")).click();
	AddTrafficPlanStep.driver.findElement(By.id("fname")).sendKeys(cusDetails.get(0).get(0));
	AddTrafficPlanStep.driver.findElement(By.id("lname")).sendKeys(cusDetails.get(1).get(3));
	AddTrafficPlanStep.driver.findElement(By.id("email")).sendKeys(cusDetails.get(2).get(2));
	AddTrafficPlanStep.driver.findElement(By.name("addr")).sendKeys(cusDetails.get(3).get(1));
	AddTrafficPlanStep.driver.findElement(By.id("telephoneno")).sendKeys(cusDetails.get(3).get(4));
}

@When("User enters all the fields by using 2dim map")
public void user_enters_all_the_fields_by_using_2dim_map(DataTable datas) {

	//handleFrame();

	List<Map<String, String>> cusDetails = datas.asMaps();
	
	AddTrafficPlanStep.driver.findElement(By.xpath("(//label[@for='done'])[1]")).click();
	AddTrafficPlanStep.driver.findElement(By.id("fname")).sendKeys(cusDetails.get(0).get("fname"));
	AddTrafficPlanStep.driver.findElement(By.id("lname")).sendKeys(cusDetails.get(2).get("lname"));
	AddTrafficPlanStep.driver.findElement(By.id("email")).sendKeys(cusDetails.get(3).get("mail"));
	AddTrafficPlanStep.driver.findElement(By.name("addr")).sendKeys(cusDetails.get(1).get("add"));
	AddTrafficPlanStep.driver.findElement(By.id("telephoneno")).sendKeys(cusDetails.get(3).get("phno"));
}

@When("User enters all the fields {string},{string},{string},{string},{string}")
public void user_enters_all_the_fields(String fname, String lname, String mail, String add, String phno) throws InterruptedException {
	
	//handleFrame();

	AddTrafficPlanStep.driver.findElement(By.xpath("(//label[@for='done'])[1]")).click();
	AddTrafficPlanStep.driver.findElement(By.id("fname")).sendKeys(fname);
	AddTrafficPlanStep.driver.findElement(By.id("lname")).sendKeys(lname);
	AddTrafficPlanStep.driver.findElement(By.id("email")).sendKeys(mail);
	AddTrafficPlanStep.driver.findElement(By.name("addr")).sendKeys(add);
	AddTrafficPlanStep.driver.findElement(By.id("telephoneno")).sendKeys(phno);
}
@When("User click on submit button")
public void user_click_on_submit_button() {
   
	AddTrafficPlanStep.driver.findElement(By.xpath("(//input[@type='submit'])")).click();
}
	
@Then("User should be displayed customer id is generated")
	public void user_should_be_displayed_customer_id_is_generated() throws InterruptedException {
	    
		//handleFrame();
		
		Assert.assertTrue(AddTrafficPlanStep.driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
		AddTrafficPlanStep.driver.quit();
	}

}
