Feature: Did it get 100 post?
  Everyone wants to know if 100 post is called

  Scenario: API called 100 posts or not 
    Given that number of posts is 100
    When I verify that posts length is equal to 100
    Then I should be told 100

  Examples:
    | number            | 100   |
    | anything else! | no   |