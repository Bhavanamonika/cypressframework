Feature: End to End Ecommerce Validation

  This feature ensures the entire ecommerce flow is validated, from adding products to checkout and verifying success messages.
@Regression
  # Scenario 1: Checkout and validate total price
  Scenario: Check out products and validate total price
    Given I visit the Ecommerce Page
    When I add phones to the cart
    When I validate the total price
    Then I select the country, submit, and verify the success message
@smoke
  # Scenario 2: Fill details and validate form behavior
  Scenario: Fill details and validate form
    Given I visit the Ecommerce Page
    When I fill the details on the page
    |name | gender |
    |Moni | Female |
    Then I validate the form behavior
    Then I go to the shopping page
