import pgPromise from 'pg-promise'

const pgp = pgPromise({})
const db = pgp(process.env.DB_STRING)

db.connect()
    .then((obj) => {
        console.log('Connected to database');
        obj.done() // success, release connection;
    })
    .catch((error) => {
        console.error('ERROR:', error.message);
    })

export default db