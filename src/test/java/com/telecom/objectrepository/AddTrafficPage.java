package com.telecom.objectrepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.telecom.resources.commonactions;

public class AddTrafficPage extends commonactions {

		public  AddTrafficPage() {
			
			PageFactory.initElements(driver, this);
		}	
			@FindBy(xpath="//a[text()='Add Tariff Plan']")
			private WebElement TariffBtn;
			
			@FindBy(name="rental")
			private WebElement rental;
			
			@FindBy(name="local_minutes")
			private WebElement local_minutes;
			
			@FindBy(name="inter_minutes")
			private WebElement interminutes;
			
			@FindBy(name="sms_pack")
			private WebElement smspack;
			
			@FindBy(name="minutes_charges")
			private WebElement minutescharges;
			
			@FindBy(name="inter_charges")
			private WebElement intercharges;
			
			@FindBy(name="sms_charges")
			private WebElement smscharges;
			
			@FindBy(xpath="((//input[@type='submit'])[1]")
			private WebElement submitBtn;
			
			public WebElement getTariffBtn() {
				return TariffBtn;
			}

			public WebElement getRental() {
				return rental;
			}

			public WebElement getLocal_minutes() {
				return local_minutes;
			}

			public WebElement getInterminutes() {
				return interminutes;
			}

			public WebElement getSmspack() {
				return smspack;
			}

			public WebElement getMinutescharges() {
				return minutescharges;
			}

			public WebElement getIntercharges() {
				return intercharges;
			}

			public WebElement getSmscharges() {
				return smscharges;
			}

			public WebElement getSubmitBtn() {
				return submitBtn;
			}

			public WebElement getCongratulation() {
				return Congratulation;
			}
			@FindBy(xpath="//h2[text()='Congratulation you add Tariff Plan']")
			private WebElement Congratulation;

			
			
	}
