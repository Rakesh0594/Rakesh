package com.samplecum.stepdefinition;

import java.util.List;
import java.util.Map;
import org.junit.Assert;
import org.openqa.selenium.By;

import com.telecom.objectrepository.AddTrafficPage;
import com.telecom.resources.commonactions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class AddTrafficPlanStep extends commonactions{	

	commonactions ka = new commonactions();
	AddTrafficPage dcp = new AddTrafficPage();
	
	
	@Given("User navigates into tariff plan page")
	public void user_navigates_into_tariff_plan_page() {
		
		ka.button(dcp.getTariffBtn());
		
	}

	/*public void handleFrame() throws InterruptedException {
		
		Thread.sleep(10000);
		driver.switchTo().frame("flow_close_btn_iframe");
		driver.findElement(By.xpath("//div[@id='closeBtn']")).click();
		driver.switchTo().defaultContent();

	}*/

	
	@When("User fills all the fields")
	public void user_fills_all_the_fields() throws InterruptedException {
		//handleFrame();
		
		ka.button(dcp.getTariffBtn());
        ka.insertText(dcp.getRental(),"700");
        ka.insertText(dcp.getLocal_minutes(),"3500");
        ka.insertText(dcp.getInterminutes(), "500");
        ka.insertText(dcp.getSmspack(), "400");
        ka.insertText(dcp.getMinutescharges(), "5");
        ka.insertText(dcp.getIntercharges(), "20");
        ka.insertText(dcp.getSmscharges(), "4");
	}
	

	@When("User fills all the fields by using 1dim list")
	public void user_fills_all_the_fields_by_using_1dim_list(DataTable datal) throws InterruptedException {
		//handleFrame();
		List<String> plan = datal.asList();

		ka.button(dcp.getTariffBtn());
        ka.insertText(dcp.getRental(),plan.get(0));
        ka.insertText(dcp.getLocal_minutes(),plan.get(1));
        ka.insertText(dcp.getInterminutes(), plan.get(2));
        ka.insertText(dcp.getSmspack(), plan.get(3));
        ka.insertText(dcp.getMinutescharges(), plan.get(4));
        ka.insertText(dcp.getIntercharges(), plan.get(5));
        ka.insertText(dcp.getSmscharges(), plan.get(6));
	}
	
	@When("User fills all the fields by using 1dim map")
	public void user_fills_all_the_fields_by_using_1dim_map(DataTable datam) throws InterruptedException {
		//handleFrame();
		Map<String, String> planDetails = datam.asMap(String.class, String.class);

		ka.button(dcp.getTariffBtn());
        ka.insertText(dcp.getRental(),planDetails.get("rental"));
        ka.insertText(dcp.getLocal_minutes(),planDetails.get("local_minutes"));
        ka.insertText(dcp.getInterminutes(), planDetails.get("inter_minutes"));
        ka.insertText(dcp.getSmspack(), planDetails.get("sms_pack"));
        ka.insertText(dcp.getMinutescharges(), planDetails.get("minutes_charges"));
        ka.insertText(dcp.getIntercharges(), planDetails.get("inter_charges"));
        ka.insertText(dcp.getSmscharges(), planDetails.get("sms_charges"));
	
	}
	
	@When("User fills all the fields by using 2dim list")
	public void user_fills_all_the_fields_by_using_2dim_list(DataTable datal) throws InterruptedException {
		//handleFrame();
		List<List<String>> plan = datal.asLists();

		driver.findElement(By.name("rental")).sendKeys(plan.get(2).get(0));
		driver.findElement(By.name("local_minutes")).sendKeys(plan.get(0).get(1));
		driver.findElement(By.name("inter_minutes")).sendKeys(plan.get(3).get(2));
		driver.findElement(By.name("sms_pack")).sendKeys(plan.get(0).get(3));
		driver.findElement(By.name("minutes_charges")).sendKeys(plan.get(1).get(4));
		driver.findElement(By.name("inter_charges")).sendKeys(plan.get(3).get(5));
		driver.findElement(By.name("sms_charges")).sendKeys(plan.get(2).get(6));
	}

	@When("User fills all the fields by using 2dim map")
	public void user_fills_all_the_fields_by_using_2dim_map(DataTable datam) throws InterruptedException {
		//handleFrame();
		List<Map<String, String>> planDetails = datam.asMaps();
		
		driver.findElement(By.name("rental")).sendKeys(planDetails.get(0).get("rental"));
		driver.findElement(By.name("local_minutes")).sendKeys(planDetails.get(3).get("local_minutes"));
		driver.findElement(By.name("inter_minutes")).sendKeys(planDetails.get(2).get("inter_minutes"));
		driver.findElement(By.name("sms_pack")).sendKeys(planDetails.get(0).get("sms_pack"));
		driver.findElement(By.name("minutes_charges")).sendKeys(planDetails.get(1).get("minutes_charges"));
		driver.findElement(By.name("inter_charges")).sendKeys(planDetails.get(3).get("inter_charges"));
		driver.findElement(By.name("sms_charges")).sendKeys(planDetails.get(2).get("sms_charges"));
	
	}
	
	@When("User fills all the fields {string},{string},{string},{string},{string},{string},{string},")
	public void user_fills_all_the_fields(String rental, String local, String inter, String sms, String minutecharge, String intercharge, String smscharge) throws InterruptedException {
		
		//handleFrame();
		
		driver.findElement(By.name("rental")).sendKeys(rental);
		driver.findElement(By.name("local_minutes")).sendKeys(local);
		driver.findElement(By.name("inter_minutes")).sendKeys(inter);
		driver.findElement(By.name("sms_pack")).sendKeys(sms);
		driver.findElement(By.name("minutes_charges")).sendKeys(minutecharge);
		driver.findElement(By.name("inter_charges")).sendKeys(intercharge);
		driver.findElement(By.name("sms_charges")).sendKeys(smscharge);
	}
	
	@When("User click on Tariff submit button")
	public void user_click_on_Tariff_submit_button() {

            ka.button(dcp.getSubmitBtn());
	}

	@Then("User is displayed with the message tariff plan created")
	public void user_is_displayed_with_the_message_tariff_plan_created() throws InterruptedException {
		//handleFrame();
		Assert.assertTrue(dcp.getCongratulation().isDisplayed());
		driver.quit();
	}
}
