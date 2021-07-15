const express = require("express");
const notes = require("../client/src/data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");

const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
dotenv.config();

app.use(cors());
connectDB();

//app.get("/", (req, res) => {
//res.send("API is running..");
//});

//app.get("/api/notes", (req, res) => {
//res.json(notes);
//});

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
