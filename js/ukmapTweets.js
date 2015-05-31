var width = 900;
var height = 700;

var graphics = d3.select("body")
	.append("svg")
	.attr("width", width)
	.attr("height", height);

// Don't forget to change the data file name!
d3.json("data/uk.json", loadData);

function loadData(error, dataset) {
	if (error) {
		console.log(error);
	}
	else {
		console.log(dataset);
		drawData(dataset);
	}
};

function loadUserData(error, dataset) {
	if (error) {
		console.log(error);
	}
	else {
		console.log(dataset);
		drawUserData(dataset);
	}
};

var mapProjection = d3.geo.albers()
	.center([0, 54])
	.rotate([0,0])
	.scale(3000)

function drawData(dataset) {
	var subunits = topojson.feature(dataset, dataset.objects.subunits).features;
	//console.log(countries);


	var geoPath = d3.geo.path()
		.projection(mapProjection);
	/*
	 graphics.selectAll("path")
	 .data(countries)
	 .enter()
	 .append("path")
	 .attr("d",geoPath);

	 var color = d3.scale.ordinal()
	 .range(["#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"]);
	 */


	var color = d3.scale.ordinal()
		.domain(["ENG", "SCT", "WLS", "NIR"])
		.range(["#dcd", "#ddc", "#cdd", "#cdc"]);

	graphics.selectAll("path")
		.data(subunits)
		.enter()
		.append("path")
		.attr("d", geoPath)
		.style("fill", function (subunit) {
			return color(subunit.id);

		})
	function loadUserData(error, dataset) {
		if (error) {
			console.log(error);
		}
		else {
			drawUserData(dataset);
		}
	}
}

function drawUserData(dataset) {

	/*	var london =[0.1275,51.5072]
	 var coordinates = mapProjection(london)
	 console.log(coordinates)

	 graphics.append("circle")
	 .attr("cx",coordinates[0])
	 .attr("cy",coordinates[1])
	 .attr("r",2)

	 }
	 d3.json("data/usersGraph.json", loadUserData);

	 */

	var mapUser =function (user) {
		var coordinate1 = user.tweets[0].geo.coordinates[1];
		var coordinate2 = user.tweets[0].geo.coordinates[0];

		var coordinates = [coordinate1, coordinate2]
		return "translate(" + mapProjection(coordinates) + ")";
	}


	for (var i =0; i < dataset.nodes.length; i++) {
		var user =dataset.nodes[i];

		var lng = dataset.nodes[i].tweets[0].geo.coordinates[0];
		var lat = dataset.nodes[i].tweets[0].geo.coordinates[1];
		var coords = [lat,lng];
		dataset.nodes[i].geo =coords;

	}


	graphics.selectAll(".tweet")
		.data(dataset.nodes)
		.enter()
		.append("circle")
		.attr("class", "tweet")
		.attr("r", 2.5)
		.style("fill", "#800014")
		.attr("transform", mapUser)


	graphics.selectAll(".link")
		.data(dataset.links)
		.enter()
		.append("line")
		.attr("stroke", "#999")
		.attr("class" ,"link")
		.style("opacity", "0.1")
		.attr("x1", function(link) {
			var coordinates = dataset.nodes[link.source].geo;
			var projected = mapProjection(coordinates);
			return projected[0]
		})
		.attr("y1", function(link) {
			var coordinates = dataset.nodes[link.source].geo;
			var projected = mapProjection(coordinates);
			return projected[1]
		})
		.attr("x2", function(link) {
			var coordinates = dataset.nodes[link.target].geo;
			var projected = mapProjection(coordinates);
			return projected[0]
		})
		.attr("y2", function(link) {
			var coordinates = dataset.nodes[link.target].geo;
			var projected = mapProjection(coordinates);
			return projected[1]
		})

}
d3.json("data/usersGraph.json", loadUserData)
