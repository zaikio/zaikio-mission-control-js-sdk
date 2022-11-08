"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadBandCreate = void 0;
var _ApiClient = require("../ApiClient");
var _FileReferenceCreate = require("./FileReferenceCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The HeadBandCreate model module.
 * @module model/HeadBandCreate
 * @version 1.0.0
 */
var HeadBandCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HeadBandCreate</code>.
   * @alias module:model/HeadBandCreate
   * @class
   */
  function HeadBandCreate() {
    _classCallCheck(this, HeadBandCreate);
  }

  /**
   * Constructs a <code>HeadBandCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HeadBandCreate} obj Optional instance to populate.
   * @return {module:model/HeadBandCreate} The populated <code>HeadBandCreate</code> instance.
   */
  _createClass(HeadBandCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HeadBandCreate();
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReferenceCreate.FileReferenceCreate]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('color')) obj.color = _ApiClient.ApiClient.convertToType(data['color'], 'String');
        if (data.hasOwnProperty('length')) obj.length = _ApiClient.ApiClient.convertToType(data['length'], 'String');
        if (data.hasOwnProperty('width')) obj.width = _ApiClient.ApiClient.convertToType(data['width'], 'String');
        if (data.hasOwnProperty('dimensions_unit')) obj.dimensionsUnit = _ApiClient.ApiClient.convertToType(data['dimensions_unit'], 'String');
      }
      return obj;
    }
  }]);
  return HeadBandCreate;
}();
/**
 * @member {Array.<module:model/FileReferenceCreate>} fileReferences
 */
exports.HeadBandCreate = HeadBandCreate;
HeadBandCreate.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
HeadBandCreate.KindEnum = {
  /**
   * value: "head_band"
   * @const
   */
  headBand: "head_band"
};
/**
 * The kind of the finishing. A head bank is a part of a book, most often found with hardcover bindings, that consists of a small cord or strip of material affixed near the spine to provide structural reinforcement and sometimes decorative effect. Thus this finishing can only be applied to the `case` part of a `hard_cover_book`.
 * @member {module:model/HeadBandCreate.KindEnum} kind
 */
HeadBandCreate.prototype.kind = undefined;

/**
 * Allowed values for the <code>color</code> property.
 * @enum {String}
 * @readonly
 */
