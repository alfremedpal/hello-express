import express from 'express'
import db from '../db.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        products: 'all'
    })
})

export default router