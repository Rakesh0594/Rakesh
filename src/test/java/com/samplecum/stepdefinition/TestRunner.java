package com.samplecum.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Features1",
                 glue="com.samplecum.stepdefinition",
                 dryRun=false,
                 plugin={"html:target\\samplecucum-html-reports","json:target\reports.json"},
                 monochrome=true,
                 tags={"@Rakesh,@venu"})
public class TestRunner {
                
	         
}
