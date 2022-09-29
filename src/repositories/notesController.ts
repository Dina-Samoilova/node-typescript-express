import { Request, Response } from 'express';
import { Note, Stats } from '../helpers/noteInterface';
import { validationCategory } from '../helpers/helpFunc'
import * as noteService from '../services/notesService';

export const getAll = (req: Request, res: Response) => {
  const notes: Note[] = noteService.getAll();

  res.send(notes);
};

export const getOne = (req: Request, res: Response) => {
  const { id } = req.params;
  const foundNote: Note = noteService.getById(id);

  if (!foundNote) {
    res.sendStatus(404);
    return;
  }

  res.send(foundNote);
};

export const create = (req: Request, res: Response) => {
  const { title, description, category } = req.body;

  if (
    typeof title !== 'string' ||
    typeof description !== 'string' ||
    !validationCategory(category)
  ) {
    res.sendStatus(422);
    return;
  }

  const newNote: Note = noteService.create(title, description, category);

  res.statusCode = 201;
  res.send(newNote);
};

export const update = (req: Request, res: Response) => {
  const { id } = req.params;
  const foundNote: Note = noteService.getById(id);

  if (!foundNote) {
    res.sendStatus(404);
    return;
  }

  const { title, description, category, active } = req.body;

  if (title && typeof title !== 'string') {
    res.sendStatus(422);
    return;
  }

  if (description && typeof description !== 'string') {
    res.sendStatus(422);
    return;
  }

  if (category && validationCategory(category) === false) {
    res.sendStatus(422);
    return;
  }

  if (active !== undefined && typeof active !== 'boolean') {
    res.sendStatus(422);
    return;
  }

  if (title === undefined && description === undefined
    && category === undefined && active === undefined) {
      res.sendStatus(422);
      return;
    }

  noteService.update(id, title, description, category, active);

  res.send(foundNote);
};

export const remove = (req: Request, res: Response) => {
  const { id } = req.params;
  const foundNote: Note = noteService.getById(id);

  if (!foundNote) {
    res.sendStatus(404);
    return;
  }

  noteService.remove(id);
  res.sendStatus(204);
};

export const getStats = (req: Request, res: Response) => {
  const stat: Stats = noteService.getStats();

  res.send(stat);
};
