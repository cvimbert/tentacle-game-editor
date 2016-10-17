/**
 * Created by Christophe on 14/10/2016.
 */
define([], function() {

    return {
        x: {
            type: "number",
            defaultvalue: 0,
            required: true
        },
        y: {
            type: "number",
            defaultvalue: 0,
            required: true
        },
        scale: {
            type: "number",
            defaultvalue: 1,
            required: true
        },
        variable: {
            type: "reference",
            referencetype: "Variable",
            required: true
        }
    }
});