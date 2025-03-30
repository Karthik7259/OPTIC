

import dotenv from "dotenv"
import { configDotenv } from "dotenv";

configDotenv(dotenv);
import express from "express"

import mongoose from "mongoose";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB Connection Error:", err));

// Define Mongoose Schema & Model
// const ExamSchema = new mongoose.Schema({
//     subject: String,
//     students: Array, // Assuming students will be an array of student names/IDs
//     time: String, // Example: "10:00 AM"
//     date: String, // Example: "2025-03-20"
//     duration: String, // Example: "2 hours"
//   });
  
//   const ExamModel = mongoose.model("Exam", ExamSchema);

  const ExamSchema = new mongoose.Schema({
    subject: String, // Change to Number since you're receiving `subject: 1`
    students: [String], // Ensure students is an array of strings
    time: String, // Example: "09:37"
    date: String, // Example: "2025-03-19"
    duration: String, // Change to Number since you're receiving `duration: '60'`
  });
  
  const ExamModel = mongoose.model("Exam", ExamSchema);
// API to Add User
app.post("/add", async (req, res) => {
  try {
    const exam = new ExamModel(req.body);
    await exam.save();
    res.json({ message: "exam added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/getexam",async(req,res)=>{
    try{
        const exam = await ExamModel.findOne();
        res.json(exam);
    }catch (err) {
        res.status(500).json({ error: err.message });
    }
})

app.get("/profile", async (req, res) => {
    try {
        const profile = await adminmodel.findOne(); // Fetch the first document
             console.log(profile)
        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }

        res.json(profile); // Send the retrieved data as JSON
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
