/**
 * Function that check default object properties and match them to
 * undefined property on first Object
 *
 * @param  {Object}  obj    The object to match
 * @param  {Object}  def    The default object
 * @param  {Object}  output The output of the matched object
 * @return {Boolean}        The matched object
 */
export function thisOrThat(obj, def, output) {
    output = output || {};
    if (obj instanceof Object) {
        for (let key in def) {
            let value = (obj !== undefined && obj[key] !== undefined) ? obj[key] : undefined;
            if ((def[key] instanceof Object) && !(def[key] instanceof Function) && !(def[key] instanceof Array)) {
                output[key] = thisOrThat(value, def[key], output[key]);
            } else {
                output[key] = (value === undefined) ? def[key] : value;
            }
        }
        return output;
    }
    return def;
}
