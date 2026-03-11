import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import { connectDB } from "./config/db.js";

import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";
import contactRoute from "./routes/contact.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// __dirname fix for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/books", bookRoute);
app.use("/api/user", userRoute);
app.use("/api/contact", contactRoute);

// Serve Vite build
const frontendPath = path.join(__dirname, "../frontend/dist");

app.use(express.static(frontendPath));

app.get("/*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

app.listen(PORT, async () => {
  await connectDB();
  console.log(`🚀 Server running on ${PORT}`);
});
