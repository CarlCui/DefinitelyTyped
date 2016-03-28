declare namespace Plotly {
    export interface Trace {
        type: string;
        x?: any;
        y?: any;
        z?: any;
    }

    export interface Layout {
        orientation?: number;
        paper_bgcolor?: string;
        scene?: any;
        radialaxis?: any;
        titlefont?: any;
        hovermode?: any
        autosize?: any;
        title?: string;
        plot_bgcolor?: string;
        dragmode?: string;
        xaxis?: any;
        yaxis?: any;
        hidesources?: boolean;
        shapes?: any;
        annotations?: any;
        direction?: string;
        showlegend?: boolean;
        separators?: string;
        angularaxis?: any;
        geo?: any;
        legend?: any;
        width?: number;
        height?: number;
        margin?: any;
        font?: any;
    }

    export interface Config {
        staticPoint?: boolean;
        editable?: boolean;
        autosizable?: boolean;
        fillFrame?: boolean;
        grameMargins?: number;
        scrollZoom?: boolean;
        doubleClick?: any;
        showTips?: boolean;
        showLink?: boolean;
        sendData?: boolean;
        linkText?: string;
        showsources?: boolean;
        displaymodeBar?: any;
        modeBarButtonsToRemove?: Array<any>;
        modeBarButtonsToAdd?: Array<any>;
        modeBarButtons?: boolean;
        displaylogo?: boolean;
        plotGlPixelRatio?: number;
        setBackground?: (gd: string, bgColor: string) => string;
    }

    export function plot(gd: string, data: Array<Trace>, layout: Layout, config: Config): void;
    export function redraw(gd: string);
    export function newPlot(gd: string, data: Array<Trace>, layout: Layout, config: Config): void;
    export function extendTraces(gd: string, update, indices: number | Array<number>, maxPoints);
    export function prependTraces(gd: string, update, indices: number | Array<number>, maxPoints);
    export function addTraces(gd: string, traces: Trace | Array<Trace>, newIndices: number | Array<number>);
    export function deleteTraces(gd: string, indices: number | Array<number>);
    export function moveTraces(gd: string, currentIndices: number | Array<number>, newIndices?: number | Array<number>);
    export function restyle(gd: string, astr, val, traces);
    export function relayout(gd: string, astr, val);
    export function purge(gd: string);
}

declare module 'Plotly' {
    export = Plotly;
}
