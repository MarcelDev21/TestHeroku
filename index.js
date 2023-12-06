const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const port = 3000
const ProductRouter = require('./ProductRouter/ProductRouter')




dotenv.config()
mongoose.connect(process.env.Mongo_Url).then((response)=> console.log("db Coneected succesfully")).catch(()=> console.log("error"))

app.use(express.json({limit: '100mb'}))
app.use(express.urlencoded({limit: '100mb', extended: true}))

app.use('/', ProductRouter)


app.get('/', (req, res) => res.send('Mfoulou Yves Marcel'))
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))