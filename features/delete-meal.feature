Feature: Delete Meals
  As a user
  I want to delete meals
  So that I can manage my meal list

  Scenario: User deletes all existing meals
    Given the user is on the Calorie Tracker page
    When the user deletes all existing meals
    Then all existing meals should be successfully deleted
