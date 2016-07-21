$(function(){



  $.get("https://www.reddit.com/r/aww/.json", function(redditData){
  	for (var i = 0; i < 10; i++) {
  		console.log("Reddit Aww");
  		$("div").append("https://www.reddit.com/r/aww/.json")
  	}
  	
  });

$("div").append(redditData.children[i].data.title);





});

