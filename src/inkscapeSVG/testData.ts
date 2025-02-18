import Substitute from "@fluffy-spoon/substitute";
import { InitRectNode, RectNode } from "../motionCanvasNodeTree/node/RectNode";
import { _RectElement, RectElementFields } from "./element/rectElement/RectElement";
import { InkscapeSVG, ViewBox } from "./InkscapeSVG";

export const rectSVGString = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="1920"
   height="1080"
   viewBox="0 0 508 285.75"
   version="1.1"
   id="svg1"
   sodipodi:docname="rects_1920_by_1080.svg"
   inkscape:version="1.4 (e7c3feb, 2024-10-09)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview1"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="px"
     inkscape:zoom="0.45"
     inkscape:cx="445.55556"
     inkscape:cy="497.77778"
     inkscape:window-width="1362"
     inkscape:window-height="729"
     inkscape:window-x="0"
     inkscape:window-y="18"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs1" />
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     style="display:inline">
    <rect
       style="fill:#2ca02c;fill-opacity:1;stroke:#1300ff;stroke-width:1.23096;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
       id="rect1"
       width="82.803673"
       height="25.728548"
       x="9.0465326"
       y="10.700179"
       inkscape:label="green-fill-and-stroke-rect-x-long-sharp-corners" />
    <rect
       style="fill:#d40000;fill-opacity:1;stroke:#1300ff;stroke-width:1.73211;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
       id="rect2"
       width="81.960045"
       height="81.960045"
       x="8.8836927"
       y="78.336815"
       ry="0"
       inkscape:label="red-fill-and-stroke-rect-square-sharp-corners" />
    <rect
       style="fill:#ffcc00;fill-opacity:1;stroke:#1300ff;stroke-width:0.942981;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
       id="rect3"
       width="44.620049"
       height="44.620049"
       x="7.3198247"
       y="167.9606"
       ry="10.748698"
       inkscape:label="yellow-fill-and-stroke-rect-square-rounded-corners" />
    <rect
       style="fill:#c87137;fill-opacity:1;stroke:#1300ff;stroke-width:0.942981;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
       id="rect4"
       width="44.620049"
       height="44.620049"
       x="7.3198218"
       y="218.05432"
       ry="22.310024"
       inkscape:label="brown-fill-and-stroke-rect-square-circular" />
    <rect
       style="fill:#c83782;fill-opacity:1;stroke:#1300ff;stroke-width:1.18864;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
       id="rect5"
       width="84.983978"
       height="20.706318"
       x="6.9583092"
       y="46.336018"
       ry="10.353159"
       inkscape:label="purple-fill-and-stroke-rect-x-long-rounded-corners" />
    <rect
       style="fill:#37bbc8;fill-opacity:1;stroke:#1300ff;stroke-width:1.328;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
       id="rect6"
       width="33.072918"
       height="93.430992"
       x="56.762016"
       y="168.66684"
       ry="0"
       inkscape:label="blue-fill-and-stroke-rect-y-long-sharp-corners" />
    <rect
       style="fill:none;fill-opacity:1;stroke:#2ca02c;stroke-width:1.25184;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
       id="rect7"
       width="85.706055"
       height="25.70767"
       x="195.82663"
       y="10.639688"
       inkscape:label="green-stroke-only-rect-x-long-sharp-corners" />
    <rect
       style="fill:none;fill-opacity:1;stroke:#d40000;stroke-width:10.55608125;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
       id="rect8"
       width="56.121857"
       height="56.121857"
       x="207.88141"
       y="93.417191"
       ry="0"
       inkscape:label="red-stroke-only-rect-square-sharp-corners" />
    <rect
       style="fill:none;fill-opacity:1;stroke:#ffcc00;stroke-width:13.1177;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
       id="rect9"
       width="31.228392"
       height="31.228392"
       x="199.78725"
       y="176.33945"
       ry="7.5227299"
       inkscape:label="yellow-stroke-only-rect-square-rounded-corners" />
    <rect
       style="fill:none;fill-opacity:1;stroke:#c87137;stroke-width:19.5042;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
       id="rect10"
       width="26.646238"
       height="26.646238"
       x="202.51251"
       y="227.94759"
       ry="13.323119"
       rx="13.323119"
       inkscape:label="brown-stroke-only-rect-square-circular" />
    <rect
       style="fill:none;fill-opacity:1;stroke:#c83782;stroke-width:4.14621;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
       id="rect11"
       width="83.472107"
       height="21.465435"
       x="196.5302"
       y="45.627014"
       ry="10.732718"
       inkscape:label="purple-stroke-only-rect-x-long-rounded-corners" />
    <rect
       style="fill:none;fill-opacity:1;stroke:#37bbc8;stroke-width:22.449;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
       id="rect12"
       width="17.821806"
       height="75.46225"
       x="255.37695"
       y="181.09677"
       ry="0"
       inkscape:label="blue-stroke-only-rect-y-long-sharp-corners" />
    <rect
       style="fill:#2ca02c;fill-opacity:1;stroke:none;stroke-width:1.23096;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
       id="rect18"
       width="82.803673"
       height="25.728548"
       x="103.76017"
       y="26.485786"
       inkscape:label="green-fill-only-rect-x-long-sharp-corners" />
    <rect
       style="fill:#d40000;fill-opacity:1;stroke:none;stroke-width:1.73211;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
       id="rect19"
       width="81.960045"
       height="81.960045"
       x="103.59733"
       y="94.122421"
       ry="0"
       inkscape:label="red-fill-only-rect-square-sharp-corners" />
    <rect
       style="fill:#ffcc00;fill-opacity:1;stroke:none;stroke-width:0.942981;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
       id="rect20"
       width="44.620049"
       height="44.620049"
       x="102.03346"
       y="183.74622"
       ry="10.748698"
       inkscape:label="yellow-fill-only-rect-square-rounded-corners" />
    <rect
       style="fill:#c87137;fill-opacity:1;stroke:none;stroke-width:0.942981;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
       id="rect21"
       width="44.620049"
       height="44.620049"
       x="102.03346"
       y="233.83994"
       ry="22.310024"
       inkscape:label="brown-fill-only-rect-square-circular" />
    <rect
       style="fill:#c83782;fill-opacity:1;stroke:none;stroke-width:1.18864;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
       id="rect22"
       width="84.983978"
       height="20.706318"
       x="101.67195"
       y="62.121624"
       ry="10.353159"
       inkscape:label="purple-fill-only-rect-x-long-rounded-corners" />
    <rect
       style="fill:#37bbc8;fill-opacity:1;stroke:none;stroke-width:1.328;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"
       id="rect23"
       width="33.072918"
       height="93.430992"
       x="151.47566"
       y="184.45245"
       ry="0"
       inkscape:label="blue-fill-only-rect-y-long-sharp-corners" />
  </g>
