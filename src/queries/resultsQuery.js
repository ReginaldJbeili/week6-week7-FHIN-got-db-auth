const dbConnection = require("../database/db_connection");


const resultAlive = (cb) => {
    dbConnection.query('SELECT BOTTOM 1 * FROM status', (err,res)=>{
        if(err) return cb(err);
        console.log('get data call = res.rows: ' + res.rows);
        cb(null, res.rows);
    });
};

const dbConnection = require("../database/db_connection");


const resultDead = (cb) => {
    dbConnection.query('SELECT TOP 1 * FROM status', (err,res)=>{
        if(err) return cb(err);
        console.log('get data call = res.rows: ' + res.rows);
        cb(null, res.rows);
    });
};

module.exports = {
    resultAlive,
    resultDead
}