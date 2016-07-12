'use strict';


angular.module('apsApp')
  .directive('pieChart', function() {
      return {
        replace: true,
        restrict: 'E',
        template: '<div class="profile-pie"></div>',
        scope: {data: '=pieChartData'},
        link: function postLink(scope, element, attrs) {
          var data = [ {name: "one", value: 10},
                        {name: "two", value: 3},
                      {name: "three", value: 6}];

var margin = {top: 0, right: 20, bottom: 0, left: 0};
var	width = 300 - margin.left - margin.right;
var	height = width - margin.top - margin.bottom;

var chart = d3.select(element[0])
				.append('svg')
			    .attr("width", width + margin.left + margin.right)
			    .attr("height", height + margin.top + margin.bottom)
			   .append("g")
    			.attr("transform", "translate(" + ((width/2)+margin.left) + "," + ((height/2)+margin.top) + ")");


var radius = Math.min(width, height) / 2;

var color = d3.scale.ordinal()
	.range(["#c0a062", "#A08C5B","#CBB682"]);

var arc = d3.svg.arc()
    .outerRadius(radius)
    .innerRadius(radius - 20);

var pie = d3.layout.pie()
    .sort(null)
    // .startAngle(1*Math.PI)
    // .endAngle(2*Math.PI)
    .value(function(d) { return d.value; });


var g = chart.selectAll(".arc")
  .data(pie(data))
.enter().append("g")
  .attr("class", "arc");

g.append("path")
  .style("fill", function(d) { return color(d.data.name); })
  .transition().delay(function(d, i) { return i * 500; }).duration(2000)
  .attrTween('d', function(d) {
       var i = d3.interpolate(d.startAngle+0.1, d.endAngle);
       return function(t) {
           d.endAngle = i(t);
         return arc(d);
       }
  });
        }
      }
  });
