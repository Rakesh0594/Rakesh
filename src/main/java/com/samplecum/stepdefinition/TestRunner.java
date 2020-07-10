package com.samplecum.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Features1\\AddCus.feature",
                 glue="com.samplecum.stepdefinition",
                 dryRun = false,monochrome=true)
public class TestRunner {
                
	         
}
