var data = [{'country': 'CHN', 'rel_diff': 6.0, 'wiot_deltas': 1.0, 'model_deltas': 1.0}, {'country': 'JPN', 'rel_diff': 28.0, 'wiot_deltas': 2.0, 'model_deltas': 2.0}, {'country': 'KOR', 'rel_diff': 11.0, 'wiot_deltas': 3.0, 'model_deltas': 5.0}, {'country': 'USA', 'rel_diff': 27.0, 'wiot_deltas': 4.0, 'model_deltas': 4.0}, {'country': 'DEU', 'rel_diff': 37.0, 'wiot_deltas': 5.0, 'model_deltas': 3.0}, {'country': 'AUS', 'rel_diff': 22.0, 'wiot_deltas': 6.0, 'model_deltas': 8.0}, {'country': 'TWN', 'rel_diff': 31.0, 'wiot_deltas': 7.0, 'model_deltas': 40.0}, {'country': 'FRA', 'rel_diff': 36.0, 'wiot_deltas': 8.0, 'model_deltas': 6.0}, {'country': 'RUS', 'rel_diff': 12.0, 'wiot_deltas': 9.0, 'model_deltas': 11.0}, {'country': 'ITA', 'rel_diff': 20.0, 'wiot_deltas': 10.0, 'model_deltas': 9.0}, {'country': 'BRA', 'rel_diff': 16.0, 'wiot_deltas': 11.0, 'model_deltas': 10.0}, {'country': 'GBR', 'rel_diff': 35.0, 'wiot_deltas': 12.0, 'model_deltas': 7.0}, {'country': 'CAN', 'rel_diff': 4.0, 'wiot_deltas': 13.0, 'model_deltas': 12.0}, {'country': 'IDN', 'rel_diff': 14.0, 'wiot_deltas': 14.0, 'model_deltas': 21.0}, {'country': 'IND', 'rel_diff': 5.0, 'wiot_deltas': 15.0, 'model_deltas': 19.0}, {'country': 'NLD', 'rel_diff': 1.0, 'wiot_deltas': 16.0, 'model_deltas': 17.0}, {'country': 'SWE', 'rel_diff': 15.0, 'wiot_deltas': 17.0, 'model_deltas': 20.0}, {'country': 'BEL', 'rel_diff': 24.0, 'wiot_deltas': 18.0, 'model_deltas': 13.0}, {'country': 'ESP', 'rel_diff': 26.0, 'wiot_deltas': 19.0, 'model_deltas': 14.0}, {'country': 'AUT', 'rel_diff': 25.0, 'wiot_deltas': 20.0, 'model_deltas': 15.0}, {'country': 'FIN', 'rel_diff': 17.0, 'wiot_deltas': 21.0, 'model_deltas': 25.0}, {'country': 'MEX', 'rel_diff': 30.0, 'wiot_deltas': 22.0, 'model_deltas': 16.0}, {'country': 'POL', 'rel_diff': 23.0, 'wiot_deltas': 23.0, 'model_deltas': 24.0}, {'country': 'HUN', 'rel_diff': 33.0, 'wiot_deltas': 24.0, 'model_deltas': 22.0}, {'country': 'CZE', 'rel_diff': 32.0, 'wiot_deltas': 25.0, 'model_deltas': 23.0}, {'country': 'TUR', 'rel_diff': 8.0, 'wiot_deltas': 26.0, 'model_deltas': 26.0}, {'country': 'IRL', 'rel_diff': 2.0, 'wiot_deltas': 27.0, 'model_deltas': 28.0}, {'country': 'DNK', 'rel_diff': 13.0, 'wiot_deltas': 28.0, 'model_deltas': 27.0}, {'country': 'LUX', 'rel_diff': 7.0, 'wiot_deltas': 29.0, 'model_deltas': 31.0}, {'country': 'SVK', 'rel_diff': 40.0, 'wiot_deltas': 30.0, 'model_deltas': 18.0}, {'country': 'ROU', 'rel_diff': 29.0, 'wiot_deltas': 31.0, 'model_deltas': 30.0}, {'country': 'PRT', 'rel_diff': 39.0, 'wiot_deltas': 32.0, 'model_deltas': 29.0}, {'country': 'GRC', 'rel_diff': 9.0, 'wiot_deltas': 33.0, 'model_deltas': 33.0}, {'country': 'BGR', 'rel_diff': 10.0, 'wiot_deltas': 34.0, 'model_deltas': 34.0}, {'country': 'SVN', 'rel_diff': 34.0, 'wiot_deltas': 35.0, 'model_deltas': 32.0}, {'country': 'EST', 'rel_diff': 18.0, 'wiot_deltas': 36.0, 'model_deltas': 35.0}, {'country': 'LVA', 'rel_diff': 3.0, 'wiot_deltas': 37.0, 'model_deltas': 37.0}, {'country': 'MLT', 'rel_diff': 19.0, 'wiot_deltas': 38.0, 'model_deltas': 39.0}, {'country': 'LTU', 'rel_diff': 21.0, 'wiot_deltas': 39.0, 'model_deltas': 36.0}, {'country': 'CYP', 'rel_diff': 38.0, 'wiot_deltas': 40.0, 'model_deltas': 38.0}];
var svg = d3.select('body').append('svg')
    .attr("width", 640)
    .attr("height", 1280);

var spacing = 20, loffset = 100, gap = 250, line_fraction = 4;

var lhs_data = data.map(function(x) {
    return {"x": loffset, "y": x.wiot_deltas * spacing, "label": x.country};    
});

var rhs_data = data.map(function(x) {
    return {"x": loffset + gap, "y": x.model_deltas * spacing, "label": x.country};
});

// Left hand edge
var lhs = svg.selectAll("text.lhs")
    .data(lhs_data)
    .enter()
    .append("text")
    .classed("lhs", true);

// Right hand edge
var rhs = svg.selectAll("text.rhs")
    .data(rhs_data)
    .enter()
    .append("text")
    .classed("rhs", true);

svg.selectAll("text")
    .attr("x", function(d) { return d.x; })
    .attr("y", function(d) { return d.y + 5; })
    .attr("font-family", "sans")
    .text(function(x) { return x.label; });

var lhs_offset = 40;

var line_data = lhs_data.map(function(x, i) { 
    return [{"x": lhs_data[i].x + lhs_offset, "y": lhs_data[i].y },
            {"x": lhs_data[i].x + lhs_offset + (gap / line_fraction), "y": lhs_data[i].y },
            {"x": rhs_data[i].x - (gap / line_fraction), "y": rhs_data[i].y },
            rhs_data[i]
        ]
});

var lineFunction = d3.svg.line()
    .x(function(d) { return d.x; })
    .y(function(d) { return d.y; })
    .interpolate("basis");

var colours = d3.scale.linear()
    .domain(d3.range(1, line_data.length, (line_data.length - 1) / 10))
    .range(colorbrewer.Spectral[10]);

var lines = svg.selectAll("path")
    .data(line_data)
    .enter().append("path")
    .attr("d", lineFunction)
    .attr("fill", "none")
    .attr("stroke-width", 2)
    .attr("stroke", function(x, i) { return colours(i); });
