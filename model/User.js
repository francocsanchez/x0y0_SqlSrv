module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        usu_codigo: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usu_nombre: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'usuario',
        timestamps: false
    };
    
    const User = sequelize.define(alias, cols, config)

    return User
}