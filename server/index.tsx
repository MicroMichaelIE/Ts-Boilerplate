// server/index.js
import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT || 3001
const __dirname = path.resolve() // path to current directory

const app = express()

// configure the app to use bodyParser and set a default parameter
// ignore next line with ts-ignore
// @ts-ignore
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// configure the app to enable cross origin resource sharing (cors)
app.use(cors())

const MONGO_CONNECTION_URI =
    process.env.CUSTOMCONNSTR_MONGODB_URI ||
    'mongodb://localhost:27017/your-db-name'
const POSTGRES_CONNECTION_URI =
    process.env.POSTGRESSQLCONNSTR_URI ||
    'postgres://localhost:5432/your-db-name'

// connect to the database
// ts-ignore
mongoose
    .connect(MONGO_CONNECTION_URI, {
        // @ts-ignore
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log('Server is running')
        })
    })
    .catch((error) => console.log(error.message))
// set another default value for mongoose
mongoose.set('returnOriginal', false)

app.use(express.static(path.resolve(__dirname, '../../client/build')))

// Handle GET Requests to /api route
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' })
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})