HeadBandCreate.ColorEnum = {
  /**
   * value: "aliceblue"
   * @const
   */
  aliceblue: "aliceblue",
  /**
   * value: "antiquewhite"
   * @const
   */
  antiquewhite: "antiquewhite",
  /**
   * value: "aqua"
   * @const
   */
  aqua: "aqua",
  /**
   * value: "aquamarine"
   * @const
   */
  aquamarine: "aquamarine",
  /**
   * value: "azure"
   * @const
   */
  azure: "azure",
  /**
   * value: "beige"
   * @const
   */
  beige: "beige",
  /**
   * value: "bisque"
   * @const
   */
  bisque: "bisque",
  /**
   * value: "black"
   * @const
   */
  black: "black",
  /**
   * value: "blanchedalmond"
   * @const
   */
  blanchedalmond: "blanchedalmond",
  /**
   * value: "blue"
   * @const
   */
  blue: "blue",
  /**
   * value: "blueviolet"
   * @const
   */
  blueviolet: "blueviolet",
  /**
   * value: "brown"
   * @const
   */
  brown: "brown",
  /**
   * value: "burlywood"
   * @const
   */
  burlywood: "burlywood",
  /**
   * value: "cadetblue"
   * @const
   */
  cadetblue: "cadetblue",
  /**
   * value: "chartreuse"
   * @const
   */
  chartreuse: "chartreuse",
  /**
   * value: "chocolate"
   * @const
   */
  chocolate: "chocolate",
  /**
   * value: "coral"
   * @const
   */
  coral: "coral",
  /**
   * value: "cornflowerblue"
   * @const
   */
  cornflowerblue: "cornflowerblue",
  /**
   * value: "cornsilk"
   * @const
   */
  cornsilk: "cornsilk",
  /**
   * value: "crimson"
   * @const
   */
  crimson: "crimson",
  /**
   * value: "cyan"
   * @const
   */
  cyan: "cyan",
  /**
   * value: "darkblue"
   * @const
   */
  darkblue: "darkblue",
  /**
   * value: "darkcyan"
   * @const
   */
  darkcyan: "darkcyan",
  /**
   * value: "darkgoldenrod"
   * @const
   */
  darkgoldenrod: "darkgoldenrod",
  /**
   * value: "darkgray"
   * @const
   */
  darkgray: "darkgray",
  /**
   * value: "darkgreen"
   * @const
   */
  darkgreen: "darkgreen",
  /**
   * value: "darkgrey"
   * @const
   */
  darkgrey: "darkgrey",
  /**
   * value: "darkkhaki"
   * @const
   */
  darkkhaki: "darkkhaki",
  /**
   * value: "darkmagenta"
   * @const
   */
  darkmagenta: "darkmagenta",
  /**
   * value: "darkolivegreen"
   * @const
   */
  darkolivegreen: "darkolivegreen",
  /**
   * value: "darkorange"
   * @const
   */
  darkorange: "darkorange",
  /**
   * value: "darkorchid"
   * @const
   */
  darkorchid: "darkorchid",
  /**
   * value: "darkred"
   * @const
   */
  darkred: "darkred",
  /**
   * value: "darksalmon"
   * @const
   */
  darksalmon: "darksalmon",
  /**
   * value: "darkseagreen"
   * @const
   */
  darkseagreen: "darkseagreen",
  /**
   * value: "darkslateblue"
   * @const
   */
  darkslateblue: "darkslateblue",
  /**
   * value: "darkslategray"
   * @const
   */
  darkslategray: "darkslategray",
  /**
   * value: "darkslategrey"
   * @const
   */
  darkslategrey: "darkslategrey",
  /**
   * value: "darkturquoise"
   * @const
   */
  darkturquoise: "darkturquoise",
  /**
   * value: "darkviolet"
   * @const
   */
  darkviolet: "darkviolet",
  /**
   * value: "deeppink"
   * @const
   */
  deeppink: "deeppink",
  /**
   * value: "deepskyblue"
   * @const
   */
  deepskyblue: "deepskyblue",
  /**
   * value: "dimgray"
   * @const
   */
  dimgray: "dimgray",
  /**
   * value: "dimgrey"
   * @const
   */
  dimgrey: "dimgrey",
  /**
   * value: "dodgerblue"
   * @const
   */
  dodgerblue: "dodgerblue",
  /**
   * value: "firebrick"
   * @const
   */
  firebrick: "firebrick",
  /**
   * value: "floralwhite"
   * @const
   */
  floralwhite: "floralwhite",
  /**
   * value: "forestgreen"
   * @const
   */
  forestgreen: "forestgreen",
  /**
   * value: "fuchsia"
   * @const
   */
  fuchsia: "fuchsia",
  /**
   * value: "gainsboro"
   * @const
   */
  gainsboro: "gainsboro",
  /**
   * value: "ghostwhite"
   * @const
   */
  ghostwhite: "ghostwhite",
  /**
   * value: "goldenrod"
   * @const
   */
  goldenrod: "goldenrod",
  /**
   * value: "gold"
   * @const
   */
  gold: "gold",
  /**
   * value: "gray"
   * @const
   */
  gray: "gray",
  /**
   * value: "green"
   * @const
   */
  green: "green",
  /**
   * value: "greenyellow"
   * @const
   */
  greenyellow: "greenyellow",
  /**
   * value: "grey"
   * @const
   */
  grey: "grey",
  /**
   * value: "honeydew"
   * @const
   */
  honeydew: "honeydew",
  /**
   * value: "hotpink"
   * @const
   */
  hotpink: "hotpink",
  /**
   * value: "indianred"
   * @const
   */
  indianred: "indianred",
  /**
   * value: "indigo"
   * @const
   */
  indigo: "indigo",
  /**
   * value: "ivory"
   * @const
   */
  ivory: "ivory",
  /**
   * value: "khaki"
   * @const
   */
  khaki: "khaki",
  /**
   * value: "lavenderblush"
   * @const
   */
  lavenderblush: "lavenderblush",
  /**
   * value: "lavender"
   * @const
   */
  lavender: "lavender",
  /**
   * value: "lawngreen"
   * @const
   */
  lawngreen: "lawngreen",
  /**
   * value: "lemonchiffon"
   * @const
   */
  lemonchiffon: "lemonchiffon",
  /**
   * value: "lightblue"
   * @const
   */
  lightblue: "lightblue",
  /**
   * value: "lightcoral"
   * @const
   */
  lightcoral: "lightcoral",
  /**
   * value: "lightcyan"
   * @const
   */
  lightcyan: "lightcyan",
  /**
   * value: "lightgoldenrodyellow"
   * @const
   */
  lightgoldenrodyellow: "lightgoldenrodyellow",
  /**
   * value: "lightgray"
   * @const
   */
  lightgray: "lightgray",
  /**
   * value: "lightgreen"
   * @const
   */
  lightgreen: "lightgreen",
  /**
   * value: "lightgrey"
   * @const
   */
  lightgrey: "lightgrey",
  /**
   * value: "lightpink"
   * @const
   */
  lightpink: "lightpink",
  /**
   * value: "lightsalmon"
   * @const
   */
  lightsalmon: "lightsalmon",
  /**
   * value: "lightseagreen"
   * @const
   */
  lightseagreen: "lightseagreen",
  /**
   * value: "lightskyblue"
   * @const
   */
  lightskyblue: "lightskyblue",
  /**
   * value: "lightslategray"
   * @const
   */
  lightslategray: "lightslategray",
  /**
   * value: "lightslategrey"
   * @const
   */
  lightslategrey: "lightslategrey",
  /**
   * value: "lightsteelblue"
   * @const
   */
  lightsteelblue: "lightsteelblue",
  /**
   * value: "lightyellow"
   * @const
   */
  lightyellow: "lightyellow",
  /**
   * value: "lime"
   * @const
   */
  lime: "lime",
  /**
   * value: "limegreen"
   * @const
   */
  limegreen: "limegreen",
  /**
   * value: "linen"
   * @const
   */
  linen: "linen",
  /**
   * value: "magenta"
   * @const
   */
  magenta: "magenta",
  /**
   * value: "maroon"
   * @const
   */
  maroon: "maroon",
  /**
   * value: "mediumaquamarine"
   * @const
   */
  mediumaquamarine: "mediumaquamarine",
  /**
   * value: "mediumblue"
   * @const
   */
  mediumblue: "mediumblue",
  /**
   * value: "mediumorchid"
   * @const
   */
  mediumorchid: "mediumorchid",
  /**
   * value: "mediumpurple"
   * @const
   */
  mediumpurple: "mediumpurple",
  /**
   * value: "mediumseagreen"
   * @const
   */
  mediumseagreen: "mediumseagreen",
  /**
   * value: "mediumslateblue"
   * @const
   */
  mediumslateblue: "mediumslateblue",
  /**
   * value: "mediumspringgreen"
   * @const
   */
  mediumspringgreen: "mediumspringgreen",
  /**
   * value: "mediumturquoise"
   * @const
   */
  mediumturquoise: "mediumturquoise",
  /**
   * value: "mediumvioletred"
   * @const
   */
  mediumvioletred: "mediumvioletred",
  /**
   * value: "midnightblue"
   * @const
   */
  midnightblue: "midnightblue",
  /**
   * value: "mintcream"
   * @const
   */
  mintcream: "mintcream",
  /**
   * value: "mistyrose"
   * @const
   */
  mistyrose: "mistyrose",
  /**
   * value: "moccasin"
   * @const
   */
  moccasin: "moccasin",
  /**
   * value: "navajowhite"
   * @const
   */
  navajowhite: "navajowhite",
  /**
   * value: "navy"
   * @const
   */
  navy: "navy",
  /**
   * value: "oldlace"
   * @const
   */
  oldlace: "oldlace",
  /**
   * value: "olive"
   * @const
   */
  olive: "olive",
  /**
   * value: "olivedrab"
   * @const
   */
  olivedrab: "olivedrab",
  /**
   * value: "orange"
   * @const
   */
  orange: "orange",
  /**
   * value: "orangered"
   * @const
   */
  orangered: "orangered",
  /**
   * value: "orchid"
   * @const
   */
  orchid: "orchid",
  /**
   * value: "palegoldenrod"
   * @const
   */
  palegoldenrod: "palegoldenrod",
  /**
   * value: "palegreen"
   * @const
   */
  palegreen: "palegreen",
  /**
   * value: "paleturquoise"
   * @const
   */
  paleturquoise: "paleturquoise",
  /**
   * value: "palevioletred"
   * @const
   */
  palevioletred: "palevioletred",
  /**
   * value: "papayawhip"
   * @const
   */
  papayawhip: "papayawhip",
  /**
   * value: "peachpuff"
   * @const
   */
  peachpuff: "peachpuff",
  /**
   * value: "peru"
   * @const
   */
  peru: "peru",
  /**
   * value: "pink"
   * @const
   */
  pink: "pink",
  /**
   * value: "plum"
   * @const
   */
  plum: "plum",
  /**
   * value: "powderblue"
   * @const
   */
  powderblue: "powderblue",
  /**
   * value: "purple"
   * @const
   */
  purple: "purple",
  /**
   * value: "rebeccapurple"
   * @const
   */
  rebeccapurple: "rebeccapurple",
  /**
   * value: "red"
   * @const
   */
  red: "red",
  /**
   * value: "rosybrown"
   * @const
   */
  rosybrown: "rosybrown",
  /**
   * value: "royalblue"
   * @const
   */
  royalblue: "royalblue",
  /**
   * value: "saddlebrown"
   * @const
   */
  saddlebrown: "saddlebrown",
  /**
   * value: "salmon"
   * @const
   */
  salmon: "salmon",
  /**
   * value: "sandybrown"
   * @const
   */
  sandybrown: "sandybrown",
  /**
   * value: "seagreen"
   * @const
   */
  seagreen: "seagreen",
  /**
   * value: "seashell"
   * @const
   */
  seashell: "seashell",
  /**
   * value: "sienna"
   * @const
   */
  sienna: "sienna",
  /**
   * value: "silver"
   * @const
   */
  silver: "silver",
  /**
   * value: "skyblue"
   * @const
   */
  skyblue: "skyblue",
  /**
   * value: "slateblue"
   * @const
   */
  slateblue: "slateblue",
  /**
   * value: "slategray"
   * @const
   */
  slategray: "slategray",
  /**
   * value: "slategrey"
   * @const
   */
  slategrey: "slategrey",
  /**
   * value: "snow"
   * @const
   */
  snow: "snow",
  /**
   * value: "springgreen"
   * @const
   */
  springgreen: "springgreen",
  /**
   * value: "steelblue"
   * @const
   */
  steelblue: "steelblue",
  /**
   * value: "tan"
   * @const
   */
  tan: "tan",
  /**
   * value: "teal"
   * @const
   */
  teal: "teal",
  /**
   * value: "thistle"
   * @const
   */
  thistle: "thistle",
  /**
   * value: "tomato"
   * @const
   */
  tomato: "tomato",
  /**
   * value: "turquoise"
   * @const
   */
  turquoise: "turquoise",
  /**
   * value: "violet"
   * @const
   */
  violet: "violet",
  /**
   * value: "wheat"
   * @const
   */
  wheat: "wheat",
  /**
   * value: "white"
   * @const
   */
  white: "white",
  /**
   * value: "whitesmoke"
   * @const
   */
  whitesmoke: "whitesmoke",
  /**
   * value: "yellow"
   * @const
   */
  yellow: "yellow",
  /**
   * value: "yellowgreen"
   * @const
   */
  yellowgreen: "yellowgreen",
  /**
   * value: "transparent"
   * @const
   */
  transparent: "transparent",
  /**
   * value: "other"
   * @const
   */
  other: "other"
};
/**
 * An optional description of the colour the head band should be in. This is considered a hint at the customers wishes. Since head bands don't just come in plain colours but in a variaty of gradients or patterns, the actual look will be decided by the selected material (see Material Requirements).
 * @member {module:model/HeadBandCreate.ColorEnum} color
 */
