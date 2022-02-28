import { makeDoctorCard } from './utility.js'

var url = window.location.href;
var index = url.lastIndexOf("\/");
var doctorName = url.substring(index + 1, url.length);

$('.doctortab').click(() => location.href = '/doctors/all');
$('.logo').click(() => location.href = '/doctors/all');

axios.get('/info/' + doctorName + '/similar', {}).then(function (res) {
    fillInfo(res.data.this);
    let similarDoctors = res.data.similar;
    similarDoctors.forEach(doctor => {
        makeDoctorCard(doctor);
    });
}).catch(function (err) {
    console.log(err);
});

function fillInfo(doctor) {
    $("#fullname").text(doctor.fullname);
    $("#location").text(doctor.location);
    $("#rating").text(doctor.rating);
    $("#summary").text(doctor.comment);
    $("#email").text(doctor.name + '@mockdoctor.com');
}