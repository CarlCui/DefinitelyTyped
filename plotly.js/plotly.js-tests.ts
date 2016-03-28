/// <reference path="plotly.js.d.ts" />

let x = [1, 2, 3];
let y = [2, 3, 4];

let traceA: Plotly.Trace = {
    type: 'scatter',
    x: x,
    y: y
};

let layout: Plotly.Layout = {
    autosize: true
};

let config: Plotly.Config = {
    editable: false,
    displaylogo: false
};

let plotId = 'my-plot';

Plotly.newPlot('my-plot', [traceA], layout, config);
