const express = require("express")
const { validationRules } = require("./middlewares/validation.middleware");



const app = express();
app.use(express.json());

// app.get("/", (req, res) => {
// res.status(200).json({ message: "Hello World!" });
// });

app.post("/register", validationRules.registerUservalidationRules,(req, res) => {
   const { username, password } = req.body;
   // Process registration logic here
   res.status(201).json({ message: "User registered successfully" });
});



module.exports = app;