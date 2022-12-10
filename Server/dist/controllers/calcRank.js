"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { scoresList } = require("../../TestData.json");
const calcRank = (req, res) => {
    const { score } = req.body;
    const rankArr = scoresList.filter((item) => item < score);
    const rank = (rankArr.length / scoresList.length) * 100;
    console.log(scoresList);
    console.log(rankArr);
    if (rank.toString().split('').length <= 5) {
        res.send(rank);
    }
    else {
        res.send(rank.toFixed(2));
    }
    console.log(req.body);
};
exports.default = calcRank;
