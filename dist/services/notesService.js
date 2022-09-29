"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = exports.update = exports.remove = exports.create = exports.getById = exports.getAll = void 0;
const fs_1 = __importDefault(require("fs"));
const noteInterface_1 = require("../helpers/noteInterface");
let notes = [];
const stat = {
    Task: {
        active: 0,
        archived: 0,
    },
    Idea: {
        active: 0,
        archived: 0,
    },
    'Random Thought': {
        active: 0,
        archived: 0,
    },
};
fs_1.default.readFile('./src/repositories/StartNotes.json', 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
        return;
    }
    else {
        const notesFromFile = JSON.parse(data);
        notes = notesFromFile.notes;
    }
});
function getAll() {
    return notes;
}
exports.getAll = getAll;
function getById(id) {
    const foundNote = notes.find((note) => note.id === +id);
    return foundNote || null;
}
exports.getById = getById;
function create(title, description, category) {
    const createDate = new Date();
    const newNote = {
        id: notes.length + 1,
        title,
        createdAt: createDate.toISOString(),
        category,
        description,
        active: true,
    };
    notes.push(newNote);
    return newNote;
}
exports.create = create;
function remove(id) {
    notes = notes.filter(note => note.id !== +id);
}
exports.remove = remove;
function update(id, title, description, category, active) {
    const note = getById(id);
    if (title) {
        Object.assign(note, { title });
    }
    if (description) {
        Object.assign(note, { description });
    }
    if (category) {
        Object.assign(note, { category });
    }
    if (typeof active === 'boolean') {
        Object.assign(note, { active });
    }
    return note;
}
exports.update = update;
function getStats() {
    const notes = getAll();
    const activeNotes = notes.filter((note) => note.active);
    const archiveNotes = notes.filter((note) => !note.active);
    noteInterface_1.category.forEach(item => {
        stat[item].active = activeNotes.filter((note) => note.category === item).length;
        stat[item].archived = archiveNotes.filter((note) => note.category === item).length;
    });
    return stat;
}
exports.getStats = getStats;
