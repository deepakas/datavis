// Let's draw something

var body = d3.select("body");
var graphics =body.append("svg");

var width = 900;
var height = 600;

graphics.attr("width",width) ;

graphics.attr("height",height);

graphics.append("circle")
    .attr("r",100 )
    .attr("cx", 200)
    .attr("cy",200)
    .style("fill", "yellow")
    .style("stroke", "red")
    .style("stroke-width", "3px")
    .style("opacity", "0.5")

graphics.append("circle")
    .attr("r",18 )
    .attr("cx", 170)
    .attr("cy",170)
    .style("fill", "black")
   // .style("stroke", "red")
  //  .style("stroke-width", "3px")
   // .style("opacity", "0.5")

graphics.append("circle")
    .attr("r",18)
    .attr("cx", 230)
    .attr("cy",170)
   // .style("fill", "black")
   // .style("stroke", "red")
    //.style("stroke-width", "3px")
    //.style("opacity", "0.5")

var arc = d3.svg.arc()

    .innerRadius(80)
    .outerRadius(100)
    .startAngle(2.3)
    .endAngle(3.2);
graphics.append("path")
    .attr("transform","translate(200,150) rotate(25)" )
    .attr("d", arc);

var arc2 = d3.svg.arc()

    .innerRadius(20)
    .outerRadius(28)
    .startAngle(1.7)
    .endAngle(3.7);
graphics.append("path")
    .attr("transform","translate(170,160) rotate(205)" )
    .attr("d", arc2);


var arc3 = d3.svg.arc()

    .innerRadius(20)
    .outerRadius(28)
    .startAngle(1.7)
    .endAngle(3.7);
graphics.append("path")
    .attr("transform","translate(230,160) rotate(205)" )
    .attr("d", arc3);


/*

graphics.append("text")
    .text("I am Drawing!")
    .attr("x", 190)
    .attr("y", 30)
    .attr("text-anchor","start")
    .attr("transform","rotate(45)");
*/
var arc = d3.svg.arc()
    .innerRadius(80)
    .outerRadius(100)
    .startAngle(2)
    .endAngle(3);
graphics.append("path")
    .attr("d", arc);


graphics.append("rect")
      .attr("x",40)
      .attr("y",20)
       .attr("height",30)
       .attr("width" ,40)

/*
graphics.append("line")
    .attr("x1",100)
    .attr("y1",200)
    .attr("x1",150)
    .attr("y1",250)
    .attr("stroke","blue")
    .attr("stroke-width" ,2)
*/

/*
graphics.append("text")
        .text("I am drawing")
        .attr("x" ,190)
        .attr("y" ,130)

    */