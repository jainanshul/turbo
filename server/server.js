import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import connectMongo from 'connect-mongo';
import cors from 'cors';

import routes from './routes';

require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 5000;

// Set up Mongoose
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
.then(() => console.log('Database connected successfully'))
.catch(err => console.log(err));

// Setup session
const MongoStore = connectMongo(session);
app.use(session({
  secret: 'my random secret',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection: mongoose.connection}),
}));

// Setup CORS
app.use(cors());

// Setup API routes
routes(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
