const express = require("express")
const app  = express()
const PORT = process.env.PORT || 3000


app.use("/", (req, res) => {
        res.send({"message" : "hello there"})
})

app.listen(PORT, () => {
        console.log("connected at " + PORT)
})

