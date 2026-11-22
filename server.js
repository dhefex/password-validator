import express from "express"
import {verify} from "./controllers/controllers.js"

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))



app.post("/verify", verify)


app.listen(3000, () => {
    console.log("Server running on url http://localhost:3000")
})

