import fs from 'fs';
import { Note, Category, Stats, category } from '../helpers/noteInterface';

let notes: Note[] = [];

const stat: Stats = {
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

fs.readFile('./src/repositories/StartNotes.json', 'utf-8', (error, data) => {
  if (error) {
    console.log(error);
    return;
  } else {
    const notesFromFile = JSON.parse(data);

    notes = notesFromFile.notes;
  }
});

export function getAll () {
  return notes;
}

export function getById (id: string) {
  const foundNote: Note = notes.find((note) => note.id === +id);

  return foundNote || null;
}

export function create (title: string, description: string, category: Category) {
  const createDate: Date = new Date();

  const newNote: Note = {
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

export function remove (id: string) {
  notes = notes.filter(note => note.id !== +id);
}

export function update(
  id: string, title: string, description: string, category: Category, active: boolean,
) {
  const note: Note = getById(id);

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

export function getStats () {
  const notes: Note[] = getAll();
  const activeNotes: Note[] = notes.filter((note) => note.active);
  const archiveNotes: Note[] = notes.filter((note) => !note.active);

  category.forEach(item => {
    stat[item].active = activeNotes.filter(
      (note) => note.category === item).length;
    stat[item].archived = archiveNotes.filter(
      (note) => note.category === item).length;
  });

  return stat;
}
