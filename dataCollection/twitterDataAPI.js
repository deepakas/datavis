var Twit = require('twit');
var fs = require('fs');
var log =fs.createWriteStream('betting.log');


var twit = new Twit({
	consumer_key : ' ',
	consumer_secret : ' ',
	access_token : ' ',
	access_token_secret : ' '
});



var uk = [ '-9.23', '49.84', '2.69', '60.85' ];
var location ="uk"
var stream = twit.stream('statuses/filter', { locations: uk })
var code= ["bet", "betting" ,"games" ,"casino"]
//var log =fs.createWriteStream( 'bet3.json');
var log =fs.createWriteStream(location +'.json');

//var stream = twit.stream('statuses/filter', { track : code })
stream.on('tweet', processTweet);

/*
function processTweet(tweet) {
  //console.log(tweet);
	var strTweet =JSON.stringify(tweet);
	log.write(strTweet);

};
*/

function processTweet(tweet) {
	//console.log(tweet);
	var strTweet =JSON.stringify(tweet);
	log.write(strTweet);
	log.write("\n");
	/*
	var regexp = /[Ff]ootball|[Ss]aturday/g;

	if (regexp.test(tweet.text)) {

	//var strTweet = JSON.stringify(tweet);
		console.log(tweet.text);
	//log.write(strTweet);
	}
    */


};

