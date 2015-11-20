var http = require('http');
var dispatcher = require('httpdispatcher');

//Lets define a port we want to listen to
const PORT=8080; 

dispatcher.setStatic('resources');

  
dispatcher.onGet("/a", function(req, res) {
	console.log('connected');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Welcome to Ahoy Server");
});

dispatcher.onGet("/getDiscoverTopicsHomePage", function(req, res) {
	console.log('connected');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(getDiscoverTopicsHomePage()));
});

dispatcher.onGet("/getHomePagePopularAdvisors", function(req, res) {
	console.log('connected');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(getHomePagePopularAdvisors()));
});


//We need a function which handles requests and send response
function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

function getDiscoverTopicsHomePage() {
	var result = {
		results : [{categoryId: 1,
					categoryName: "Programming",
					topics: [
						{topicId: 1,
				 		 topName: "Python",
				 	     thumbnailUrl: null},
				 		{topicId: 2,
				 	     topName: "JavaScript",
				 		 thumbnailUrl: null},
				 		{topicId: 3,
				 	     topName: "Java",
				 		 thumbnailUrl: null},
				 		{topicId: 4,
				 	     topName: "C++",
				 		 thumbnailUrl: null},
				 		{topicId: 5,
				 	     topName: "PHP",
				 		 thumbnailUrl: null}
					]
				   },
				   {categoryId: 2,
					categoryName: "Design",
					topics: [
						{topicId: 6,
				 		 topName: "A",
				 	     thumbnailUrl: null},
				 		{topicId: 7,
				 	     topName: "B",
				 		 thumbnailUrl: null},
				 		{topicId: 8,
				 	     topName: "C",
				 		 thumbnailUrl: null},
				 		{topicId: 9,
				 	     topName: "D",
				 		 thumbnailUrl: null},
				 		{topicId: 10,
				 	     topName: "E",
				 		 thumbnailUrl: null}
						]
					},
					{categoryId: 3,
					categoryName: "Project Management",
					topics: [
						{topicId: 11,
				 		 topName: "F",
				 	     thumbnailUrl: null},
				 		{topicId: 12,
				 	     topName: "G",
				 		 thumbnailUrl: null},
				 		{topicId: 13,
				 	     topName: "H",
				 		 thumbnailUrl: null},
				 		{topicId: 14,
				 	     topName: "I",
				 		 thumbnailUrl: null},
				 		{topicId: 15,
				 	     topName: "J",
				 		 thumbnailUrl: null}
						]
					}]
	};
	//console.log(result);
	return result;
}

function getHomePagePopularAdvisors() {
	var result = {results: [{advisorId: 1,
				     		 advisorName: "Haoyang Li",
						     reviewRating: 5,
							 title: "UX Designer, Scopely",
							 price: 150,
							 thumbnailUrl: null
							},
							{advisorId: 2,
				     		 advisorName: "Yikai Zhu",
						     reviewRating: 5,
							 title: "Software Engineer, Google",
							 price: 150,
							 thumbnailUrl: null
							},
							{advisorId: 3,
				     		 advisorName: "Chunjun",
						     reviewRating: 5,
							 title: "Software Engineer, Ahoy",
							 price: 150,
							 thumbnailUrl: null
							},
							{advisorId: 4,
				     		 advisorName: "Chunlian",
						     reviewRating: 5,
							 title: "Software Engineer, Qunar",
							 price: 150,
							 thumbnailUrl: null
							},
							{advisorId: 5,
				     		 advisorName: "Ning",
						     reviewRating: 5,
							 title: "Software Engineer, Perfect World",
							 price: 150,
							 thumbnailUrl: null
							}]
	};
	return result;
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
    console.log("Here is Ahoy Server");
});