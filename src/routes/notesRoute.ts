import express, { Router } from 'express';
import * as notesController from '../repositories/notesController';

export const router: Router = express.Router();

router.get('/', notesController.getAll);

router.get('/stats', notesController.getStats);

router.get('/:id', notesController.getOne);

router.post('/', notesController.create);

router.patch('/:id', notesController.update);

router.delete('/:id', notesController.remove);

