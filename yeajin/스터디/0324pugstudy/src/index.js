const express = require("express");
const app = express();


const PORT = 4000;
const handleListening = () =>{
  console.log(`Welcome to http://localhost:${PORT}`);
};

app.set("view engine", "pug");
app.set("views","src/views");
app.use("/",(req,res)=>res.render("home"));
app.listen(PORT, handleListening);