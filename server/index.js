const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require('cors')
const routes = require("./routes/authRoutes")

require("dotenv").config();



const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

let DB_ADMIN = process.env.DB_ADMIN;
let DB_PASSWORD = process.env.DB_PASSWORD;

const MONGODB_URI = `mongodb+srv://${DB_ADMIN}:${DB_PASSWORD}@cluster0.zep58.mongodb.net/creative_agency`;



app.use(routes)


app.get('/' ,(req,res)=>{
    res.send("Hello World")
})

app.use((req, res, next) => {
  let error = new Error("404 Not Page Not Found");
  error.status = 404;
  next(error);
});

app.use((error,req, res, next)=>{
 if (error.status = 404) {
  return res.status({
    mess: "Somethig Error"
  })
 }
})

const PORT = process.env.PORT;
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is Runing on ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
