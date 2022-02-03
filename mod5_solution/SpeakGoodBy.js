(function(window){

	var speakWord = "Good Bye";
	var bySpeaker =  {};

	bySpeaker.speak = function (name) {
  	console.log(speakWord + " " + name);
	}
  window.bySpeaker = bySpeaker;

})(window);