import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { CategoryRouter, ProductRouter } from './components'

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/category', CategoryRouter)
app.use('/api/product', ProductRouter)

app.get('/', (req, res) => {
    res.send('Bienvenido a mi api')
})

app.listen(8000, () => {
    console.log('proyecto corriendo en el puerto 8000')
})