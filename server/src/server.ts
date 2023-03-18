import express from "express";
import { connectDB } from "./db/connection";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("<h2>Welcome 2 Friends</h2>");
});

connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running at http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.error("Error connectiong to Database\n", error);
  });
