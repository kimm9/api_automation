Feature: Verify API call is getting 100 Posts or not
	
	Scenario: Number of post is 100 or not
		Given number of post is 100
		When asked is amount of posts is more than 100
		Then I should be told "nope"