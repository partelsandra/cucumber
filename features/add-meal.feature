Feature: Add Meal
  As a user
  I want to add a new meal
  So that I can track my calorie intake

  Scenario: User adds a new meal
    Given the user is on the Calorie Tracker page
    When the user adds a new meal with name "New Meal" and calories "500"
    Then the total calories should be updated to "500"
    And the new meal "New Meal" should be displayed in the list