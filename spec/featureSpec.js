"use strict";

  var assert = new Assert();

	function displayApiHeadline() {
		assert.hasContent('headline-list', "Royal Ascot 2017")
	}

/*	function displayApiImage() {
		assert.hasContent('headline-list', "https://media.guim.co.uk/216577cb1405add42bfe03429294e3d295143998/0_0_2333_1400/500.jpg")
	}
*/

  // function displayStorySummary() {
  //   var lis = document.getElementsByTagName('li')
  //   var lastLi = lis[lis.length - 1]
  //   lastLi.click();
  //   assert.hasContent('li', );
  // }

  function runFeatureTests() {
		displayApiHeadline();
	//	displayApiImage();
    console.log('Team Bearfoot : Feature Tests Passed');
  }
