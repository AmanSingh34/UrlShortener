import express from 'express'
import path from 'path'
import { connectDB } from './connectDB.js'

const app = express()
const PORT = 8001
app.use(express.json())
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))


connectDB().then(()=>{
    console.log("mongoDb Connected")
})
.catch((err)=>{
    console.log("error While connecting mongodb",err)
})

//importing routes
import urlRouter from './routes/url.routes.js'
import staticRouter from './routes/static.routes.js'
import { url } from './models/url.model.js'

app.use('/url',urlRouter)
app.use('/',staticRouter)


app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})
