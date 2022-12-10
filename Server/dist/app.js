"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const selectRandomData_1 = __importDefault(require("./controllers/selectRandomData"));
const calcRank_1 = __importDefault(require("./controllers/calcRank"));
const app = (0, express_1.default)();
const cors = require("cors");
const port = 4000;
app.use(cors());
app.use(express_1.default.json());
app.get('/words', selectRandomData_1.default);
app.post('/rank', calcRank_1.default);
app.get('/', (req, res) => {
    const arr = [1, 2, 3, 5];
    res.send(arr);
});
app.listen(port, () => console.log('Server running'));
