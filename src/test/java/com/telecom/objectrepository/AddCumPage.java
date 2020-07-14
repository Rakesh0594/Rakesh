package com.telecom.objectrepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.telecom.resources.commonactions;

public class AddCumPage extends commonactions {

	public  AddCumPage() {
		
		PageFactory.initElements(driver, this);
	}
	@FindBy(xpath="(//a[text()='Add Customer'])[1]")
	private WebElement customerBtn;
	
	@FindBy(xpath="(//label[@for='done'])[1]")
	private WebElement doneBtn;
	
	@FindBy(id="fname")
	private WebElement firstname;
	
	@FindBy(id="lname")
	private WebElement lastname;
	
	@FindBy(id="email")
	private WebElement mail;
	
	@FindBy(id="addr")
	private WebElement address;
	
	@FindBy(id="telephoneno")
	private WebElement phno;
	
	@FindBy(xpath="(//input[@type='submit'])")
	private WebElement submitBtn;
	
	@FindBy(xpath="(//td[@align='center'])[2]")
	private WebElement successmessage;

	public WebElement getCustomerBtn() {
		return customerBtn;
	}

	public WebElement getDoneBtn() {
		return doneBtn;
	}

	public WebElement getFirstname() {
		return firstname;
	}

	public WebElement getLastname() {
		return lastname;
	}

	public WebElement getMail() {
		return mail;
	}

	public WebElement getAddress() {
		return address;
	}

	public WebElement getPhno() {
		return phno;
	}

	public WebElement getSubmitBtn() {
		return submitBtn;
	}

	public WebElement getSuccessmessage() {
		return successmessage;
	}
}
