"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = require("../../TestData.json");
const randomData = (req, res) => {
    const { wordList } = data;
    let actualData = [];
    while (actualData.length < 10) {
        for (let i = 0; i < 10; i++) {
            const number = Math.floor(Math.random() * 15);
            actualData[i] = wordList[number];
        }
        actualData = [...new Set(actualData)];
    }
    res.send(actualData);
};
exports.default = randomData;
