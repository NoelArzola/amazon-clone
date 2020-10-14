const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("pk_test_3e0ixkUM0GkeLQ44AxWTXESQ00jsrkAhFw");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// API setup

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API roots
app.get("/", (request, response) => res.status(200).send("hello world"));

// Listen commands
exports.api = functions.https.onRequest(app);
