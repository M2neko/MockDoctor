// First Compare Higher Rating
// Last Compare Name (lexicography)

// Star -> Name
function sortAllDoctors(doctors) {
    doctors.sort((a, b) => {
        if (a.rating != b.rating) return b.rating - a.rating;
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });
    return doctors;
}

// Only Same Speciality can be Similar
// First Compare Higher Rating
// Then Compare Same Location
// Last Compare Name (lexicography)

// Star -> Location -> Name
function sortSimilarDoctors(doctor, doctors) {
    doctors.sort((a, b) => {
        if (a.rating != b.rating) return b.rating - a.rating;
        if (a.location == doctor.location && b.location != doctor.location) return -1;
        if (a.location != doctor.location && b.location == doctor.location) return 1;
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });
    return doctors;
}

module.exports = {sortAllDoctors, sortSimilarDoctors};