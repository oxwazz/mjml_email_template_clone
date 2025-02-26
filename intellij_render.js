// import fs module from node.js
const fs = require('fs');

// Read string from stdin
const stdin = fs.readFileSync(0, 'utf-8');

// Parse input
const {directory, content} = JSON.parse(stdin)

/**
 * Helper to create error message
 * @param line Line number, can be omitted
 * @param message Message for user, can be omitted
 * @param tagName Tag name, can be omitted
 * @returns {{formattedMessage: string, line: number, message: string, tagName: null}}
 */
function createError(line, message, tagName) {
    return {
        line: line || -1,
        message: message || "no message",
        tagName: tagName || null,
        formattedMessage: `${line ? "Error in line " + line + ":" : ""} ${message}`
    }
}

/**
 * Implement your custom rendering here
 * @param directory Parent directory of the current file
 * @param content File contents
 * @returns {string} Rendered html
 */
function renderMjml(directory, content) {
    return "<h1>Your generated html</h1>"
}

// Define some variables
let html = null;
let errors = []

// Try rendering and in case of errors catch and implement more specific error messages
try {
    html = renderMjml(directory, content)
} catch (e) {
    errors.push(
        createError(undefined, "Your custom error", undefined)
    )
}

// Write result
process.stdout.write(JSON.stringify({
    errors,
    html
}))