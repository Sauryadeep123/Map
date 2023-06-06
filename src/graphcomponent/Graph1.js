import React, { component } from 'react'
import * as d3 from 'd3'
export function Graph1() {
    const temperatureData = [ 8, 5, 13, 9, 12 ]
    d3.select(this.refs.temperatures)
        .selectAll("h2")
        .data(temperatureData)
        .enter()
            .append("h2")
            .text("New Temperature")
 
    // {<div ref="temperatures"></div>}
}
export default Graph1;