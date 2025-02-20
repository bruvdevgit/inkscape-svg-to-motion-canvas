import { Declaration } from "inline-style-parser";
import { StyleAttributes } from './StyleAttributeParser.ts';
import { StyleAttributesFromSchema } from './StyleAttributesSchema.ts';

export const testData: {
  source: string,
  schemaOutput: StyleAttributesFromSchema,
  final: Partial<StyleAttributes>,
  inlineParserDeclaration: Declaration[],
}[] =
  [
    {
      "source": "fill:#2ca02c;fill-opacity:1;stroke:#1300ff;stroke-width:1.23096;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "#2ca02c",
        "fill-opacity": "1",
        "stroke": "#1300ff",
        "stroke-width": "1.23096",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
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
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "#2ca02c",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 13
            }
          }
        },
        {
          "type": "declaration",
          "property": "fill-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 14
            },
            "end": {
              "line": 1,
              "column": 28
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#1300ff",
          "position": {
            "start": {
              "line": 1,
              "column": 29
            },
            "end": {
              "line": 1,
              "column": 43
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "1.23096",
          "position": {
            "start": {
              "line": 1,
              "column": 44
            },
            "end": {
              "line": 1,
              "column": 64
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 65
            },
            "end": {
              "line": 1,
              "column": 85
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 86
            },
            "end": {
              "line": 1,
              "column": 107
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 108
            },
            "end": {
              "line": 1,
              "column": 127
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 128
            },
            "end": {
              "line": 1,
              "column": 149
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 150
            },
            "end": {
              "line": 1,
              "column": 166
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 167
            },
            "end": {
              "line": 1,
              "column": 198
            }
          }
        }
      ]
    },
    {
      "source": "fill:#d40000;fill-opacity:1;stroke:#1300ff;stroke-width:1.73211;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "#d40000",
        "fill-opacity": "1",
        "stroke": "#1300ff",
        "stroke-width": "1.73211",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
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
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "#d40000",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 13
            }
          }
        },
        {
          "type": "declaration",
          "property": "fill-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 14
            },
            "end": {
              "line": 1,
              "column": 28
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#1300ff",
          "position": {
            "start": {
              "line": 1,
              "column": 29
            },
            "end": {
              "line": 1,
              "column": 43
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "1.73211",
          "position": {
            "start": {
              "line": 1,
              "column": 44
            },
            "end": {
              "line": 1,
              "column": 64
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 65
            },
            "end": {
              "line": 1,
              "column": 85
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 86
            },
            "end": {
              "line": 1,
              "column": 107
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 108
            },
            "end": {
              "line": 1,
              "column": 127
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 128
            },
            "end": {
              "line": 1,
              "column": 149
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 150
            },
            "end": {
              "line": 1,
              "column": 166
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 167
            },
            "end": {
              "line": 1,
              "column": 198
            }
          }
        }
      ]
    },
    {
      "source": "fill:#d40000;fill-opacity:1;stroke:#1300ff;stroke-width:1.73211;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "#d40000",
        "fill-opacity": "1",
        "stroke": "#1300ff",
        "stroke-width": "1.73211",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
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
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "#d40000",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 13
            }
          }
        },
        {
          "type": "declaration",
          "property": "fill-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 14
            },
            "end": {
              "line": 1,
              "column": 28
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#1300ff",
          "position": {
            "start": {
              "line": 1,
              "column": 29
            },
            "end": {
              "line": 1,
              "column": 43
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "1.73211",
          "position": {
            "start": {
              "line": 1,
              "column": 44
            },
            "end": {
              "line": 1,
              "column": 64
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 65
            },
            "end": {
              "line": 1,
              "column": 85
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 86
            },
            "end": {
              "line": 1,
              "column": 107
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 108
            },
            "end": {
              "line": 1,
              "column": 127
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 128
            },
            "end": {
              "line": 1,
              "column": 149
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 150
            },
            "end": {
              "line": 1,
              "column": 166
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 167
            },
            "end": {
              "line": 1,
              "column": 198
            }
          }
        }
      ]
    },
    {
      "source": "fill:#ffcc00;fill-opacity:1;stroke:#1300ff;stroke-width:0.942981;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "#ffcc00",
        "fill-opacity": "1",
        "stroke": "#1300ff",
        "stroke-width": "0.942981",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
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
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "#ffcc00",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 13
            }
          }
        },
        {
          "type": "declaration",
          "property": "fill-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 14
            },
            "end": {
              "line": 1,
              "column": 28
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#1300ff",
          "position": {
            "start": {
              "line": 1,
              "column": 29
            },
            "end": {
              "line": 1,
              "column": 43
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "0.942981",
          "position": {
            "start": {
              "line": 1,
              "column": 44
            },
            "end": {
              "line": 1,
              "column": 65
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 66
            },
            "end": {
              "line": 1,
              "column": 86
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 87
            },
            "end": {
              "line": 1,
              "column": 108
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 109
            },
            "end": {
              "line": 1,
              "column": 128
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 129
            },
            "end": {
              "line": 1,
              "column": 150
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 151
            },
            "end": {
              "line": 1,
              "column": 167
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 168
            },
            "end": {
              "line": 1,
              "column": 199
            }
          }
        }
      ]
    },
    {
      "source": "fill:#c87137;fill-opacity:1;stroke:#1300ff;stroke-width:0.942981;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "#c87137",
        "fill-opacity": "1",
        "stroke": "#1300ff",
        "stroke-width": "0.942981",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
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
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "#c87137",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 13
            }
          }
        },
        {
          "type": "declaration",
          "property": "fill-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 14
            },
            "end": {
              "line": 1,
              "column": 28
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#1300ff",
          "position": {
            "start": {
              "line": 1,
              "column": 29
            },
            "end": {
              "line": 1,
              "column": 43
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "0.942981",
          "position": {
            "start": {
              "line": 1,
              "column": 44
            },
            "end": {
              "line": 1,
              "column": 65
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 66
            },
            "end": {
              "line": 1,
              "column": 86
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 87
            },
            "end": {
              "line": 1,
              "column": 108
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 109
            },
            "end": {
              "line": 1,
              "column": 128
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 129
            },
            "end": {
              "line": 1,
              "column": 150
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 151
            },
            "end": {
              "line": 1,
              "column": 167
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 168
            },
            "end": {
              "line": 1,
              "column": 199
            }
          }
        }
      ]
    },
    {
      "source": "fill:#c83782;fill-opacity:1;stroke:#1300ff;stroke-width:1.18864;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "#c83782",
        "fill-opacity": "1",
        "stroke": "#1300ff",
        "stroke-width": "1.18864",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
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
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "#c83782",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 13
            }
          }
        },
        {
          "type": "declaration",
          "property": "fill-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 14
            },
            "end": {
              "line": 1,
              "column": 28
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#1300ff",
          "position": {
            "start": {
              "line": 1,
              "column": 29
            },
            "end": {
              "line": 1,
              "column": 43
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "1.18864",
          "position": {
            "start": {
              "line": 1,
              "column": 44
            },
            "end": {
              "line": 1,
              "column": 64
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 65
            },
            "end": {
              "line": 1,
              "column": 85
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 86
            },
            "end": {
              "line": 1,
              "column": 107
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 108
            },
            "end": {
              "line": 1,
              "column": 127
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 128
            },
            "end": {
              "line": 1,
              "column": 149
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 150
            },
            "end": {
              "line": 1,
              "column": 166
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 167
            },
            "end": {
              "line": 1,
              "column": 198
            }
          }
        }
      ]
    },
    {
      "source": "fill:#37bbc8;fill-opacity:1;stroke:#1300ff;stroke-width:1.328;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "#37bbc8",
        "fill-opacity": "1",
        "stroke": "#1300ff",
        "stroke-width": "1.328",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
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
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "#37bbc8",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 13
            }
          }
        },
        {
          "type": "declaration",
          "property": "fill-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 14
            },
            "end": {
              "line": 1,
              "column": 28
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#1300ff",
          "position": {
            "start": {
              "line": 1,
              "column": 29
            },
            "end": {
              "line": 1,
              "column": 43
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "1.328",
          "position": {
            "start": {
              "line": 1,
              "column": 44
            },
            "end": {
              "line": 1,
              "column": 62
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 63
            },
            "end": {
              "line": 1,
              "column": 83
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 84
            },
            "end": {
              "line": 1,
              "column": 105
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 106
            },
            "end": {
              "line": 1,
              "column": 125
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 126
            },
            "end": {
              "line": 1,
              "column": 147
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 148
            },
            "end": {
              "line": 1,
              "column": 164
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 165
            },
            "end": {
              "line": 1,
              "column": 196
            }
          }
        }
      ]
    },
    {
      "source": "fill:none;fill-opacity:1;stroke:#2ca02c;stroke-width:1.25184;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "none",
        "fill-opacity": "1",
        "stroke": "#2ca02c",
        "stroke-width": "1.25184",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
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
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 10
            }
          }
        },
        {
          "type": "declaration",
          "property": "fill-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 11
            },
            "end": {
              "line": 1,
              "column": 25
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#2ca02c",
          "position": {
            "start": {
              "line": 1,
              "column": 26
            },
            "end": {
              "line": 1,
              "column": 40
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "1.25184",
          "position": {
            "start": {
              "line": 1,
              "column": 41
            },
            "end": {
              "line": 1,
              "column": 61
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 62
            },
            "end": {
              "line": 1,
              "column": 82
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 83
            },
            "end": {
              "line": 1,
              "column": 104
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 105
            },
            "end": {
              "line": 1,
              "column": 124
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 125
            },
            "end": {
              "line": 1,
              "column": 146
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 147
            },
            "end": {
              "line": 1,
              "column": 163
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 164
            },
            "end": {
              "line": 1,
              "column": 195
            }
          }
        }
      ]
    },
    {
      "source": "fill:none;fill-opacity:1;stroke:#d40000;stroke-width:10.55608125;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "none",
        "fill-opacity": "1",
        "stroke": "#d40000",
        "stroke-width": "10.55608125",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
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
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 10
            }
          }
        },
        {
          "type": "declaration",
          "property": "fill-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 11
            },
            "end": {
              "line": 1,
              "column": 25
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#d40000",
          "position": {
            "start": {
              "line": 1,
              "column": 26
            },
            "end": {
              "line": 1,
              "column": 40
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "10.55608125",
          "position": {
            "start": {
              "line": 1,
              "column": 41
            },
            "end": {
              "line": 1,
              "column": 65
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 66
            },
            "end": {
              "line": 1,
              "column": 86
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 87
            },
            "end": {
              "line": 1,
              "column": 108
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 109
            },
            "end": {
              "line": 1,
              "column": 128
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 129
            },
            "end": {
              "line": 1,
              "column": 150
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 151
            },
            "end": {
              "line": 1,
              "column": 167
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 168
            },
            "end": {
              "line": 1,
              "column": 199
            }
          }
        }
      ]
    },
    {
      "source": "fill:none;fill-opacity:1;stroke:#ffcc00;stroke-width:13.1177;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "none",
        "fill-opacity": "1",
        "stroke": "#ffcc00",
        "stroke-width": "13.1177",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
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
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 10
            }
          }
        },
        {
          "type": "declaration",
          "property": "fill-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 11
            },
            "end": {
              "line": 1,
              "column": 25
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#ffcc00",
          "position": {
            "start": {
              "line": 1,
              "column": 26
            },
            "end": {
              "line": 1,
              "column": 40
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "13.1177",
          "position": {
            "start": {
              "line": 1,
              "column": 41
            },
            "end": {
              "line": 1,
              "column": 61
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 62
            },
            "end": {
              "line": 1,
              "column": 82
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 83
            },
            "end": {
              "line": 1,
              "column": 104
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 105
            },
            "end": {
              "line": 1,
              "column": 124
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 125
            },
            "end": {
              "line": 1,
              "column": 146
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 147
            },
            "end": {
              "line": 1,
              "column": 163
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 164
            },
            "end": {
              "line": 1,
              "column": 195
            }
          }
        }
      ]
    },
    {
      "source": "fill:none;fill-opacity:1;stroke:#c87137;stroke-width:19.5042;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "none",
        "fill-opacity": "1",
        "stroke": "#c87137",
        "stroke-width": "19.5042",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
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
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 10
            }
          }
        },
        {
          "type": "declaration",
          "property": "fill-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 11
            },
            "end": {
              "line": 1,
              "column": 25
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#c87137",
          "position": {
            "start": {
              "line": 1,
              "column": 26
            },
            "end": {
              "line": 1,
              "column": 40
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "19.5042",
          "position": {
            "start": {
              "line": 1,
              "column": 41
            },
            "end": {
              "line": 1,
              "column": 61
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 62
            },
            "end": {
              "line": 1,
              "column": 82
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 83
            },
            "end": {
              "line": 1,
              "column": 104
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 105
            },
            "end": {
              "line": 1,
              "column": 124
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 125
            },
            "end": {
              "line": 1,
              "column": 146
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 147
            },
            "end": {
              "line": 1,
              "column": 163
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 164
            },
            "end": {
              "line": 1,
              "column": 195
            }
          }
        }
      ]
    },
    {
      "source": "fill:none;fill-opacity:1;stroke:#c83782;stroke-width:4.14621;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "none",
        "fill-opacity": "1",
        "stroke": "#c83782",
        "stroke-width": "4.14621",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
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
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 10
            }
          }
        },
        {
          "type": "declaration",
          "property": "fill-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 11
            },
            "end": {
              "line": 1,
              "column": 25
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#c83782",
          "position": {
            "start": {
              "line": 1,
              "column": 26
            },
            "end": {
              "line": 1,
              "column": 40
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "4.14621",
          "position": {
            "start": {
              "line": 1,
              "column": 41
            },
            "end": {
              "line": 1,
              "column": 61
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 62
            },
            "end": {
              "line": 1,
              "column": 82
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 83
            },
            "end": {
              "line": 1,
              "column": 104
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 105
            },
            "end": {
              "line": 1,
              "column": 124
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 125
            },
            "end": {
              "line": 1,
              "column": 146
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 147
            },
            "end": {
              "line": 1,
              "column": 163
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 164
            },
            "end": {
              "line": 1,
              "column": 195
            }
          }
        }
      ]
    },
    {
      "source": "fill:none;fill-opacity:1;stroke:#37bbc8;stroke-width:22.449;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "none",
        "fill-opacity": "1",
        "stroke": "#37bbc8",
        "stroke-width": "22.449",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
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
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 10
            }
          }
        },
        {
          "type": "declaration",
          "property": "fill-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 11
            },
            "end": {
              "line": 1,
              "column": 25
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#37bbc8",
          "position": {
            "start": {
              "line": 1,
              "column": 26
            },
            "end": {
              "line": 1,
              "column": 40
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "22.449",
          "position": {
            "start": {
              "line": 1,
              "column": 41
            },
            "end": {
              "line": 1,
              "column": 60
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 61
            },
            "end": {
              "line": 1,
              "column": 81
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 82
            },
            "end": {
              "line": 1,
              "column": 103
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 104
            },
            "end": {
              "line": 1,
              "column": 123
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 124
            },
            "end": {
              "line": 1,
              "column": 145
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 146
            },
            "end": {
              "line": 1,
              "column": 162
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 163
            },
            "end": {
              "line": 1,
              "column": 194
            }
          }
        }
      ]
    },
    {
      "source": "fill:#2ca02c;fill-opacity:1;stroke:none;stroke-width:1.23096;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "#2ca02c",
        "fill-opacity": "1",
        "stroke": "none",
        "stroke-width": "1.23096",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
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
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "#2ca02c",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 13
            }
          }
        },
        {
          "type": "declaration",
          "property": "fill-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 14
            },
            "end": {
              "line": 1,
              "column": 28
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 29
            },
            "end": {
              "line": 1,
              "column": 40
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "1.23096",
          "position": {
            "start": {
              "line": 1,
              "column": 41
            },
            "end": {
              "line": 1,
              "column": 61
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 62
            },
            "end": {
              "line": 1,
              "column": 82
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 83
            },
            "end": {
              "line": 1,
              "column": 104
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 105
            },
            "end": {
              "line": 1,
              "column": 124
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 125
            },
            "end": {
              "line": 1,
              "column": 146
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 147
            },
            "end": {
              "line": 1,
              "column": 163
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 164
            },
            "end": {
              "line": 1,
              "column": 195
            }
          }
        }
      ]
    },
    {
      "source": "fill:#d40000;fill-opacity:1;stroke:none;stroke-width:1.73211;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "#d40000",
        "fill-opacity": "1",
        "stroke": "none",
        "stroke-width": "1.73211",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
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
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "#d40000",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 13
            }
          }
        },
        {
          "type": "declaration",
          "property": "fill-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 14
            },
            "end": {
              "line": 1,
              "column": 28
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 29
            },
            "end": {
              "line": 1,
              "column": 40
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "1.73211",
          "position": {
            "start": {
              "line": 1,
              "column": 41
            },
            "end": {
              "line": 1,
              "column": 61
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 62
            },
            "end": {
              "line": 1,
              "column": 82
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 83
            },
            "end": {
              "line": 1,
              "column": 104
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 105
            },
            "end": {
              "line": 1,
              "column": 124
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 125
            },
            "end": {
              "line": 1,
              "column": 146
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 147
            },
            "end": {
              "line": 1,
              "column": 163
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 164
            },
            "end": {
              "line": 1,
              "column": 195
            }
          }
        }
      ]
    },
    {
      "source": "fill:#ffcc00;fill-opacity:1;stroke:none;stroke-width:0.942981;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "#ffcc00",
        "fill-opacity": "1",
        "stroke": "none",
        "stroke-width": "0.942981",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
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
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "#ffcc00",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 13
            }
          }
        },
        {
          "type": "declaration",
          "property": "fill-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 14
            },
            "end": {
              "line": 1,
              "column": 28
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 29
            },
            "end": {
              "line": 1,
              "column": 40
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "0.942981",
          "position": {
            "start": {
              "line": 1,
              "column": 41
            },
            "end": {
              "line": 1,
              "column": 62
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 63
            },
            "end": {
              "line": 1,
              "column": 83
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 84
            },
            "end": {
              "line": 1,
              "column": 105
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 106
            },
            "end": {
              "line": 1,
              "column": 125
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 126
            },
            "end": {
              "line": 1,
              "column": 147
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 148
            },
            "end": {
              "line": 1,
              "column": 164
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 165
            },
            "end": {
              "line": 1,
              "column": 196
            }
          }
        }
      ]
    },
    {
      "source": "fill:#c87137;fill-opacity:1;stroke:none;stroke-width:0.942981;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "#c87137",
        "fill-opacity": "1",
        "stroke": "none",
        "stroke-width": "0.942981",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
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
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "#c87137",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 13
            }
          }
        },
        {
          "type": "declaration",
          "property": "fill-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 14
            },
            "end": {
              "line": 1,
              "column": 28
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 29
            },
            "end": {
              "line": 1,
              "column": 40
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "0.942981",
          "position": {
            "start": {
              "line": 1,
              "column": 41
            },
            "end": {
              "line": 1,
              "column": 62
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 63
            },
            "end": {
              "line": 1,
              "column": 83
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 84
            },
            "end": {
              "line": 1,
              "column": 105
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 106
            },
            "end": {
              "line": 1,
              "column": 125
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 126
            },
            "end": {
              "line": 1,
              "column": 147
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 148
            },
            "end": {
              "line": 1,
              "column": 164
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 165
            },
            "end": {
              "line": 1,
              "column": 196
            }
          }
        }
      ]
    },
    {
      "source": "fill:#c83782;fill-opacity:1;stroke:none;stroke-width:1.18864;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "#c83782",
        "fill-opacity": "1",
        "stroke": "none",
        "stroke-width": "1.18864",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
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
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "#c83782",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 13
            }
          }
        },
        {
          "type": "declaration",
          "property": "fill-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 14
            },
            "end": {
              "line": 1,
              "column": 28
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 29
            },
            "end": {
              "line": 1,
              "column": 40
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "1.18864",
          "position": {
            "start": {
              "line": 1,
              "column": 41
            },
            "end": {
              "line": 1,
              "column": 61
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 62
            },
            "end": {
              "line": 1,
              "column": 82
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 83
            },
            "end": {
              "line": 1,
              "column": 104
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 105
            },
            "end": {
              "line": 1,
              "column": 124
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 125
            },
            "end": {
              "line": 1,
              "column": 146
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 147
            },
            "end": {
              "line": 1,
              "column": 163
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 164
            },
            "end": {
              "line": 1,
              "column": 195
            }
          }
        }
      ]
    },
    {
      "source": "fill:#37bbc8;fill-opacity:1;stroke:none;stroke-width:1.328;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "#37bbc8",
        "fill-opacity": "1",
        "stroke": "none",
        "stroke-width": "1.328",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
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
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "#37bbc8",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 13
            }
          }
        },
        {
          "type": "declaration",
          "property": "fill-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 14
            },
            "end": {
              "line": 1,
              "column": 28
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 29
            },
            "end": {
              "line": 1,
              "column": 40
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "1.328",
          "position": {
            "start": {
              "line": 1,
              "column": 41
            },
            "end": {
              "line": 1,
              "column": 59
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 60
            },
            "end": {
              "line": 1,
              "column": 80
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 81
            },
            "end": {
              "line": 1,
              "column": 102
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 103
            },
            "end": {
              "line": 1,
              "column": 122
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 123
            },
            "end": {
              "line": 1,
              "column": 144
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 145
            },
            "end": {
              "line": 1,
              "column": 161
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 162
            },
            "end": {
              "line": 1,
              "column": 193
            }
          }
        }
      ]
    },
    {
      "source": "fill:#483737;stroke:#575757;stroke-width:0.727869;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "#483737",
        "stroke": "#575757",
        "stroke-width": "0.727869",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "paint-order": "fill markers stroke"
      },
      "final": {
        "fill": "#483737",
        "stroke": "#575757",
        "strokeWidth": 0.727869,
        "strokeLinecap": "round",
        "strokeLinejoin": "round",
        "strokeMiterlimit": 0,
        "strokeDasharray": "none",
        "paintOrder": "fill markers stroke"
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "#483737",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 13
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#575757",
          "position": {
            "start": {
              "line": 1,
              "column": 14
            },
            "end": {
              "line": 1,
              "column": 28
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "0.727869",
          "position": {
            "start": {
              "line": 1,
              "column": 29
            },
            "end": {
              "line": 1,
              "column": 50
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 51
            },
            "end": {
              "line": 1,
              "column": 71
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 72
            },
            "end": {
              "line": 1,
              "column": 93
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 94
            },
            "end": {
              "line": 1,
              "column": 113
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 114
            },
            "end": {
              "line": 1,
              "column": 135
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 136
            },
            "end": {
              "line": 1,
              "column": 167
            }
          }
        }
      ]
    },
    {
      "source": "fill:#000080;stroke:#575757;stroke-width:0.606162;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "#000080",
        "stroke": "#575757",
        "stroke-width": "0.606162",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "paint-order": "fill markers stroke"
      },
      "final": {
        "fill": "#000080",
        "stroke": "#575757",
        "strokeWidth": 0.606162,
        "strokeLinecap": "round",
        "strokeLinejoin": "round",
        "strokeMiterlimit": 0,
        "paintOrder": "fill markers stroke"
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "#000080",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 13
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#575757",
          "position": {
            "start": {
              "line": 1,
              "column": 14
            },
            "end": {
              "line": 1,
              "column": 28
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "0.606162",
          "position": {
            "start": {
              "line": 1,
              "column": 29
            },
            "end": {
              "line": 1,
              "column": 50
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 51
            },
            "end": {
              "line": 1,
              "column": 71
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 72
            },
            "end": {
              "line": 1,
              "column": 93
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 94
            },
            "end": {
              "line": 1,
              "column": 113
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 114
            },
            "end": {
              "line": 1,
              "column": 145
            }
          }
        }
      ]
    },
    {
      "source": "fill:#a02c2c;stroke:#575757;stroke-width:0.728;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "#a02c2c",
        "stroke": "#575757",
        "stroke-width": "0.728",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "paint-order": "fill markers stroke"
      },
      "final": {
        "fill": "#a02c2c",
        "stroke": "#575757",
        "strokeWidth": 0.728,
        "strokeLinecap": "round",
        "strokeLinejoin": "round",
        "strokeMiterlimit": 0,
        "strokeDasharray": "none",
        "paintOrder": "fill markers stroke"
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "#a02c2c",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 13
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#575757",
          "position": {
            "start": {
              "line": 1,
              "column": 14
            },
            "end": {
              "line": 1,
              "column": 28
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "0.728",
          "position": {
            "start": {
              "line": 1,
              "column": 29
            },
            "end": {
              "line": 1,
              "column": 47
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 48
            },
            "end": {
              "line": 1,
              "column": 68
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 69
            },
            "end": {
              "line": 1,
              "column": 90
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 91
            },
            "end": {
              "line": 1,
              "column": 110
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 111
            },
            "end": {
              "line": 1,
              "column": 132
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 133
            },
            "end": {
              "line": 1,
              "column": 164
            }
          }
        }
      ]
    },
    {
      "source": "fill:#008000;stroke:#575757;stroke-width:0.952229;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "#008000",
        "stroke": "#575757",
        "stroke-width": "0.952229",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "paint-order": "fill markers stroke"
      },
      "final": {
        "fill": "#008000",
        "stroke": "#575757",
        "strokeWidth": 0.952229,
        "strokeLinecap": "round",
        "strokeLinejoin": "round",
        "strokeMiterlimit": 0,
        "paintOrder": "fill markers stroke"
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "#008000",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 13
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#575757",
          "position": {
            "start": {
              "line": 1,
              "column": 14
            },
            "end": {
              "line": 1,
              "column": 28
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "0.952229",
          "position": {
            "start": {
              "line": 1,
              "column": 29
            },
            "end": {
              "line": 1,
              "column": 50
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 51
            },
            "end": {
              "line": 1,
              "column": 71
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 72
            },
            "end": {
              "line": 1,
              "column": 93
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 94
            },
            "end": {
              "line": 1,
              "column": 113
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 114
            },
            "end": {
              "line": 1,
              "column": 145
            }
          }
        }
      ]
    },
    {
      "source": "fill:none;stroke:#483737;stroke-width:2.06322;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "none",
        "stroke": "#483737",
        "stroke-width": "2.06322",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
        "fill": "none",
        "stroke": "#483737",
        "strokeWidth": 2.06322,
        "strokeLinecap": "round",
        "strokeLinejoin": "round",
        "strokeMiterlimit": 0,
        "strokeDasharray": "none",
        "strokeOpacity": 1,
        "paintOrder": "fill markers stroke"
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 10
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#483737",
          "position": {
            "start": {
              "line": 1,
              "column": 11
            },
            "end": {
              "line": 1,
              "column": 25
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "2.06322",
          "position": {
            "start": {
              "line": 1,
              "column": 26
            },
            "end": {
              "line": 1,
              "column": 46
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 47
            },
            "end": {
              "line": 1,
              "column": 67
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 68
            },
            "end": {
              "line": 1,
              "column": 89
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 90
            },
            "end": {
              "line": 1,
              "column": 109
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 110
            },
            "end": {
              "line": 1,
              "column": 131
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 132
            },
            "end": {
              "line": 1,
              "column": 148
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 149
            },
            "end": {
              "line": 1,
              "column": 180
            }
          }
        }
      ]
    },
    {
      "source": "fill:none;stroke:#000080;stroke-width:9.70968;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "none",
        "stroke": "#000080",
        "stroke-width": "9.70968",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
        "fill": "none",
        "stroke": "#000080",
        "strokeWidth": 9.70968,
        "strokeLinecap": "round",
        "strokeLinejoin": "round",
        "strokeMiterlimit": 0,
        "strokeDasharray": "none",
        "strokeOpacity": 1,
        "paintOrder": "fill markers stroke"
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 10
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#000080",
          "position": {
            "start": {
              "line": 1,
              "column": 11
            },
            "end": {
              "line": 1,
              "column": 25
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "9.70968",
          "position": {
            "start": {
              "line": 1,
              "column": 26
            },
            "end": {
              "line": 1,
              "column": 46
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 47
            },
            "end": {
              "line": 1,
              "column": 67
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 68
            },
            "end": {
              "line": 1,
              "column": 89
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 90
            },
            "end": {
              "line": 1,
              "column": 109
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 110
            },
            "end": {
              "line": 1,
              "column": 131
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 132
            },
            "end": {
              "line": 1,
              "column": 148
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 149
            },
            "end": {
              "line": 1,
              "column": 180
            }
          }
        }
      ]
    },
    {
      "source": "fill:none;stroke:#a02c2c;stroke-width:5.0001;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "none",
        "stroke": "#a02c2c",
        "stroke-width": "5.0001",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
        "fill": "none",
        "stroke": "#a02c2c",
        "strokeWidth": 5.0001,
        "strokeLinecap": "round",
        "strokeLinejoin": "round",
        "strokeMiterlimit": 0,
        "strokeDasharray": "none",
        "strokeOpacity": 1,
        "paintOrder": "fill markers stroke"
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 10
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#a02c2c",
          "position": {
            "start": {
              "line": 1,
              "column": 11
            },
            "end": {
              "line": 1,
              "column": 25
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "5.0001",
          "position": {
            "start": {
              "line": 1,
              "column": 26
            },
            "end": {
              "line": 1,
              "column": 45
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 46
            },
            "end": {
              "line": 1,
              "column": 66
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 67
            },
            "end": {
              "line": 1,
              "column": 88
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 89
            },
            "end": {
              "line": 1,
              "column": 108
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 109
            },
            "end": {
              "line": 1,
              "column": 130
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 131
            },
            "end": {
              "line": 1,
              "column": 147
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 148
            },
            "end": {
              "line": 1,
              "column": 179
            }
          }
        }
      ]
    },
    {
      "source": "fill:none;stroke:#008000;stroke-width:17.118;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "none",
        "stroke": "#008000",
        "stroke-width": "17.118",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
        "fill": "none",
        "stroke": "#008000",
        "strokeWidth": 17.118,
        "strokeLinecap": "round",
        "strokeLinejoin": "round",
        "strokeMiterlimit": 0,
        "strokeDasharray": "none",
        "strokeOpacity": 1,
        "paintOrder": "fill markers stroke"
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 10
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#008000",
          "position": {
            "start": {
              "line": 1,
              "column": 11
            },
            "end": {
              "line": 1,
              "column": 25
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "17.118",
          "position": {
            "start": {
              "line": 1,
              "column": 26
            },
            "end": {
              "line": 1,
              "column": 45
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 46
            },
            "end": {
              "line": 1,
              "column": 66
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 67
            },
            "end": {
              "line": 1,
              "column": 88
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 89
            },
            "end": {
              "line": 1,
              "column": 108
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 109
            },
            "end": {
              "line": 1,
              "column": 130
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 131
            },
            "end": {
              "line": 1,
              "column": 147
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 148
            },
            "end": {
              "line": 1,
              "column": 179
            }
          }
        }
      ]
    },
    {
      "source": "fill:#483737;stroke:#575757;stroke-width:0.441386;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "#483737",
        "stroke": "#575757",
        "stroke-width": "0.441386",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "paint-order": "fill markers stroke"
      },
      "final": {
        "fill": "#483737",
        "stroke": "#575757",
        "strokeWidth": 0.441386,
        "strokeLinecap": "round",
        "strokeLinejoin": "round",
        "strokeMiterlimit": 0,
        "strokeDasharray": "none",
        "paintOrder": "fill markers stroke"
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "#483737",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 13
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#575757",
          "position": {
            "start": {
              "line": 1,
              "column": 14
            },
            "end": {
              "line": 1,
              "column": 28
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "0.441386",
          "position": {
            "start": {
              "line": 1,
              "column": 29
            },
            "end": {
              "line": 1,
              "column": 50
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 51
            },
            "end": {
              "line": 1,
              "column": 71
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 72
            },
            "end": {
              "line": 1,
              "column": 93
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 94
            },
            "end": {
              "line": 1,
              "column": 113
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 114
            },
            "end": {
              "line": 1,
              "column": 135
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 136
            },
            "end": {
              "line": 1,
              "column": 167
            }
          }
        }
      ]
    },
    {
      "source": "fill:none;stroke:#a02c2c;stroke-width:3.52474;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "none",
        "stroke": "#a02c2c",
        "stroke-width": "3.52474",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
        "fill": "none",
        "stroke": "#a02c2c",
        "strokeWidth": 3.52474,
        "strokeLinecap": "round",
        "strokeLinejoin": "round",
        "strokeMiterlimit": 0,
        "strokeDasharray": "none",
        "strokeOpacity": 1,
        "paintOrder": "fill markers stroke"
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 10
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#a02c2c",
          "position": {
            "start": {
              "line": 1,
              "column": 11
            },
            "end": {
              "line": 1,
              "column": 25
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "3.52474",
          "position": {
            "start": {
              "line": 1,
              "column": 26
            },
            "end": {
              "line": 1,
              "column": 46
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 47
            },
            "end": {
              "line": 1,
              "column": 67
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 68
            },
            "end": {
              "line": 1,
              "column": 89
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 90
            },
            "end": {
              "line": 1,
              "column": 109
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 110
            },
            "end": {
              "line": 1,
              "column": 131
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 132
            },
            "end": {
              "line": 1,
              "column": 148
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 149
            },
            "end": {
              "line": 1,
              "column": 180
            }
          }
        }
      ]
    },
    {
      "source": "fill:#000080;stroke:#575757;stroke-width:0.467621;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "#000080",
        "stroke": "#575757",
        "stroke-width": "0.467621",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "paint-order": "fill markers stroke"
      },
      "final": {
        "fill": "#000080",
        "stroke": "#575757",
        "strokeWidth": 0.467621,
        "strokeLinecap": "round",
        "strokeLinejoin": "round",
        "strokeMiterlimit": 0,
        "paintOrder": "fill markers stroke"
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "#000080",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 13
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#575757",
          "position": {
            "start": {
              "line": 1,
              "column": 14
            },
            "end": {
              "line": 1,
              "column": 28
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "0.467621",
          "position": {
            "start": {
              "line": 1,
              "column": 29
            },
            "end": {
              "line": 1,
              "column": 50
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 51
            },
            "end": {
              "line": 1,
              "column": 71
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 72
            },
            "end": {
              "line": 1,
              "column": 93
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 94
            },
            "end": {
              "line": 1,
              "column": 113
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 114
            },
            "end": {
              "line": 1,
              "column": 145
            }
          }
        }
      ]
    },
    {
      "source": "fill:none;stroke:#008000;stroke-width:9.77944;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke",
      "schemaOutput": {
        "fill": "none",
        "stroke": "#008000",
        "stroke-width": "9.77944",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "0",
        "stroke-dasharray": "none",
        "stroke-opacity": "1",
        "paint-order": "fill markers stroke"
      },
      "final": {
        "fill": "none",
        "stroke": "#008000",
        "strokeWidth": 9.77944,
        "strokeLinecap": "round",
        "strokeLinejoin": "round",
        "strokeMiterlimit": 0,
        "strokeDasharray": "none",
        "strokeOpacity": 1,
        "paintOrder": "fill markers stroke"
      },
      "inlineParserDeclaration": [
        {
          "type": "declaration",
          "property": "fill",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 10
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke",
          "value": "#008000",
          "position": {
            "start": {
              "line": 1,
              "column": 11
            },
            "end": {
              "line": 1,
              "column": 25
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-width",
          "value": "9.77944",
          "position": {
            "start": {
              "line": 1,
              "column": 26
            },
            "end": {
              "line": 1,
              "column": 46
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linecap",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 47
            },
            "end": {
              "line": 1,
              "column": 67
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-linejoin",
          "value": "round",
          "position": {
            "start": {
              "line": 1,
              "column": 68
            },
            "end": {
              "line": 1,
              "column": 89
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-miterlimit",
          "value": "0",
          "position": {
            "start": {
              "line": 1,
              "column": 90
            },
            "end": {
              "line": 1,
              "column": 109
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-dasharray",
          "value": "none",
          "position": {
            "start": {
              "line": 1,
              "column": 110
            },
            "end": {
              "line": 1,
              "column": 131
            }
          }
        },
        {
          "type": "declaration",
          "property": "stroke-opacity",
          "value": "1",
          "position": {
            "start": {
              "line": 1,
              "column": 132
            },
            "end": {
              "line": 1,
              "column": 148
            }
          }
        },
        {
          "type": "declaration",
          "property": "paint-order",
          "value": "fill markers stroke",
          "position": {
            "start": {
              "line": 1,
              "column": 149
            },
            "end": {
              "line": 1,
              "column": 180
            }
          }
        }
      ]
    }
  ];
