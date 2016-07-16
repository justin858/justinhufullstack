'use strict';

angular.module('apsApp').
   //camel cased directive name
   //in your HTML, this will be named as bars-chart
   directive('bubbleChart',function ($parse) {
     //explicitly creating a directive definition variable
     //this may look verbose but is good for clarification purposes
     //in real life you'd want to simply return the object {...}
     var directiveDefinitionObject = {
         //We restrict its use to an element
         //as usually  <bars-chart> is semantically
         //more understandable
         restrict: 'E',
         //this is important,
         //we don't want to overwrite our directive declaration
         //in the HTML mark-up
         replace: false,

         link: function (scope, element, attrs) {
           var diameter = 300,
               format = d3.format(",d"),
               color = d3.scale.category20c(),
               width = 600,
               height = 400;

            var aspect = width / height;

           var bubble = d3.layout.pack()
               .sort(null)
               .size([width, height])
               .padding(5);

           var svg = d3.select(element[0])
                .append("div")
                .classed("svg-container", true)
                .append("svg")
                //.attr("preserveAspectRatio", "xMinYMin meet")
               .attr("viewBox", "0 0 700 400")
               //class to make it responsive
               .classed("svg-content-responsive", true)
               .attr("class", "bubble")
              //  .on("resize", function() {
              //    var targetWidth = chart.node().getBoundingClientRect().width;
              //    chart.attr("width", targetWidth);
              //    chart.attr("height", targetWidth / aspect);
              //  });
               ;

           d3.json("chartdata/bubble.json", function(error, root) {
             if (error) throw error;

             var node = svg.selectAll(".node")
                 .data(bubble.nodes(classes(root))
                 .filter(function(d) { return !d.children; }))
               .enter().append("g")
                 .attr("class", "node")
                 .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

             node.append("title")
                 .text(function(d) { return d.className + ": " + format(d.value); });

             node.append("circle")
                 .attr("r", function(d) { return d.r; })
                //  .style("fill", function(d) { return color(d.packageName); })
                 ;

             node.append("text")
                 .attr("dy", ".3em")
                 .style("text-anchor", "middle")
                 .text(function(d) { return d.className.substring(0, d.r / 3); });
           });

           // Returns a flattened hierarchy containing all leaf nodes under the root.
           function classes(root) {
             var classes = [];

             function recurse(name, node) {
               if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
               else classes.push({packageName: name, className: node.name, value: node.size});
             }

             recurse(null, root);
             return {children: classes};
           }

           d3.select(self.frameElement).style("height", diameter + "px");
         }
      };
      return directiveDefinitionObject;
   });
