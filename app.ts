import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import { db } from './utils/db';
import authRouter from './routes/authRouter';
import { globalErrorHandler } from './controllers/errorController';
import userRouter from './routes/userRouter';
import genreRouter from './routes/genreRouter';
import { getAllMoviesFromApi, getArtistDetails } from './controllers/movieApi';
import movieRouter from './routes/movieRouter';
import { createContact } from './controllers/contactController';
import { addEmailToNewsLetter } from './controllers/newsLetterSchema';

db();

const app = express();

app.use(morgan('combined'));

app.use(cors());

// parse application/json
app.use(bodyParser.json());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/genres', genreRouter);
app.use('/movies', movieRouter);
app.get('/movies-list', getAllMoviesFromApi);
app.post('/contact', createContact);
app.post('/newsletter', addEmailToNewsLetter);
app.get('/artist/:id', getArtistDetails);

app.get('/', (req, res) => {
  res.send('Hello Movie Search API');
});

app.use(globalErrorHandler);

export default app;
