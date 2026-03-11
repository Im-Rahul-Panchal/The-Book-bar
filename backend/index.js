import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import { connectDB } from "./config/db.js";

import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";
import contactRoute from "./routes/contact.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/books", bookRoute);
app.use("/api/user", userRoute);
app.use("/api/contact", contactRoute);

// production
if (process.env.NODE_ENV === "production") {
  const dirPath = path.resolve();

  app.use(express.static("frontend/dist"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(dirPath, "frontend/dist/index.html"));
  });
}

app.listen(PORT, async () => {
  await connectDB();
  console.log(`🚀 Server running on ${PORT}`);
});