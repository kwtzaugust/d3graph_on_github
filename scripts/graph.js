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
        .force("center", d3.forceCenter(window.innerWidth/2, window.innerHeight/2))
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
        simulation.force("center", d3.forceCenter(window.innerWidth/2, window.innerHeight/2));
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
