const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const memberRoutes = require("./routes/members");

app.use(cors({
  origin: "http://localhost:3000"
}));
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/members", memberRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/TeamManagement")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(5000, () => console.log("Server running on port 5000"));