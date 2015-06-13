var Twit = require('twit');
var fs = require('fs');
var log =fs.createWriteStream('betting.log');

/*
var twit = new Twit({
	consumer_key : '',
	consumer_secret : '',
	access_token : '',
	access_token_secret : ''
});

*/




var uk3 = [ '-9.23', '49.84', '2.69', '60.85' ];
var location ="uk3"
var stream = twit.stream('statuses/filter', { locations: uk3 })
var code= ["bet", "betting" ,"casino"]
//var log =fs.createWriteStream( 'bet3.json');

var log =fs.createWriteStream('ukjun13_2.json');

//var log =fs.createWriteStream(location +'.json');

//var stream = twit.stream('statuses/filter', { track : code })
stream.on('tweet', processTweet);

var tweetsCollected = 0;
var buffer ="";

/*
function processTweet(tweet) {
  //console.log(tweet);
	var strTweet =JSON.stringify(tweet);
	log.write(strTweet);

};
*/


function processTweet(tweet) {
	//console.log(tweet);
	tweetsCollected++;
	var strTweet =JSON.stringify(tweet);
	buffer = buffer + "\n" + strTweet;
	//log.write(strTweet);
	//log.write("\n");
	/*
	var regexp = /[Ff]ootball|[Ss]aturday/g;

	if (regexp.test(tweet.text)) {

	//var strTweet = JSON.stringify(tweet);
		console.log(tweet.text);
	//log.write(strTweet);
	}
    */

	if (tweetsCollected % 100) {	// Only write to file every 100 tweets - play with the constant to adjust how many tweets you collect before writing
		log.write(buffer); 		// Do the writing
		buffer = "";			// Reset the buffer
	}


};

/*
function processTweet(tweet) {
	tweetsCollected++;
	var strTweet = JSON.stringify(tweet);
	buffer = buffer + strTweet;	// Add the new tweet to the buffer
	if (tweetsCollected % 100) {	// Only write to file every 100 tweets - play with the constant to adjust how many tweets you collect before writing
		log.write(buffer); 		// Do the writing
		buffer = “”;			// Reset the buffer
	}
}
*/

