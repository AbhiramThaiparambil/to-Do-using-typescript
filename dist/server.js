"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const route_1 = __importDefault(require("./router/route"));
const path_1 = __importDefault(require("path"));
const PORT = 5001;
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set("views", path_1.default.join(__dirname, "../../src/views"));
app.use(express_1.default.static('src/public'));
app.use(express_1.default.static('dist/public'));
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/', route_1.default);
app.listen(PORT, () => {
    console.log(`TO DO IS RUNNING :- http://localhost:${PORT}`);
});
