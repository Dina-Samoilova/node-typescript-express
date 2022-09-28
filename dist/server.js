"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const notesRoute_1 = require("./routes/notesRoute");
const PORT = process.env.PORT || 5050;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use('/notes', express_1.default.json(), notesRoute_1.router);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
