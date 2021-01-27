const assert = require('assert');
const axios = require('axios');
const { Given, When, Then } = require('@cucumber/cucumber');
const { aboveHundredPosts, getPostsandCount, createPost, updatePostwithComments, deletePost, updatePost} = require('../../src/index.js');

aboveHundredPosts(100)

    Given('number of post is {int}', function (int) {
         // Given('number of post is {float}', function (float) {
           // Write code here that turns the phrase above into concrete actions
           this.numberOfPost = getPostsandCount()
         });



    When('asked is amount of posts is more than {int}', function (int) {
         // When('asked is amount of posts is {float}', function (float) {
           // Write code here that turns the phrase above into concrete actions
           this.actualAnswer = aboveHundredPosts(100)
         });


    Then('I should be told {string}', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return aboveHundredPosts(102)


         });

