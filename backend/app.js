const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const loginRoutes = require("./routes/loginRoutes");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api", loginRoutes);

// Checks errors
app.use((error, req, res, next) => {
  // checks if headers were sent
  if (res.headerSent) {
    // doesnt allow further responses to be sent
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Unknown Error Occured" });
});

app.listen(5000, () => console.log("Server Running"));
