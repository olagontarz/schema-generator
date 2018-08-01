/*jshint esversion: 8 */

const fs = require("fs");

function generateSchema(conf) {
    let configuration = require(conf);
    let common = configuration.common;
    let events = configuration.eventTypes;

    let outputSchema = {
        type: "object",
        properties: {
            eventType: {
                type: "string",
                enum: Object.keys(events)
            },
            security: {
                type: "object",
                properties: {},
                required: [],
                additionalProperties: false
            }
        },
        required: ["eventType", "security"],
        oneOf: [],
    };

    // loading security object properties
    let security = require(common);
    Object.assign(outputSchema.properties.security.properties, security);
    for (let property in security) {
        outputSchema.properties.security.required.push(property);
    }
    
    // loading business object properties from different eventType files defined in conf.json
    for (let type in events) {
        let newProperties = {
            properties: {
                eventType: {
                    "enum": [type]
                },
                business: {
                    type: "object",
                    properties: {},
                    required: [],
                    additionalProperties: false 
                },
            },
            required: ["eventType", "business"],
        };

        let json = require(events[type]);
        Object.assign(newProperties.properties.business.properties, json);
        for (let property in json) {
            newProperties.properties.business.required.push(property);
        }
        outputSchema.oneOf.push(newProperties);
    }
    return outputSchema;
}

function start() {
    let conf = "./config.json";
    let schema = generateSchema(conf);

    fs.writeFile("schema.json", JSON.stringify(schema), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Json schema has been successfully created in schema.json file :)");
    });
}


start();