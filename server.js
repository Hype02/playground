const express = require("express")

const app = express()

app.use(express.static("static"))

app.listen(8080, ()=>{
    console.log("Listening on: http://localhost:8080")
})

