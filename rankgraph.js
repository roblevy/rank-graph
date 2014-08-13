var RANKGRAPH = d3.json("rankgraph_data.json", function(error, json) {
    var data = json.data;
    // Parameters for the visualisation
    var spacing = 20, 
        loffset = 100, 
        gap = 250, 
        line_fraction = 4,
        lhs_offset = 40;

    // FUNCTIONS
    // ===========================================================================
    // Functions to convert ranks to x, y locations
    // --------------------------------------------
    var lhs_data = data.map(function(x) {
        return {"x": loffset, "y": x.rank1 * spacing, "label": x.label};    
    });

    var rhs_data = data.map(function(x) {
        return {"x": loffset + gap, "y": x.rank2 * spacing, "label": x.label};
    });
    // --------------------------------------------
    // Function to create four control points for the smooth
    // curve from a set of x, y locations
    var line_data = lhs_data.map(function(x, i) { 
        return [// Start point
                {"x": lhs_data[i].x + lhs_offset,
                "y": lhs_data[i].y },
                // 1st mid-point handle
                {"x": lhs_data[i].x + lhs_offset + (gap / line_fraction),
                "y": lhs_data[i].y },
                // 2nd mid-point handle
                {"x": rhs_data[i].x - (gap / line_fraction),
                "y": rhs_data[i].y },
                // End point
                rhs_data[i]
            ]
    });

    // Function to create a smooth curve from control points
    var lineFunction = d3.svg.line()
        .x(function(d) { return d.x; })
        .y(function(d) { return d.y; })
        .interpolate("basis");

    // Function to create a set of spectral colours with enough elements
    // to fit the data
    var colours = d3.scale.linear()
        .domain(d3.range(1, line_data.length, (line_data.length - 1) / 10))
        .range(colorbrewer.Spectral[10]);
    // ===========================================================================

    // VISUALISATION
    // ===========================================================================
    // Create an SVG element on the page
    var svg = d3.select('body').append('svg')
        .attr("width", 640)
        .attr("height", 1280);

    // Create labels (LHS)
    var lhs = svg.selectAll("text.lhs")
        .data(lhs_data)
        .enter()
        .append("text")
        .classed("lhs", true);

    // Create labels (RHS)
    var rhs = svg.selectAll("text.rhs")
        .data(rhs_data)
        .enter()
        .append("text")
        .classed("rhs", true);

    // Format labels
    svg.selectAll("text")
        .attr("x", function(d) { return d.x; })
        .attr("y", function(d) { return d.y + 5; })
        .attr("font-family", "sans")
        .text(function(d) { return d.label; });

    // Draw the lines
    var lines = svg.selectAll("path")
        .data(line_data)
        .enter().append("path")
        .attr("d", lineFunction)
        .attr("fill", "none")
        .attr("stroke-width", 2)
        .attr("stroke", function(x, i) { return colours(i); });

});
