import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js";

dotenv.config()
const app = express();
app.use(cors());

app.use("/api", router)
// Start the server
const port = 3001; // Choose a port number
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});