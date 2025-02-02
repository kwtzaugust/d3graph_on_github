// document.addEventListener("DOMContentLoaded", function() {

//     // Auto-scaling setup
//     const svg = d3.select("body").append("svg")
//     .attr("preserveAspectRatio", "xMidYMid meet")
//     .attr("viewBox", [0, 0, window.innerWidth, window.innerHeight]);

//     // Load data and create graph
//     d3.json("scripts/data.json").then(data => {
//     // Force simulation setup
//     const simulation = d3.forceSimulation(data.nodes)
//         .force("charge", d3.forceManyBody().strength(-50))
//         .force("center", d3.forceCenter(window.innerWidth/2, window.innerHeight/2))
//         .force("link", d3.forceLink(data.links).id(d => d.id));

//     //Create links
//     const link = svg.append("g")
//         .selectAll("line")
//         .data(data.links)
//         .join("line")
//         .attr("class", "link")
//         .attr("stroke-width", 2);

//     // Create nodes
//     const node = svg.append("g")
//         .selectAll("circle")
//         .data(data.nodes)
//         .join("circle")
//         .attr("class", "node")
//         .attr("r", 8)
//         .attr("fill", "#69b3a2")
//         .call(drag(simulation));

//     // Add tick handler
//     simulation.on("tick", () => {
//         link
//             .attr("x1", d => d.source.x)
//             .attr("y1", d => d.source.y)
//             .attr("x2", d => d.target.x)
//             .attr("y2", d => d.target.y);
        
//         node
//             .attr("cx", d => d.x)
//             .attr("cy", d => d.y);
//     });

//     // Handle window resize
//     window.addEventListener("resize", () => {
//         svg.attr("viewBox", [0, 0, window.innerWidth, window.innerHeight]);
//         simulation.force("center", d3.forceCenter(window.innerWidth/2, window.innerHeight/2));
//         simulation.alpha(0.3).restart();
//     });
//     });

//     // Drag functions
//     function drag(simulation) {
//     return d3.drag()
//         .on("start", (event, d) => {
//             if (!event.active) simulation.alphaTarget(0.3).restart();
//             d.fx = d.x;
//             d.fy = d.y;
//         })
//         .on("drag", (event, d) => {
//             d.fx = event.x;
//             d.fy = event.y;
//         })
//         .on("end", (event, d) => {
//             if (!event.active) simulation.alphaTarget(0);
//             d.fx = null;
//             d.fy = null;
//         });
//     }
// });

// DS v2

// document.addEventListener("DOMContentLoaded", function() {

//     // Auto-scaling setup
//     const svg = d3.select("body").append("svg")
//         .attr("preserveAspectRatio", "xMidYMid meet")
//         .attr("viewBox", [0, 0, window.innerWidth, window.innerHeight]);

//     // Load data and create graph
//     d3.json("scripts/data.json").then(data => {
//         // Force simulation setup
//         const simulation = d3.forceSimulation(data.nodes)
//             .force("charge", d3.forceManyBody().strength(-50))
//             .force("center", d3.forceCenter(window.innerWidth / 2, window.innerHeight / 2))
//             .force("link", d3.forceLink(data.links).id(d => d.id));

//         // Create links
//         const link = svg.append("g")
//             .selectAll("line")
//             .data(data.links)
//             .join("line")
//             .attr("class", "link")
//             .attr("stroke-width", 2);

//         // Create link labels
//         const linkLabels = svg.append("g")
//             .selectAll("text")
//             .data(data.links)
//             .join("text")
//             .text(d => d.value) // Display the edge value
//             .attr("font-size", 10)
//             .attr("fill", "#333");

//         // Create nodes
//         const node = svg.append("g")
//             .selectAll("circle")
//             .data(data.nodes)
//             .join("circle")
//             .attr("class", "node")
//             .attr("r", 8)
//             .attr("fill", "#69b3a2")
//             .call(drag(simulation));

