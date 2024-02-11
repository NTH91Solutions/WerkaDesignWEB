const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

/// Database conection with MongooseDB
mongoose.connect("mongodb+srv://NTHWEBDev:<Weronika01>@cluster0.y3sz4dk.mongodb.net/WerkaDesignWEB")
