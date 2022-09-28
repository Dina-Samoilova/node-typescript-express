import express, { Express } from 'express';
import cors from 'cors';
import { router as notesRouter } from './routes/notesRoute';

const PORT = process.env.PORT || 5050;

const app: Express = express();

app.use(cors());
app.use('/notes', express.json(), notesRouter);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
