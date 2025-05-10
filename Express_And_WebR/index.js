import express from 'express';
import { statsRoutes } from './routes/statsRoutes.js';
import { pingRoutes } from './routes/pingRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use("/stats", statsRoutes);
app.use("/", pingRoutes);


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
