Feature: Verify login functioanlity

    Login positive and negative tests

Scenario: Verify login with Valid Creds
 Given User launch the Application
 When User enter valid username "Admin" and valid password "admin123"
 And User clicks on login button
 Then User should be navigated to dasboard page


Scenario: Verify login with invalid username and Valid password 
 Given User launch the Application
 When User enter username "fhbv" and password "admin123"
 And User clicks on login button
 Then User should get error message


Scenario: Verify login with valid username and inValid password 
 Given User launch the Application
 When User enter username "Admin" and password "admin1nhfknf23"
 And User clicks on login button
 Then User should get error message


Scenario: Verify login with invalid username and invalid password 
 Given User launch the Application
 When User enter username "Afnhrrhnfdmin" and password "admkfhiuehwin123"
 And User clicks on login button
 Then User should get error message
