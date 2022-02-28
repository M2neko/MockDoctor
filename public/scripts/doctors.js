import { makeDoctorCard } from './utility.js'


$('.doctortab').click(() => location.href = '/doctors/all');
$('.logo').click(() => location.href = '/doctors/all');


axios.get('/info/all').then(function (res) {
    let doctors = res.data;
    doctors.forEach(doctor => {
        makeDoctorCard(doctor);
    });
}).catch(function (err) {
    console.log(err);
});