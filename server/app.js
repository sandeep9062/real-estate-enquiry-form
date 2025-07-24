import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import enquiryRoutes from "./routes/enquiryRoute.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(express.json());

app.use(cors({}));

app.get("/", (req, res) => {
  res.send(`Welcome to port ${PORT}`);
});

// API routes
app.use("/api/v1/enquiry", enquiryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
