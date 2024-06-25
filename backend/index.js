// backend/index.js
const express = require("express")
const rootRouter = require("./routes/index")

app.use(cors())

const app = express()

app.use("/api/v1", rootRouter)
