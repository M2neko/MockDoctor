var express = require('express');
var router = express.Router();
const doctorController = require('../controller/doctors');
const sortController = require('../controller/sort');

router.get('/all', async function(req, res, next) {
    var doctorInfo = await doctorController.getAllDoctors();
    doctorInfo = await sortController.sortAllDoctors(doctorInfo);
    res.status(200).send(doctorInfo); 
});


router.get('/:doctorName', async function(req, res, next) {
    var doctorName = req.params.doctorName;
    var doctorInfo = await doctorController.getDoctorInfo(doctorName);
    if (doctorInfo.length > 0) res.status(200).send(doctorInfo); 
    else res.status(404).send(null);
});


router.get('/:doctorName/similar', async function(req, res, next) {
    var doctorName = req.params.doctorName;
    let doctor = await doctorController.getDoctorInfo(doctorName);
    doctor = doctor[0];
    if (doctor.length < 1) {
        res.status(404).send(null);
        return;
    }
    var doctorInfo = await doctorController.getSimilarDoctorInfo(doctor);
    doctorInfo = await sortController.sortSimilarDoctors(doctor, doctorInfo);
    res.status(200).send({ this : doctor, similar : doctorInfo }); 
});

module.exports = router;