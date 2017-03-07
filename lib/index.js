"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.thisOrThat = thisOrThat;
/**
 * Function that check default object properties and match them to
 * undefined property on first Object
 *
 * @param  {Object}  obj    The object to match
 * @param  {Object}  def    The default object
 * @param  {Object}  output The output of the matched object
 * @return {Boolean}        The matched object
 */
function thisOrThat(obj, def, output) {
    output = output || {};
    if (obj instanceof Object) {
        for (var key in def) {
            var value = obj !== undefined && obj[key] !== undefined ? obj[key] : undefined;
            if (def[key] instanceof Object && !(def[key] instanceof Function) && !(def[key] instanceof Array)) {
                output[key] = thisOrThat(value, def[key], output[key]);
            } else {
                output[key] = value === undefined ? def[key] : value;
            }
        }
        return output;
    }
    return def;
}