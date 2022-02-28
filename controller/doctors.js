
var mysql = require('mysql');
const mysqlCon = mysql.createPool({
    host: "mockdoctor.crrbcag1wzdz.us-west-1.rds.amazonaws.com",
    user: "admin",
    password: "19981117",
    database: "md",
    timezone: 'UTC'
});

function getDoctorInfo(doctorName) {
    const sql = 'SELECT * FROM doctors WHERE name = "' + doctorName + '";';
    return new Promise(async (resolve,reject) => {
        await mysqlCon.query(sql, function (err, result, fields){
            if (err) {
                console.log(error);
                return err;
            }
            return resolve(result);
        });
    });
}

function getSimilarDoctorInfo(doctor) {
    const sql = 'SELECT * FROM doctors WHERE speciality = "' + doctor.speciality + '" AND NOT name = "' + doctor.name  + '";';
    return new Promise(async (resolve,reject) => {
        await mysqlCon.query(sql, function (err, result, fields){
            if (err) {
                console.log(error);
                return err;
            }
            return resolve(result);
        });
    });
}

function getAllDoctors() {
    const sql = 'SELECT * FROM doctors;';
    return new Promise(async (resolve,reject) => {
        await mysqlCon.query(sql, function (err, result, fields){
            if (err) {
                console.log(error);
                return err;
            }
            return resolve(result);
        });
    });
}


module.exports = {getDoctorInfo, getSimilarDoctorInfo, getAllDoctors};
