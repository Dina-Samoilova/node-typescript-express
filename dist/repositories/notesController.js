"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = exports.remove = exports.update = exports.create = exports.getOne = exports.getAll = void 0;
const noteService = __importStar(require("../services/notesService"));
const getAll = (req, res) => {
    const notes = noteService.getAll();
    res.send(notes);
};
exports.getAll = getAll;
const getOne = (req, res) => {
    const { id } = req.params;
    const foundNote = noteService.getById(id);
    if (!foundNote) {
        res.sendStatus(404);
        return;
    }
    res.send(foundNote);
};
exports.getOne = getOne;
const create = (req, res) => {
    const { title, description, category } = req.body;
    if (!title || !description || !category) {
        res.sendStatus(422);
        return;
    }
    const newNote = noteService.create(title, description, category);
    res.statusCode = 201;
    res.send(newNote);
};
exports.create = create;
const update = (req, res) => {
    const { id } = req.params;
    const foundNote = noteService.getById(id);
    if (!foundNote) {
        res.sendStatus(404);
        return;
    }
    const { title, description, category, active } = req.body;
    if (!title && !description && !category && typeof active !== 'boolean') {
        res.sendStatus(422);
        return;
    }
    noteService.update(id, title, description, category, active);
    res.send(foundNote);
};
exports.update = update;
const remove = (req, res) => {
    const { id } = req.params;
    const foundNote = noteService.getById(id);
    if (!foundNote) {
        res.sendStatus(404);
        return;
    }
    noteService.remove(id);
    res.sendStatus(204);
};
exports.remove = remove;
const getStats = (req, res) => {
    const stats = noteService.stats();
    res.send(stats);
};
exports.getStats = getStats;
