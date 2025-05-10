const express = require("express");
const statsRoutes = require("./routes/statsRoutes");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/stats", statsRoutes);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
