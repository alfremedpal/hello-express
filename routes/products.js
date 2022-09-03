import express from 'express'
import db from '../db.js'

const router = express.Router()

router.get('/', async (req, res) => {
    let start = process.hrtime()
    try {
        const products = await db.any('SELECT * from products')
        let stop = process.hrtime(start)
        res.json({
            data: products,
            time: `${stop[0]} seconds and ${stop[1] / 1000000} milliseconds`
        })
    }
    catch(err) {
        console.log(err)
    }
})

export default router