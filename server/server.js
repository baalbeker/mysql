import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/users.js';

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
