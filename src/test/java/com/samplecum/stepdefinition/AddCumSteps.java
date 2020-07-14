package com.samplecum.stepdefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;

import com.telecom.objectrepository.AddCumPage;
import com.telecom.resources.commonactions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;


public class AddCumSteps extends commonactions{
	
	commonactions ka = new commonactions();
	AddCumPage acp = new AddCumPage();
	
	
@Given("User navigates into add customer page")
	public void user_navigates_into_add_customer_page() {
		
	ka.button(acp.getCustomerBtn());
}

    /*public void handleFrame() throws InterruptedException {
	
	Thread.sleep(10000);
	driver.switchTo().frame("flow_close_btn_iframe");
	driver.findElement(By.xpath("//div[@id='closeBtn']")).click();
	driver.switchTo().defaultContent();
 }*/

    @When("User enters all the fields")
	public void user_enters_all_the_fields() throws InterruptedException {
	    
			//handleFrame();
			
			ka.button(acp.getCustomerBtn());
            ka.insertText(acp.getFirstname(), "Rakesh"); 
            ka.insertText(acp.getLastname(), "venu");
            ka.insertText(acp.getMail(), "dkrakesh@gmail.com");
            ka.insertText(acp.getAddress(), "Thirunindravur");
            ka.insertText(acp.getPhno(), "9856456255");
	}

@When("User enters all the fields by using 1dim list")
public void user_enters_all_the_fields_by_using_1dim_list(DataTable datas) throws InterruptedException {
   
	//handleFrame();
	List<String> cusDetails = datas.asList();


	ka.button(acp.getCustomerBtn());
    ka.insertText(acp.getFirstname(), cusDetails.get(0)); 
    ka.insertText(acp.getLastname(), cusDetails.get(1));
    ka.insertText(acp.getMail(), cusDetails.get(2));
    ka.insertText(acp.getAddress(), cusDetails.get(3));
    ka.insertText(acp.getPhno(), cusDetails.get(4));
	
}

@When("User enters all the fields by using 1dim map")
public void user_enters_all_the_fields_by_using_1dim_map(DataTable datas) throws InterruptedException {

	//handleFrame();

	Map<String, String> cusDetails = datas.asMap(String.class, String.class);
	
	ka.button(acp.getCustomerBtn());
    ka.insertText(acp.getFirstname(), cusDetails.get("fname")); 
    ka.insertText(acp.getLastname(), cusDetails.get("lname"));
    ka.insertText(acp.getMail(), cusDetails.get("mail"));
    ka.insertText(acp.getAddress(), cusDetails.get("add"));
    ka.insertText(acp.getPhno(), cusDetails.get("phno"));
	
}

@When("User enters all the fields by using 2dim list")
public void user_enters_all_the_fields_by_using_2dim_list(DataTable datas) {
	
	//handleFrame();
	List<List<String>> cusDetails = datas.asLists();

	driver.findElement(By.xpath("(//label[@for='done'])[1]")).click();
	driver.findElement(By.id("fname")).sendKeys(cusDetails.get(0).get(0));
	driver.findElement(By.id("lname")).sendKeys(cusDetails.get(1).get(3));
	driver.findElement(By.id("email")).sendKeys(cusDetails.get(2).get(2));
	driver.findElement(By.name("addr")).sendKeys(cusDetails.get(3).get(1));
	driver.findElement(By.id("telephoneno")).sendKeys(cusDetails.get(3).get(4));
}

@When("User enters all the fields by using 2dim map")
public void user_enters_all_the_fields_by_using_2dim_map(DataTable datas) {

	//handleFrame();

	List<Map<String, String>> cusDetails = datas.asMaps();
	
	driver.findElement(By.xpath("(//label[@for='done'])[1]")).click();
	driver.findElement(By.id("fname")).sendKeys(cusDetails.get(0).get("fname"));
	driver.findElement(By.id("lname")).sendKeys(cusDetails.get(2).get("lname"));
	driver.findElement(By.id("email")).sendKeys(cusDetails.get(3).get("mail"));
	driver.findElement(By.name("addr")).sendKeys(cusDetails.get(1).get("add"));
	driver.findElement(By.id("telephoneno")).sendKeys(cusDetails.get(3).get("phno"));
}

@When("User enters all the fields {string},{string},{string},{string},{string}")
public void user_enters_all_the_fields(String fname, String lname, String mail, String add, String phno) throws InterruptedException {
	
	//handleFrame();

	driver.findElement(By.xpath("(//label[@for='done'])[1]")).click();
	driver.findElement(By.id("fname")).sendKeys(fname);
	driver.findElement(By.id("lname")).sendKeys(lname);
	driver.findElement(By.id("email")).sendKeys(mail);
	driver.findElement(By.name("addr")).sendKeys(add);
	driver.findElement(By.id("telephoneno")).sendKeys(phno);
}
@When("User click on submit button")
public void user_click_on_submit_button() {
   
	ka.button(acp.getSubmitBtn());
}
	
@Then("User should be displayed customer id is generated")
	public void user_should_be_displayed_customer_id_is_generated() throws InterruptedException {
	    
		//handleFrame();
		
		Assert.assertTrue(acp.getSuccessmessage().isDisplayed());
		driver.quit();
	}

}