HeadBandCreate.prototype.color = undefined;

/**
 * The length of the head band form the top of the book to the bottom given in the unit selected in `dimensions_unit`.
 * @member {String} length
 */
HeadBandCreate.prototype.length = undefined;

/**
 * The width of the head band form left to right given in the unit selected in `dimensions_unit`.
 * @member {String} width
 */
HeadBandCreate.prototype.width = undefined;

/**
 * Allowed values for the <code>dimensionsUnit</code> property.
 * @enum {String}
 * @readonly
 */
HeadBandCreate.DimensionsUnitEnum = {
  /**
   * value: "cm"
   * @const
   */
  cm: "cm",
  /**
   * value: "foot"
   * @const
   */
  foot: "foot",
  /**
   * value: "inch"
   * @const
   */
  inch: "inch",
  /**
   * value: "m"
   * @const
   */
  m: "m",
  /**
   * value: "mm"
   * @const
   */
  mm: "mm",
  /**
   * value: "pica"
   * @const
   */
  pica: "pica",
  /**
   * value: "point"
   * @const
   */
  point: "point"
};
/**
 * The unit for the dimensions given in `length` and `width`. This property must be set if either `length` or `width` are given.
 * @member {module:model/HeadBandCreate.DimensionsUnitEnum} dimensionsUnit
 */
HeadBandCreate.prototype.dimensionsUnit = undefined;

// Implement FinishingCreate interface: