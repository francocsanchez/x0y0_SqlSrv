const sql = require('mssql');

const dbSettings = {
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    server: process.env.DBHOST,
    database: process.env.DB,
    options: {
        trustedConnection: true,
        encrypt: false,
        enableArithAbort: true,
        trustServerCertificate: true,
    },
}

module.exports = async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings)
        return pool
    } catch (error) {
        console.log(error)
    }
}
