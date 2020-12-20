const express = require("express");
const connectDB = require("./config/db");
const app = express();

// * CONNECT DB
connectDB();

app.get("/", (req, res) => res.send("api runnin"));

// ! DEFINE ROUTES
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

// CONNECT SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`SERVER STARTED AT ${PORT}`));
