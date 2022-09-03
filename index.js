import express from 'express'
import './env.js'

import productsRoutes from './routes/products.js'

const app = express()
const PORT = 5000

app.use('/products', productsRoutes)

app.get('/', (req, res) => {
    res.json({
        message: 'ok'
    })
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
