"use strict";
// src/server.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 9876;
// FizzBuzz function
function fizzBuzz(from, to) {
    const result = [];
    for (let i = from; i <= to; i++) {
        if (i % 3 === 0 && i % 7 === 0) {
            result.push('FizzBuzz');
        }
        else if (i % 3 === 0) {
            result.push('Fizz');
        }
        else if (i % 7 === 0) {
            result.push('Buzz');
        }
        else {
            result.push(i.toString());
        }
    }
    return result;
}
// Express route
app.get('/fizzbuzz', (req, res) => {
    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);
    if (isNaN(from) || isNaN(to)) {
        return res.status(400).json({ error: 'Invalid parameters. Please provide valid "from" and "to" values.' });
    }
    const result = fizzBuzz(from, to);
    res.json({ result });
});
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
