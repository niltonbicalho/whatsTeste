console.log("Mysql ativo");
async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:@localhost:3306/barao_veiculos");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}


async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM noticias;');
    return rows;
}
 
module.exports = {selectCustomers}