</svg>
`;

export const rectSVGSvgson = {
  "name": "svg",
  "type": "element",
  "value": "",
  "parent": null,
  "attributes": {
    "width": "1920",
    "height": "1080",
    "viewBox": "0 0 508 285.75",
    "version": "1.1",
    "id": "svg1",
    "sodipodi:docname": "rects_1920_by_1080.svg",
    "inkscape:version": "1.4 (e7c3feb, 2024-10-09)",
    "xmlns:inkscape": "http://www.inkscape.org/namespaces/inkscape",
    "xmlns:sodipodi": "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",
    "xmlns": "http://www.w3.org/2000/svg",
    "xmlns:svg": "http://www.w3.org/2000/svg"
  },
  "children": [
    {
      "name": "sodipodi:namedview",
      "type": "element",
      "value": "",
      "parent": null,
      "attributes": {
        "id": "namedview1",
        "pagecolor": "#ffffff",
        "bordercolor": "#000000",
        "borderopacity": "0.25",
        "inkscape:showpageshadow": "2",
        "inkscape:pageopacity": "0.0",
        "inkscape:pagecheckerboard": "0",
        "inkscape:deskcolor": "#d1d1d1",
        "inkscape:document-units": "px",
        "inkscape:zoom": "0.45",
        "inkscape:cx": "445.55556",
        "inkscape:cy": "497.77778",
        "inkscape:window-width": "1362",
        "inkscape:window-height": "729",
        "inkscape:window-x": "0",
        "inkscape:window-y": "18",
        "inkscape:window-maximized": "1",
        "inkscape:current-layer": "layer1"
      },
      "children": []
    },
    {
      "name": "defs",
      "type": "element",
      "value": "",
      "parent": null,
      "attributes": {
        "id": "defs1"
      },
      "children": []
    },
    {
      "name": "g",
      "type": "element",
      "value": "",
      "parent": null,
      "attributes": {
        "inkscape:label": "Layer 1",
        "inkscape:groupmode": "layer",
        "id": "layer1",
        "style": "display:inline"
      },
      "children": [
        {
          "name": "rect",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "style": "fill:#2ca02c;fill-opacity:1;stroke:#1300ff;stroke-width:1.23096;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
            "id": "rect1",
            "width": "82.803673",
            "height": "25.728548",
            "x": "9.0465326",
            "y": "10.700179",
            "inkscape:label": "green-fill-and-stroke-rect-x-long-sharp-corners"
          },
          "children": []
        },
        {
          "name": "rect",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "style": "fill:#d40000;fill-opacity:1;stroke:#1300ff;stroke-width:1.73211;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
            "id": "rect2",
            "width": "81.960045",
            "height": "81.960045",
            "x": "8.8836927",
            "y": "78.336815",
            "ry": "0",
            "inkscape:label": "red-fill-and-stroke-rect-square-sharp-corners"
          },
          "children": []
        },
        {
          "name": "rect",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "style": "fill:#ffcc00;fill-opacity:1;stroke:#1300ff;stroke-width:0.942981;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
            "id": "rect3",
            "width": "44.620049",
            "height": "44.620049",
            "x": "7.3198247",
            "y": "167.9606",
            "ry": "10.748698",
            "inkscape:label": "yellow-fill-and-stroke-rect-square-rounded-corners"
          },
          "children": []
        },
        {
          "name": "rect",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "style": "fill:#c87137;fill-opacity:1;stroke:#1300ff;stroke-width:0.942981;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
            "id": "rect4",
            "width": "44.620049",
            "height": "44.620049",
            "x": "7.3198218",
            "y": "218.05432",
            "ry": "22.310024",
            "inkscape:label": "brown-fill-and-stroke-rect-square-circular"
          },
          "children": []
        },
        {
          "name": "rect",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "style": "fill:#c83782;fill-opacity:1;stroke:#1300ff;stroke-width:1.18864;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
            "id": "rect5",
            "width": "84.983978",
            "height": "20.706318",
            "x": "6.9583092",
            "y": "46.336018",
            "ry": "10.353159",
            "inkscape:label": "purple-fill-and-stroke-rect-x-long-rounded-corners"
          },
          "children": []
        },
        {
          "name": "rect",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "style": "fill:#37bbc8;fill-opacity:1;stroke:#1300ff;stroke-width:1.328;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
            "id": "rect6",
            "width": "33.072918",
            "height": "93.430992",
            "x": "56.762016",
            "y": "168.66684",
            "ry": "0",
            "inkscape:label": "blue-fill-and-stroke-rect-y-long-sharp-corners"
          },
          "children": []
        },
        {
          "name": "rect",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "style": "fill:none;fill-opacity:1;stroke:#2ca02c;stroke-width:1.25184;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
            "id": "rect7",
            "width": "85.706055",
            "height": "25.70767",
            "x": "195.82663",
            "y": "10.639688",
            "inkscape:label": "green-stroke-only-rect-x-long-sharp-corners"
          },
          "children": []
        },
        {
          "name": "rect",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "style": "fill:none;fill-opacity:1;stroke:#d40000;stroke-width:10.55608125;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
            "id": "rect8",
            "width": "56.121857",
            "height": "56.121857",
            "x": "207.88141",
            "y": "93.417191",
            "ry": "0",
            "inkscape:label": "red-stroke-only-rect-square-sharp-corners"
          },
          "children": []
        },
        {
          "name": "rect",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "style": "fill:none;fill-opacity:1;stroke:#ffcc00;stroke-width:13.1177;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
            "id": "rect9",
            "width": "31.228392",
            "height": "31.228392",
            "x": "199.78725",
            "y": "176.33945",
            "ry": "7.5227299",
            "inkscape:label": "yellow-stroke-only-rect-square-rounded-corners"
          },
          "children": []
        },
        {
          "name": "rect",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "style": "fill:none;fill-opacity:1;stroke:#c87137;stroke-width:19.5042;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
            "id": "rect10",
            "width": "26.646238",
            "height": "26.646238",
            "x": "202.51251",
            "y": "227.94759",
            "ry": "13.323119",
            "rx": "13.323119",
            "inkscape:label": "brown-stroke-only-rect-square-circular"
          },
          "children": []
        },
        {
          "name": "rect",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "style": "fill:none;fill-opacity:1;stroke:#c83782;stroke-width:4.14621;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
            "id": "rect11",
            "width": "83.472107",
            "height": "21.465435",
            "x": "196.5302",
            "y": "45.627014",
            "ry": "10.732718",
            "inkscape:label": "purple-stroke-only-rect-x-long-rounded-corners"
          },
          "children": []
        },
        {
          "name": "rect",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "style": "fill:none;fill-opacity:1;stroke:#37bbc8;stroke-width:22.449;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
            "id": "rect12",
            "width": "17.821806",
            "height": "75.46225",
            "x": "255.37695",
            "y": "181.09677",
            "ry": "0",
            "inkscape:label": "blue-stroke-only-rect-y-long-sharp-corners"
          },
          "children": []
        },
        {
          "name": "rect",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "style": "fill:#2ca02c;fill-opacity:1;stroke:none;stroke-width:1.23096;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
            "id": "rect18",
            "width": "82.803673",
            "height": "25.728548",
            "x": "103.76017",
            "y": "26.485786",
            "inkscape:label": "green-fill-only-rect-x-long-sharp-corners"
          },
          "children": []
        },
        {
          "name": "rect",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "style": "fill:#d40000;fill-opacity:1;stroke:none;stroke-width:1.73211;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
            "id": "rect19",
            "width": "81.960045",
            "height": "81.960045",
            "x": "103.59733",
            "y": "94.122421",
            "ry": "0",
            "inkscape:label": "red-fill-only-rect-square-sharp-corners"
          },
          "children": []
        },
        {
          "name": "rect",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "style": "fill:#ffcc00;fill-opacity:1;stroke:none;stroke-width:0.942981;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
            "id": "rect20",
            "width": "44.620049",
            "height": "44.620049",
            "x": "102.03346",
            "y": "183.74622",
            "ry": "10.748698",
            "inkscape:label": "yellow-fill-only-rect-square-rounded-corners"
          },
          "children": []
        },
        {
          "name": "rect",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "style": "fill:#c87137;fill-opacity:1;stroke:none;stroke-width:0.942981;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
            "id": "rect21",
            "width": "44.620049",
            "height": "44.620049",
            "x": "102.03346",
            "y": "233.83994",
            "ry": "22.310024",
            "inkscape:label": "brown-fill-only-rect-square-circular"
          },
          "children": []
        },
        {
          "name": "rect",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "style": "fill:#c83782;fill-opacity:1;stroke:none;stroke-width:1.18864;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
            "id": "rect22",
            "width": "84.983978",
            "height": "20.706318",
            "x": "101.67195",
            "y": "62.121624",
            "ry": "10.353159",
            "inkscape:label": "purple-fill-only-rect-x-long-rounded-corners"
          },
          "children": []
        },
        {
          "name": "rect",
          "type": "element",
          "value": "",
          "parent": null,
          "attributes": {
            "style": "fill:#37bbc8;fill-opacity:1;stroke:none;stroke-width:1.328;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
            "id": "rect23",
            "width": "33.072918",
            "height": "93.430992",
            "x": "151.47566",
            "y": "184.45245",
            "ry": "0",
            "inkscape:label": "blue-fill-only-rect-y-long-sharp-corners"
          },
          "children": []
        }
      ]
    }
  ]
};

export const producedMotionCanvasRectNodes = [
  Substitute.for<RectNode>(),
  Substitute.for<RectNode>(),
  Substitute.for<RectNode>(),
  Substitute.for<RectNode>(),
  Substitute.for<RectNode>(),
  Substitute.for<RectNode>(),
  Substitute.for<RectNode>(),
  Substitute.for<RectNode>(),
  Substitute.for<RectNode>(),
  Substitute.for<RectNode>(),
  Substitute.for<RectNode>(),
  Substitute.for<RectNode>(),
  Substitute.for<RectNode>(),
  Substitute.for<RectNode>(),
  Substitute.for<RectNode>(),
  Substitute.for<RectNode>(),
  Substitute.for<RectNode>(),
  Substitute.for<RectNode>(),
];

export const rectInkscapeSVG: InkscapeSVG = {
  width: 1920,
  height: 1080,
  viewBox: {
    minX: 0,
    minY: 0,
    width: 508,
    height: 285.75,
  } as ViewBox,
  elements: [
    new _RectElement({
      initMotionCanvasRectNodeFn: ((_) => producedMotionCanvasRectNodes[0]) as InitRectNode,
    }, {
      "id": "rect1",
      "width": 82.803673,
      "height": 25.728548,
      "x": 9.0465326,
      "y": 10.700179,
      label: "green-fill-and-stroke-rect-x-long-sharp-corners",
      "fill": "#2ca02c",
      "fillOpacity": 1,
      "stroke": "#1300ff",
      "strokeWidth": 1.23096,
      "strokeLinecap": "round",
      "strokeLinejoin": "round",
      "strokeMiterlimit": 0,
      "strokeDasharray": "none",
      "strokeOpacity": 1,
      "paintOrder": "fill markers stroke"
    } as RectElementFields),
    new _RectElement({
      initMotionCanvasRectNodeFn: ((_) => producedMotionCanvasRectNodes[1]) as InitRectNode,
    }, {
      "id": "rect2",
      label: "red-fill-and-stroke-rect-square-sharp-corners",
      "width": 81.960045,
      "height": 81.960045,
      "x": 8.8836927,
      "y": 78.336815,
      "ry": 0,
      "fill": "#d40000",
      "fillOpacity": 1,
      "stroke": "#1300ff",
      "strokeWidth": 1.73211,
      "strokeLinecap": "round",
      "strokeLinejoin": "round",
      "strokeMiterlimit": 0,
      "strokeDasharray": "none",
      "strokeOpacity": 1,
      "paintOrder": "fill markers stroke"
    } as RectElementFields),
    new _RectElement({
      initMotionCanvasRectNodeFn: ((_) => producedMotionCanvasRectNodes[2]) as InitRectNode,
    }, {
      "id": "rect3",
      "width": 44.620049,
      "height": 44.620049,
      "x": 7.3198247,
      "y": 167.9606,
      "ry": 10.748698,
      label: "yellow-fill-and-stroke-rect-square-rounded-corners",
      "fill": "#ffcc00",
      "fillOpacity": 1,
      "stroke": "#1300ff",
      "strokeWidth": 0.942981,
      "strokeLinecap": "round",
      "strokeLinejoin": "round",
      "strokeMiterlimit": 0,
      "strokeDasharray": "none",
      "strokeOpacity": 1,
      "paintOrder": "fill markers stroke"
    } as RectElementFields),
    new _RectElement({
      initMotionCanvasRectNodeFn: ((_) => producedMotionCanvasRectNodes[3]) as InitRectNode,
    }, {
      "id": "rect4",
      "width": 44.620049,
      "height": 44.620049,
      "x": 7.3198218,
      "y": 218.05432,
      "ry": 22.310024,
      label: "brown-fill-and-stroke-rect-square-circular",
      "fill": "#c87137",
      "fillOpacity": 1,
      "stroke": "#1300ff",
      "strokeWidth": 0.942981,
      "strokeLinecap": "round",
      "strokeLinejoin": "round",
      "strokeMiterlimit": 0,
      "strokeDasharray": "none",
      "strokeOpacity": 1,
      "paintOrder": "fill markers stroke"
    } as RectElementFields),
    new _RectElement({
      initMotionCanvasRectNodeFn: ((_) => producedMotionCanvasRectNodes[4]) as InitRectNode,
    }, {
      "id": "rect5",
      "width": 84.983978,
      "height": 20.706318,
      "x": 6.9583092,
      "y": 46.336018,
      "ry": 10.353159,
      label: "purple-fill-and-stroke-rect-x-long-rounded-corners",
      "fill": "#c83782",
      "fillOpacity": 1,
      "stroke": "#1300ff",
      "strokeWidth": 1.18864,
      "strokeLinecap": "round",
      "strokeLinejoin": "round",
      "strokeMiterlimit": 0,
      "strokeDasharray": "none",
      "strokeOpacity": 1,
      "paintOrder": "fill markers stroke"
    } as RectElementFields),
    new _RectElement({
      initMotionCanvasRectNodeFn: ((_) => producedMotionCanvasRectNodes[5]) as InitRectNode,
    }, {
      "id": "rect6",
      "width": 33.072918,
      "height": 93.430992,
      "x": 56.762016,
      "y": 168.66684,
      "ry": 0,
      label: "blue-fill-and-stroke-rect-y-long-sharp-corners",
      "fill": "#37bbc8",
      "fillOpacity": 1,
      "stroke": "#1300ff",
      "strokeWidth": 1.328,
      "strokeLinecap": "round",
      "strokeLinejoin": "round",
      "strokeMiterlimit": 0,
      "strokeDasharray": "none",
      "strokeOpacity": 1,
      "paintOrder": "fill markers stroke"
    } as RectElementFields),
    new _RectElement({
      initMotionCanvasRectNodeFn: ((_) => producedMotionCanvasRectNodes[6]) as InitRectNode,
    }, {
      "id": "rect7",
      "width": 85.706055,
      "height": 25.70767,
      "x": 195.82663,
      "y": 10.639688,
      label: "green-stroke-only-rect-x-long-sharp-corners",
      "fill": "none",
      "fillOpacity": 1,
      "stroke": "#2ca02c",
      "strokeWidth": 1.25184,
      "strokeLinecap": "round",
      "strokeLinejoin": "round",
      "strokeMiterlimit": 0,
      "strokeDasharray": "none",
      "strokeOpacity": 1,
      "paintOrder": "fill markers stroke"
    } as RectElementFields),
    new _RectElement({
      initMotionCanvasRectNodeFn: ((_) => producedMotionCanvasRectNodes[7]) as InitRectNode,
    }, {
      "id": "rect8",
      "width": 56.121857,
      "height": 56.121857,
      "x": 207.88141,
      "y": 93.417191,
      "ry": 0,
      label: "red-stroke-only-rect-square-sharp-corners",
      "fill": "none",
      "fillOpacity": 1,
      "stroke": "#d40000",
      "strokeWidth": 10.55608125,
      "strokeLinecap": "round",
      "strokeLinejoin": "round",
      "strokeMiterlimit": 0,
      "strokeDasharray": "none",
      "strokeOpacity": 1,
      "paintOrder": "fill markers stroke"
    } as RectElementFields),
    new _RectElement({
      initMotionCanvasRectNodeFn: ((_) => producedMotionCanvasRectNodes[8]) as InitRectNode,
    }, {
      "id": "rect9",
      "width": 31.228392,
      "height": 31.228392,
      "x": 199.78725,
      "y": 176.33945,
      "ry": 7.5227299,
      label: "yellow-stroke-only-rect-square-rounded-corners",
      "fill": "none",
      "fillOpacity": 1,
      "stroke": "#ffcc00",
      "strokeWidth": 13.1177,
      "strokeLinecap": "round",
      "strokeLinejoin": "round",
      "strokeMiterlimit": 0,
      "strokeDasharray": "none",
      "strokeOpacity": 1,
      "paintOrder": "fill markers stroke"
    } as RectElementFields),
    new _RectElement({
      initMotionCanvasRectNodeFn: ((_) => producedMotionCanvasRectNodes[9]) as InitRectNode,
    }, {
      "id": "rect10",
      "width": 26.646238,
      "height": 26.646238,
      "x": 202.51251,
      "y": 227.94759,
      "ry": 13.323119,
      "rx": 13.323119,
      label: "brown-stroke-only-rect-square-circular",
      "fill": "none",
      "fillOpacity": 1,
      "stroke": "#c87137",
      "strokeWidth": 19.5042,
      "strokeLinecap": "round",
      "strokeLinejoin": "round",
      "strokeMiterlimit": 0,
      "strokeDasharray": "none",
      "strokeOpacity": 1,
      "paintOrder": "fill markers stroke"
    } as RectElementFields),
    new _RectElement({
      initMotionCanvasRectNodeFn: ((_) => producedMotionCanvasRectNodes[10]) as InitRectNode,
    }, {
      "id": "rect11",
      "width": 83.472107,
      "height": 21.465435,
      "x": 196.5302,
      "y": 45.627014,
      "ry": 10.732718,
      label: "purple-stroke-only-rect-x-long-rounded-corners",
      "fill": "none",
      "fillOpacity": 1,
      "stroke": "#c83782",
      "strokeWidth": 4.14621,
      "strokeLinecap": "round",
      "strokeLinejoin": "round",
      "strokeMiterlimit": 0,
      "strokeDasharray": "none",
      "strokeOpacity": 1,
      "paintOrder": "fill markers stroke"
    } as RectElementFields),
    new _RectElement({
      initMotionCanvasRectNodeFn: ((_) => producedMotionCanvasRectNodes[11]) as InitRectNode,
    }, {
      "id": "rect12",
      "width": 17.821806,
      "height": 75.46225,
      "x": 255.37695,
      "y": 181.09677,
      "ry": 0,
      label: "blue-stroke-only-rect-y-long-sharp-corners",
      "fill": "none",
      "fillOpacity": 1,
      "stroke": "#37bbc8",
      "strokeWidth": 22.449,
      "strokeLinecap": "round",
      "strokeLinejoin": "round",
      "strokeMiterlimit": 0,
      "strokeDasharray": "none",
      "strokeOpacity": 1,
      "paintOrder": "fill markers stroke"
    } as RectElementFields),
    new _RectElement({
      initMotionCanvasRectNodeFn: ((_) => producedMotionCanvasRectNodes[12]) as InitRectNode,
    }, {
      "id": "rect18",
      "width": 82.803673,
      "height": 25.728548,
      "x": 103.76017,
      "y": 26.485786,
      label: "green-fill-only-rect-x-long-sharp-corners",
      "fill": "#2ca02c",
      "fillOpacity": 1,
      "stroke": "none",
      "strokeWidth": 1.23096,
      "strokeLinecap": "round",
      "strokeLinejoin": "round",
      "strokeMiterlimit": 0,
      "strokeDasharray": "none",
      "strokeOpacity": 1,
      "paintOrder": "fill markers stroke"
    } as RectElementFields),
    new _RectElement({
      initMotionCanvasRectNodeFn: ((_) => producedMotionCanvasRectNodes[13]) as InitRectNode,
    }, {
      "id": "rect19",
      "width": 81.960045,
      "height": 81.960045,
      "x": 103.59733,
      "y": 94.122421,
      "ry": 0,
      label: "red-fill-only-rect-square-sharp-corners",
      "fill": "#d40000",
      "fillOpacity": 1,
      "stroke": "none",
      "strokeWidth": 1.73211,
      "strokeLinecap": "round",
      "strokeLinejoin": "round",
      "strokeMiterlimit": 0,
      "strokeDasharray": "none",
      "strokeOpacity": 1,
      "paintOrder": "fill markers stroke"
    } as RectElementFields),
    new _RectElement({
      initMotionCanvasRectNodeFn: ((_) => producedMotionCanvasRectNodes[14]) as InitRectNode,
    }, {
      "id": "rect20",
      "width": 44.620049,
      "height": 44.620049,
      "x": 102.03346,
      "y": 183.74622,
      "ry": 10.748698,
      label: "yellow-fill-only-rect-square-rounded-corners",
      "fill": "#ffcc00",
      "fillOpacity": 1,
      "stroke": "none",
      "strokeWidth": 0.942981,
      "strokeLinecap": "round",
      "strokeLinejoin": "round",
      "strokeMiterlimit": 0,
      "strokeDasharray": "none",
      "strokeOpacity": 1,
      "paintOrder": "fill markers stroke"
    } as RectElementFields),
    new _RectElement({
      initMotionCanvasRectNodeFn: ((_) => producedMotionCanvasRectNodes[15]) as InitRectNode,
    }, {
      "id": "rect21",
      "width": 44.620049,
      "height": 44.620049,
      "x": 102.03346,
      "y": 233.83994,
      "ry": 22.310024,
      label: "brown-fill-only-rect-square-circular",
      "fill": "#c87137",
      "fillOpacity": 1,
      "stroke": "none",
      "strokeWidth": 0.942981,
      "strokeLinecap": "round",
      "strokeLinejoin": "round",
      "strokeMiterlimit": 0,
      "strokeDasharray": "none",
      "strokeOpacity": 1,
      "paintOrder": "fill markers stroke"
    } as RectElementFields),
    new _RectElement({
      initMotionCanvasRectNodeFn: ((_) => producedMotionCanvasRectNodes[16]) as InitRectNode,
    }, {
      "id": "rect22",
      "width": 84.983978,
      "height": 20.706318,
      "x": 101.67195,
      "y": 62.121624,
      "ry": 10.353159,
      label: "purple-fill-only-rect-x-long-rounded-corners",
      "fill": "#c83782",
      "fillOpacity": 1,
      "stroke": "none",
      "strokeWidth": 1.18864,
      "strokeLinecap": "round",
      "strokeLinejoin": "round",
      "strokeMiterlimit": 0,
      "strokeDasharray": "none",
      "strokeOpacity": 1,
      "paintOrder": "fill markers stroke"
    } as RectElementFields),
    new _RectElement({
      initMotionCanvasRectNodeFn: ((_) => producedMotionCanvasRectNodes[17]) as InitRectNode,
    }, {
      "id": "rect23",
      "width": 33.072918,
      "height": 93.430992,
      "x": 151.47566,
      "y": 184.45245,
      "ry": 0,
      label: "blue-fill-only-rect-y-long-sharp-corners",
      "fill": "#37bbc8",
      "fillOpacity": 1,
      "stroke": "none",
      "strokeWidth": 1.328,
      "strokeLinecap": "round",
      "strokeLinejoin": "round",
      "strokeMiterlimit": 0,
      "strokeDasharray": "none",
      "strokeOpacity": 1,
      "paintOrder": "fill markers stroke"
    } as RectElementFields),
  ],
};
