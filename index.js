import  express  from "express";
import path from 'path'
import raceRoutes from './routes/race.js'
import cors from "cors"

const app = express()
const PORT = process.env.PORT ?? 2000
const __dirname = path.resolve()

app.use(cors())

app.use(raceRoutes)


app.get('/', (req,res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`)
})