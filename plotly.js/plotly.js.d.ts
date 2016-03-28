declare namespace Plotly {
    export interface Projection {
        rotation?: {lat: number, lon: number, roll: number};
        scale?: number;
        type?: string;
        parallels?: Array<
    }
    export interface Geo {
        domain?: {x: Array<number>, y: Array<number>};
        projection?: Projection;
    }

    export interface Camera {
        eye?: {
            x: number,
            y: number,
            z: number
        };
        up?: {
            x: number,
            y: number,
            z: number
        };
        center?: {
            x: number,
            y: number,
            z: number
        };
    }

    export interface Font {
        color?: string;
        family?: string;
        size?: number;
    }

    export interface AxisOptions {
        domain?: Array<number>;
        showticklabels?: boolean;
        orientation?: number;
        ticklen?: number;
        visible?: boolean;
        range?: Array<number>;
        ticksuffix?: string;
        tickcolor?: string;
        endpadding?: number;
        showline?: boolean;
        tickorientation?: string;
    }

    export interface Axis {
        showexponent?: string;
        showticklabels?: boolean;
        ticksuffix?: string;
        showticksuffix?: string;
        gridwidth?: number;
        titlefont?: Font;
        linecolor?: string;
        mirror?: boolean | string;
        tickvalssrc?: string;
        nticks?: number;
        linewidth?: number;
        autorange?: boolean | string;
        ticktextsrc?: string;
        showspikes?: boolean;
        tickpredix?: string;
        tickformat?: string;
        tickmode?: string;
        title?: string;
        spikecolor?: string;
        ticks?: string;
        spikesides?: boolean;
        spikethickness?: number;
        rangemode?: string;
        showtickprefix?: string;
        zeroline?: boolean;
        gridcolor?: string;
        type?: string;
        zerolinewidth?: number;
        ticklen?: number;
        hoverformat?: number;
        backgroundcolor?: string;
        fixedrange?: boolean;
        showline?: boolean;
        ticktext?: Array<string>;
        showgrid?: boolean;
        tickvals?: Array<number>;
        tickfont?: Font;
        tickwidth?: number;
        tick0?: number;
        tickangle?: number;
        showbackground?: boolean;
        dtick?: number | string;
        showaxeslabels?: boolean;
        zerolinecolor?: string;
        range?: Array<number>;
        tickcolor?: string;
        exponentformat?: string;
    }

    export interface Scene {
        domain?: {x: Array<number>, y: Array<number>};
        dragmode?: string;
        xaxis?: Axis;
        yaxis?: Axis;
        zaxis?: Axis;
        aspectmode?: string;
        bgcolor?: string;
        camera?: Camera;
        aspectratio?: {
            x: number,
            y: number,
            z: number
        };
        hovermode?: string | boolean;
    }

    export interface Trace {
        type: string;
        x?: Array<number>;
        y?: Array<number>;
        z?: Array<number>;
    }

    export interface Layout {
        orientation?: number;
        paper_bgcolor?: string;
        scene?: Scene;
        radialaxis?: AxisOptions;
        titlefont?: Font;
        hovermode?: string | boolean;
        autosize?: boolean | string;
        title?: string;
        plot_bgcolor?: string;
        dragmode?: string;
        xaxis?: Axis;
        yaxis?: Axis;
        hidesources?: boolean;
        shapes?: any;
        annotations?: {
            bordercolor?: string,
            yanchor?: string,
            text: string,
            arrowsize?: number,
            textangle?: number,
            borderwidth?: number,
            ay?: number,
            ax?: number,
            font?: Font,
            arrowcolor?: string,
            xref?: string,
            arrowhead?: number,
            bgcolor?: string,
            borderpad?: number,
            showarrow?: boolean,
            opacity?: number,
            xanchor?: string,
            arrowwidth?: number,
            yref?: string,
            align?: string,
            y?: number,
            x?: number
        };
        direction?: string;
        showlegend?: boolean;
        separators?: string;
        angularaxis?: AxisOptions;
        geo?: any;
        legend?: any;
        width?: number;
        height?: number;
        margin?: any;
        font?: Font;
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
