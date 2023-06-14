"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const router_1 = require("./src/router/router");
const PORT = 8000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(router_1.router);
app.listen(PORT, () => {
    console.log(`segs at ${PORT}`);
});
//# sourceMappingURL=index.js.map