//         // Create node labels
//         const nodeLabels = svg.append("g")
//             .selectAll("text")
//             .data(data.nodes)
//             .join("text")
//             .text(d => d.id) // Display the node id (name)
//             .attr("font-size", 12)
//             .attr("dx", 10) // Offset the text to the right of the node
//             .attr("dy", ".35em") // Center the text vertically
//             .attr("fill", "#333");

//         // Add tick handler
//         simulation.on("tick", () => {
//             link
//                 .attr("x1", d => d.source.x)
//                 .attr("y1", d => d.source.y)
//                 .attr("x2", d => d.target.x)
//                 .attr("y2", d => d.target.y);

//             node
//                 .attr("cx", d => d.x)
//                 .attr("cy", d => d.y);

//             // Update link labels
//             linkLabels
//                 .attr("x", d => (d.source.x + d.target.x) / 2) // Position label in the middle of the link
//                 .attr("y", d => (d.source.y + d.target.y) / 2);

//             // Update node labels
//             nodeLabels
//                 .attr("x", d => d.x + 10) // Offset the text to the right of the node
//                 .attr("y", d => d.y);
//         });

//         // Handle window resize
//         window.addEventListener("resize", () => {
//             svg.attr("viewBox", [0, 0, window.innerWidth, window.innerHeight]);
//             simulation.force("center", d3.forceCenter(window.innerWidth / 2, window.innerHeight / 2));
//             simulation.alpha(0.3).restart();
//         });
//     });

//     // Drag functions
//     function drag(simulation) {
//         return d3.drag()
//             .on("start", (event, d) => {
//                 if (!event.active) simulation.alphaTarget(0.3).restart();
//                 d.fx = d.x;
//                 d.fy = d.y;
//             })
//             .on("drag", (event, d) => {
//                 d.fx = event.x;
//                 d.fy = event.y;
//             })
//             .on("end", (event, d) => {
//                 if (!event.active) simulation.alphaTarget(0);
//                 d.fx = null;
//                 d.fy = null;
//             });
//     }
// });

// Gem2 v3

document.addEventListener("DOMContentLoaded", function() {

    // Auto-scaling setup
    const svg = d3.select("body").append("svg")
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("viewBox", [0, 0, window.innerWidth, window.innerHeight]);

    // Load data and create graph
    d3.json("scripts/data.json").then(data => {
        // Force simulation setup
        const simulation = d3.forceSimulation(data.nodes)
            .force("charge", d3.forceManyBody().strength(-50))
            .force("center", d3.forceCenter(window.innerWidth / 2, window.innerHeight / 2))
            .force("link", d3.forceLink(data.links).id(d => d.id));

        // Create links
        const link = svg.append("g")
            .selectAll("line")
            .data(data.links)
            .join("line")
            .attr("class", "link")
            .attr("stroke-width", 2);

        // Create nodes
        const node = svg.append("g")
            .selectAll("circle")
            .data(data.nodes)
            .join("circle")
            .attr("class", "node")
            .attr("r", 8)
            .attr("fill", "#69b3a2")
            .call(drag(simulation));

        // Add tooltip for nodes
        const nodeTooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        node
            .on("mouseover", (event, d) => {
                nodeTooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                nodeTooltip.html(d.id)
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", (event, d) => {
                nodeTooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        // Add tooltip for edges
        const edgeTooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        link
            .on("mouseover", (event, d) => {
                edgeTooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                edgeTooltip.html(d.value)
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", (event, d) => {
                edgeTooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        // Add tick handler
        simulation.on("tick", () => {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);
        });

        // Handle window resize
        window.addEventListener("resize", () => {
            svg.attr("viewBox", [0, 0, window.innerWidth, window.innerHeight]);
            simulation.force("center", d3.forceCenter(window.innerWidth / 2, window.innerHeight / 2));
            simulation.alpha(0.3).restart();
        });
    });

    // Drag functions
    function drag(simulation) {
        return d3.drag()
            .on("start", (event, d) => {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                d.fx = d.x;
                d.fy = d.y;
            })
            .on("drag", (event, d) => {
                d.fx = event.x;
                d.fy = event.y;
            })
            .on("end", (event, d) => {
                if (!event.active) simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            });
    }
});