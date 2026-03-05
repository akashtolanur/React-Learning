import mysql from "mysql2/promise"

const pool =mysql.createPool({
    host:"localhost",
    user: "root",
    password: "1105",
    database: "blogapp",
    dateStrings:true
})

export default pool