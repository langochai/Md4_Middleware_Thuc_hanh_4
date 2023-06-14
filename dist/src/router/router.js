"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const responseTime_1 = require("../middleware/responseTime");
const axios_1 = __importDefault(require("axios"));
exports.router = express_1.default.Router();
exports.router.use(responseTime_1.responseTime);
exports.router.get('/', async (req, res) => {
    try {
        const url = 'https://pokeapi.co/api/v2/ability/?limit=100&offset=0';
        const response = await axios_1.default.get(url);
        const data = response.data;
        if (data) {
            res.status(200).json({ data: data });
        }
        else {
            res.end('<h1>Error<h1>');
        }
    }
    catch (err) {
        res.end('<h1>Error<h1>');
    }
});
//# sourceMappingURL=router.js.map