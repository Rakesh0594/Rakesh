#Author: your.email@your.domain.com

Feature: Add customer
  creating a user account

   Scenario: Hardcoded
    Given User launch telecom application
    And User navigates into add customer page
    When User enters all the fields
    And User click on submit button
    Then User should be displayed customer id is generated

