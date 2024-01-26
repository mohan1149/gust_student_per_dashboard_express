import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/Routes.js';
const app = express();
const port = 3000;

// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
app.use('/api', cors({
  origin: '*', // Replace with the specific origins you want to allow
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  // credentials: true,
  optionsSuccessStatus: 204,
}), router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
