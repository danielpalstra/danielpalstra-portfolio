var twitterConfig = {
  "id": '613432555052888064',
  "domId": '',
  "maxTweets": 5,
  "enableLinks": true,
  "showUser": false,
  "showTime": true,
  "customCallback": handleTweets,
  "showInteraction": false,
  "lang": 'en'
};

function handleTweets(tweets){
    var x = tweets.length;
    var n = 0;
    var element = document.getElementById('example2');
    //var html = '<div class="item">';
    var html = ''
    while(n < x) {
      if (n==0) {
      	html += '<div class="item active">' + tweets[n] + '</div>';
      }
      else {
      	html += '<div class="item">' + tweets[n] + '</div>';	
      }
      n++;
    }
    //html += '</div>';
    element.innerHTML = html;
}

twitterFetcher.fetch(twitterConfig);
