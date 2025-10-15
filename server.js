const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const morgan = require('morgan');
const menuRouter = require('./routes/menu')
const path = require('path');

const app = express();

const mongoURL = "mongodb+srv://nht:nht612@nyeinhsuthwe.z7sqllh.mongodb.net/?retryWrites=true&w=majority&appName=nyeinhsuthwe";

mongoose.connect(mongoURL).then(()=>{
    app.listen( process.env.PORT, ()=>{
    console.log(`app is running on ${process.env.PORT}`)
})
});

app.use(express.static("public"));
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ["POST", "GET", "PUT", "PATCH", "DELETE"]
}));

app.use(morgan(`dev`));
app.use(express.json());
app.use("/api/uploads", express.static("uploads"));

app.use('/api', menuRouter);