Feature: Home Page

  Background: The user is on the home page
    Given I am on the home page

  Scenario: Verify that all the Header Components are visible
    Then I should see the header container
    And I should see the header banner
    And I should see the header navigation container
    And I verify the text of the following fields
      | shop number          | Call us now: 0123-456-789 |
      | sing in button       | Sign in                   |
      | contact us button    | Contact us                |
    And I should see the header logo
    And I should see the header search box
    And I should verify that the search box text is "Search"
    And I should see the header shopping cart
    And I should verify that the shopping cart text is "Cart (empty)"

  Scenario: Verify the search box functionality
    When I enter "test" on the search box
    And I click the search box button
#    Then