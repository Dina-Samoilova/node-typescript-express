"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationCategory = void 0;
const noteInterface_1 = require("./noteInterface");
const validationCategory = (str) => (noteInterface_1.category.includes(str));
exports.validationCategory = validationCategory;
