cordova.define("scandit-cordova-datacapture-core.Serializeable", function(require, exports, module) { 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultSerializeable = exports.serializationDefault = exports.ignoreFromSerializationIfNull = exports.nameForSerialization = exports.ignoreFromSerialization = void 0;
// tslint:disable-next-line:ban-types
function ignoreFromSerialization(target, propertyName) {
    target.ignoredProperties = target.ignoredProperties || [];
    target.ignoredProperties.push(propertyName);
}
exports.ignoreFromSerialization = ignoreFromSerialization;
// tslint:disable-next-line:ban-types
function nameForSerialization(customName) {
    return (target, propertyName) => {
        target.customPropertyNames = target.customPropertyNames || {};
        target.customPropertyNames[propertyName] = customName;
    };
}
exports.nameForSerialization = nameForSerialization;
// tslint:disable-next-line:ban-types
function ignoreFromSerializationIfNull(target, propertyName) {
    target.ignoredIfNullProperties = target.ignoredIfNullProperties || [];
    target.ignoredIfNullProperties.push(propertyName);
}
exports.ignoreFromSerializationIfNull = ignoreFromSerializationIfNull;
// tslint:disable-next-line:ban-types
function serializationDefault(defaultValue) {
    return (target, propertyName) => {
        target.customPropertyDefaults = target.customPropertyDefaults || {};
        target.customPropertyDefaults[propertyName] = defaultValue;
    };
}
exports.serializationDefault = serializationDefault;
class DefaultSerializeable {
    toJSON() {
        const properties = Object.keys(this);
        // use @ignoreFromSerialization to ignore properties
        const ignoredProperties = this.ignoredProperties || [];
        // use @ignoreFromSerializationIfNull to ignore properties if they're null
        const ignoredIfNullProperties = this.ignoredIfNullProperties || [];
        // use @nameForSerialization('customName') to rename properties in the JSON output
        const customPropertyNames = this.customPropertyNames || {};
        // use @serializationDefault({}) to use a different value in the JSON output if they're null
        const customPropertyDefaults = this.customPropertyDefaults || {};
        return properties.reduce((json, property) => {
            if (ignoredProperties.includes(property)) {
                return json;
            }
            let value = this[property];
            if (value === undefined) {
                return json;
            }
            // Ignore if it's null and should be ignored.
            // This is basically responsible for not including optional properties in the JSON if they're null,
            // as that's not always deserialized to mean the same as not present.
            if (value === null && ignoredIfNullProperties.includes(property)) {
                return json;
            }
            if (value === null && customPropertyDefaults[property] !== undefined) {
                value = customPropertyDefaults[property];
            }
            // Serialize if serializeable
            if (value != null && value.toJSON) {
                value = value.toJSON();
            }
            // Serialize the array if the elements are serializeable
            if (Array.isArray(value)) {
                value = value.map(e => e.toJSON ? e.toJSON() : e);
            }
            const propertyName = customPropertyNames[property] || property;
            json[propertyName] = value;
            return json;
        }, {});
    }
}
exports.DefaultSerializeable = DefaultSerializeable;
});