const getConnection = require('../config/db');

const list = async (req, res) => {
    const pool = await getConnection();
    const usuarios = await pool.request().query("SELECT * FROM usuario")
    
    const users = usuarios.recordsets[0];
    res.render('./list', { users });
}

module.exports = {
    list
}
