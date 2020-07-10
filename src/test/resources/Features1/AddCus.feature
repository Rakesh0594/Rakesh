#Author: your.email@your.domain.com
@Rakesh
Feature: Add Customer
  User creating new account

@Rakesh @venu
  Scenario: Hardcoded2
    Given User launch telecom application
    And User navigates into add customer page
    When User enters all the fields
    And User click on submit button
    Then User should be displayed customer id is generated

   Scenario: one dimensional list
    Given User launch telecom application
    And User navigates into add customer page
    When User enters all the fields by using 1dim list
      | Rakesh | venu | dk@gmail.com | Thiruvallur | 9684622544 |
    And User click on submit button
    Then User should be displayed customer id is generated

     Scenario: one dimensional map
    Given User launch telecom application
    And User navigates into add customer page
    When User enters all the fields by using 1dim map
      | fname | Rakesh           |
      | lname | venu             |
      | mail  | dk@gmail.com     |
      | add   | Thiruvallur      |
      | phno  | 9684622544       |
    And User click on submit button
    Then User should be displayed customer id is generated
    
     Scenario: two dimensional list
    Given User launch telecom application
    And User navigates into add customer page
    When User enters all the fields by using 2dim list
      | Rakesh | venu     | dk@gmail.com    | Thiruvallur | 9876543210 |
      | akash  | sundar   | akash@gmail.com | Thiruvallur | 8765432109 |
      | ravi   | chandran | ravi@gmail.com  | Thiruvallur | 7654321098 |
      | gopi   | madan    | gopi@gmail.com  | Thiruvallur | 6543210987 |
    And User click on submit button
    Then User should be displayed customer id is generated
   
   @Rakesh
      Scenario: two dimensional map
    Given User launch telecom application
    And User navigates into add customer page
    When User enters all the fields by using 2dim map
      | fname  | lname    | mail            | add         | phno       |
      | Rakesh | venu     | dk@gmail.com    | Thiruvallur | 9876543210 |
      | akash  | sundar   | akash@gmail.com | Thiruvallur | 8765432109 |
      | ravi   | chandran | ravi@gmail.com  | Thiruvallur | 7654321098 |
      | gopi   | madan    | gopi@gmail.com  | Thiruvallur | 6543210987 |
    And User click on submit button
    Then User should be displayed customer id is generated
    
    Scenario Outline: by using outline
    Given User launch telecom application
    And User navigates into add customer page
    When User enters all the fields "<Fname>","<Lname>","<Mail>","<Add>","<Phno>"
    And User click on submit button
    Then User should be displayed customer id is generated

    Examples: 
      | Fname  | Lname    | Mail            | Add         | Phno       |
      | Rakesh | venu     | dk@gmail.com    | Thiruvallur | 9876543210 |
      | akash  | sundar   | akash@gmail.com | Thiruvallur | 8765432109 |
      | ravi   | chandran | ravi@gmail.com  | Thiruvallur | 7654321098 |
      | gopi   | madan    | gopi@gmail.com  | Thiruvallur | 6543210987 |
    
    