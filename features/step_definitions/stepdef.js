const assert = require('assert');
const axios = require('axios');
const { Given, When, Then } = require('@cucumber/cucumber');
const {
	hundredPosts
} = require('../../src/index.js');





hundredPosts()
         Given('that number of posts is {int}', function (int) {
         	this.int = 100
         });
      

         When('I verify that posts length is equal to {int}', function (int) {
         // When('I verify that posts length is equal to {float}', function (float) {
           // Write code here that turns the phrase above into concrete actions
           this.actualAnswer = hundredPosts()
         });
       
         Then('I should be told {then}', function (expectedAnswer) {
         	assert.equal(this.actualAnswer, expectedAnswer)
         });
       
