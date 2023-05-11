const Pool = require('pg').Pool

require('dotenv').config()

// const pool = new Pool({
//     user: "postgres",
//     password: "postgres",
//     host: "localhost",
//     port: 5432,
//     database: 'todoapp'
// })

const pool = new Pool({
    user: "rvlcbmvxpgjqxn",
    password: "c720699e63bf99b4cef3e4cd248096e5d2ca0067e33bcda7ce772e24a302d46d",
    host: "ec2-34-193-110-25.compute-1.amazonaws.com",
    port: 5432,
    database: "d3tatsh6q1p6o8"
})

module.exports = pool