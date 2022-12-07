require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 5000;
const trackRoute = require("./routes/trackRoute");

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/trackupload', trackRoute);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`Server started on port ${port}`)),
  )
  .catch((err) => console.log(err));
