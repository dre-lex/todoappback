const Pool = require('pg').Pool

require('dotenv').config()
const isProduction = process.env.NODE_ENV === 'production'

// const pool = new Pool({
//     user: "postgres",
//     password: "postgres",
//     host: "localhost",
//     port: 5432,
//     database: 'todoapp'
// })

// const pool = new Pool({
//     user: "rvlcbmvxpgjqxn",
//     password: "c720699e63bf99b4cef3e4cd248096e5d2ca0067e33bcda7ce772e24a302d46d",
//     host: "ec2-34-193-110-25.compute-1.amazonaws.com",
//     port: 5432,
//     database: "d3tatsh6q1p6o8"
// })

const connectionString = `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`

const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    ssl: {
        rejectUnauthorized: false
    }
})

pool.on('error', (err, client) => {
    console.log('PG Pool error: ', err)
    process.exit(-1)
})

pool.on('connect', (err, client) => {
    if(err) console.log(err)
    console.log(client)
    console.log('PG Pool connected')
})


module.exports = pool