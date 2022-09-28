"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stats = exports.update = exports.remove = exports.create = exports.getById = exports.getAll = void 0;
let notes = [
    {
        id: 1,
        title: 'Appointment Dentist',
        createdAt: '2022-09-17T16:10:28.657Z',
        category: 'Task',
        description: "I'm gonna have a dentist appointment on the 9/14/2022, I moved it from 9/5/2022",
        active: false,
    },
    {
        id: 2,
        title: 'What if paint room',
        createdAt: '2022-09-16T21:10:27.281Z',
        category: 'Random Thought',
        description: 'If I paint room in yellow, would I by happyer',
        active: false,
    },
    {
        id: 3,
        title: 'New Feature',
        createdAt: '2022-09-16T11:23:39.006Z',
        category: 'Idea',
        description: 'Implement feature to note app',
        active: true,
    },
    {
        id: 4,
        title: 'My host?',
        createdAt: '2022-09-17T19:38:59.191Z',
        category: 'Idea',
        description: 'Create a host for myself, do I needed it?',
        active: false,
    },
    {
        id: 5,
        title: 'Read about hosts',
        createdAt: '2022-09-17T19:38:59.191Z',
        category: 'Task',
        description: 'Read about creating host',
        active: true,
    },
    {
        id: 6,
        title: 'Experience',
        createdAt: '2022-09-17T19:41:45.388Z',
        category: 'Random Thought',
        description: 'Where get more experience',
        active: true,
    },
    {
        id: 7,
        title: 'Watch new tutorial video',
        createdAt: '2022-09-18T16:18:40.987Z',
        category: 'Task',
        description: 'New tutorial video will by post 9/25/2022',
        active: true,
    },
];
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
function stats() {
    const notes = getAll();
    const activeNotes = notes.filter((note) => note.active);
    const archiveNotes = notes.filter((note) => !note.active);
    const categorys = [];
    notes.forEach((note) => categorys.includes(note.category) ? '' : categorys.push(note.category));
    const stats = categorys.reduce((obj, category) => (Object.assign(Object.assign({}, obj), { [category]: {
            active: activeNotes.filter((note) => note.category === category).length,
            archived: archiveNotes.filter((note) => note.category === category)
                .length,
        } })), {
        Task: {
            active: 0,
            archived: 0,
        },
        'Random Thought': {
            active: 0,
            archived: 0,
        },
        Idea: {
            active: 0,
            archived: 0,
        },
    });
    return stats;
}
exports.stats = stats;
