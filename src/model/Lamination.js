/*
 * Mission Control
 * This is the documentation of all API endpoints provided by Mission Control.  ## Provided OAuth Scopes - `mission_control.commissionings.r` [`Commissioning`]: Read information of all commissionings - `mission_control.commissionings.w` [`Commissioning`]: Create or update commissioning related models - `mission_control.estimates.r` [`Estimate`]: Read information of all Estimates - `mission_control.estimates.w` [`Estimate`]: Create or update all kinds of Estimates - `mission_control.lists.r` [`List`]: Read information of all List objects - `mission_control.lists.r` [`List`]: Create or update List objects - `mission_control.orders.r` [`Order`]: Read information of all orders - `mission_control.orders.w` [`Order`]: Create or update new orders - `mission_control.jobs.r` [`Job`]: Read basic information of all jobs currently or formerly in production (`GET /jobs/_*`) - `mission_control.jobs.w` [`Job`]: Create or update new jobs (`POST /jobs/_*`, `PATCH /jobs/_*`) 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.36
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {FileReference} from './FileReference';

/**
 * The Lamination model module.
 * @module model/Lamination
 * @version 1.0.0
 */
export class Lamination {
  /**
   * Constructs a new <code>Lamination</code>.
   * @alias module:model/Lamination
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param fileReferences {Array.<module:model/FileReference>} 
   * @param kind {module:model/Lamination.KindEnum} The kind of the finishing. Lamination is the technique/process of manufacturing a material in multiple layers, so that the composite material achieves improved strength, stability, surface appearance or resistance to the environment.
   * @param method {module:model/Lamination.MethodEnum} The lamination method that should be used for this finishing. This property is optional, if nothing is selected a method will be chosen during production. If a method is given here, this will be considered a customer requirement. This property also suggests the category of a material given as a material requirement. For `foil` the category must be `lamination_foil`, for `varnish` the category must be `varnish` and for `uv` the cateogry must be `ink`. The material requirement is optional, if none is chosen something will be assigned during production.
   * @param texture {module:model/Lamination.TextureEnum} The surface texture of the material that should be used for the lamination. This property is optional, if nothing is selected a texture will be chosen during production. If a texture is given here, this will be considered a customer requirement.
   * @param color {module:model/Lamination.ColorEnum} The colour of the lamination material. This property is optional, if nothing is selected a color will be chosen during production. This will be most likely transparent, but this is not guaranteed. Since most laminations are supposed to present it is recommend that you set this attribute to `transparent` if you don't have any further information on it. If a colour is given here, this will be considered a customer requirement.
   */
  constructor(id, createdAt, updatedAt, fileReferences, kind, method, texture, color) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.fileReferences = fileReferences;
    this.kind = kind;
    this.method = method;
    this.texture = texture;
    this.color = color;
  }

  /**
   * Constructs a <code>Lamination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Lamination} obj Optional instance to populate.
   * @return {module:model/Lamination} The populated <code>Lamination</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Lamination();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('file_references'))
        obj.fileReferences = ApiClient.convertToType(data['file_references'], [FileReference]);
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('method'))
        obj.method = ApiClient.convertToType(data['method'], 'String');
      if (data.hasOwnProperty('texture'))
        obj.texture = ApiClient.convertToType(data['texture'], 'String');
      if (data.hasOwnProperty('color'))
        obj.color = ApiClient.convertToType(data['color'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Lamination.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Lamination.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Lamination.prototype.updatedAt = undefined;

/**
 * @member {Array.<module:model/FileReference>} fileReferences
 */
Lamination.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
Lamination.KindEnum = {
  /**
   * value: "lamination"
   * @const
   */
  lamination: "lamination"
};
/**
 * The kind of the finishing. Lamination is the technique/process of manufacturing a material in multiple layers, so that the composite material achieves improved strength, stability, surface appearance or resistance to the environment.
 * @member {module:model/Lamination.KindEnum} kind
 */
Lamination.prototype.kind = undefined;

/**
 * Allowed values for the <code>method</code> property.
 * @enum {String}
 * @readonly
 */
Lamination.MethodEnum = {
  /**
   * value: "foil"
   * @const
   */
  foil: "foil",

  /**
   * value: "uv"
   * @const
   */
  uv: "uv",

  /**
   * value: "varnish"
   * @const
   */
  varnish: "varnish"
};
/**
 * The lamination method that should be used for this finishing. This property is optional, if nothing is selected a method will be chosen during production. If a method is given here, this will be considered a customer requirement. This property also suggests the category of a material given as a material requirement. For `foil` the category must be `lamination_foil`, for `varnish` the category must be `varnish` and for `uv` the cateogry must be `ink`. The material requirement is optional, if none is chosen something will be assigned during production.
 * @member {module:model/Lamination.MethodEnum} method
 */
Lamination.prototype.method = undefined;

/**
 * Allowed values for the <code>texture</code> property.
 * @enum {String}
 * @readonly
 */
Lamination.TextureEnum = {
  /**
   * value: "antique"
   * @const
   */
  antique: "antique",

  /**
   * value: "calendared"
   * @const
   */
  calendared: "calendared",

  /**
   * value: "glossy"
   * @const
   */
  glossy: "glossy",

  /**
   * value: "linen"
   * @const
   */
  linen: "linen",

  /**
   * value: "matte"
   * @const
   */
  matte: "matte",

  /**
   * value: "smooth"
   * @const
   */
  smooth: "smooth",

  /**
   * value: "stipple"
   * @const
   */
  stipple: "stipple",

  /**
   * value: "uncalendared"
   * @const
   */
  uncalendared: "uncalendared",

  /**
   * value: "vellum"
   * @const
   */
  vellum: "vellum"
};
/**
 * The surface texture of the material that should be used for the lamination. This property is optional, if nothing is selected a texture will be chosen during production. If a texture is given here, this will be considered a customer requirement.
 * @member {module:model/Lamination.TextureEnum} texture
 */
Lamination.prototype.texture = undefined;

/**
 * Allowed values for the <code>color</code> property.
 * @enum {String}
 * @readonly
 */
Lamination.ColorEnum = {
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
   * value: "gold"
   * @const
   */
  gold: "gold",

  /**
   * value: "goldenrod"
   * @const
   */
  goldenrod: "goldenrod",

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
   * value: "lavender"
   * @const
   */
  lavender: "lavender",

  /**
   * value: "lavenderblush"
   * @const
   */
  lavenderblush: "lavenderblush",

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
   * value: "other"
   * @const
   */
  other: "other",

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
   * value: "transparent"
   * @const
   */
  transparent: "transparent",

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
  yellowgreen: "yellowgreen"
};
/**
 * The colour of the lamination material. This property is optional, if nothing is selected a color will be chosen during production. This will be most likely transparent, but this is not guaranteed. Since most laminations are supposed to present it is recommend that you set this attribute to `transparent` if you don't have any further information on it. If a colour is given here, this will be considered a customer requirement.
 * @member {module:model/Lamination.ColorEnum} color
 */
Lamination.prototype.color = undefined;

// Implement Finishing interface:
