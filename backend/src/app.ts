import express from "express";

const app = express();

app.use(express.json()); // this allows my server to accept json data coming from the http requests and makes it available in the req.body

// routes

app.use("/api/auth", authRoutes);

// global error handler

app.use(errorHandler);

export default app;
